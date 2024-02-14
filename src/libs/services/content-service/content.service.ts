import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {v4} from "uuid";
import {Endpoint, ENDPOINT_BASE, EndpointPaths} from "../../model/endpoints";
import {Item} from "../../model/item";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, map, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpClient: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);
  contentSubscription$!: Observable<Item[]>;
  selectedContent$: BehaviorSubject<Item | null> = new BehaviorSubject<Item | null>(null);
  contentList$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
    this.loadContent();
  }

  loadContent() {
    this.contentSubscription$ = this.httpClient.get<Item[]>(ENDPOINT_BASE + EndpointPaths.get(Endpoint.INVENTORY))
      .pipe(catchError(error => {
        throw new Error('Failed to load content', error)
      }));
    this.contentSubscription$.subscribe(resp => {
      console.log('Load Content Response: ' + JSON.stringify(resp));
      this.contentList$.next(resp);
    });
  }

  addContent(addedContent: Item) {
    addedContent.id = v4();
    this.httpClient.post(`${ENDPOINT_BASE}${EndpointPaths.get(Endpoint.INVENTORY)}`, addedContent)
      .pipe(catchError(error => {
        throw new Error('Failed to add content', error)
      }))
      .subscribe({
        next: value => this.refreshContent(null)
      });
  }

  updateContent(contentEvent: Item) {
    this.contentList$.pipe(
      take(1),
      map(value => this.findIdxForContent(value, contentEvent)))
      .subscribe(idx => {
        // Weird quirk with the form the state of the expiration is still set
        // if it was previously and has expiration was unchecked, so clear it out here before saving
        if (!contentEvent.hasExpiration) {
          contentEvent.expirationDate = '';
        }

        if (idx !== -1) {
          this.httpClient.put(`${ENDPOINT_BASE}${EndpointPaths.get(Endpoint.INVENTORY)}/${contentEvent.id}`, contentEvent)
            .pipe(catchError(error => {
              throw new Error('Failed to update content', error)
            }))
            .subscribe({
              next: value => this.refreshContent(null)
            });
        } else {
          this.addContent(contentEvent);
        }
      });
  }

  deleteContent(deletedContent: Item) {
    this.contentList$.pipe(
      take(1),
      map(value => this.findIdxForContent(value, deletedContent)))
      .subscribe(idx => {
        if (idx !== -1) {
          this.httpClient.delete(`${ENDPOINT_BASE}${EndpointPaths.get(Endpoint.INVENTORY)}/${deletedContent.id}`)
            .pipe(catchError(error => {
              throw new Error('Failed to delete content', error)
            }))
            .subscribe({
              next: value => this.refreshContent(deletedContent.id)
            });
        }
      });
  }

  selectContentById(id: string | null) {
    this.contentList$.pipe(
      take(1),
      map(value => this.findContentById(value, id))
    ).subscribe(content => {
      if (content) {
        this.selectContent(content);
      } else {
        this.selectContent(null);
      }
    });
  }

  selectContent(contentEvent: Item | null) {
    console.log('CS - Select: ' + JSON.stringify(contentEvent));
    this.selectedContent$.next(contentEvent);
  }

  navigateContent(contentEvent: Item) {
    console.log('CS - Navigate: ' + JSON.stringify(contentEvent));
    this.router.navigateByUrl('dashboard/' + contentEvent.id);
  }

  resetSelectedContent() {
    console.log('CS - Reset: ');
    this.router.navigateByUrl('dashboard/');
  }

  private refreshContent(id: string | null) {
    console.log('CS - Refresh: ' + id);
    this.loadContent();

    // if id is provided we only want to clear the selected content if that has the same id
    this.selectedContent$.pipe(take(1)).subscribe(value => {
      if (!id || value?.id === id) {
        this.resetSelectedContent();
      }
    });
  }

  private findIdxForContent(content: Item[], toFind: Item) : number {
    return this.findIdxForId(content, toFind.id);
  }

  private findIdxForId(content: Item[], toFind: string) {
    return content.findIndex(content => content.id === toFind)
  }

  private findContentById(content: Item[], toFind: string | null): Item | undefined {
    return content.find(content => content.id === toFind);
  }
}
