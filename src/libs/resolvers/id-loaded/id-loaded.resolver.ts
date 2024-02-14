import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {ContentService} from "../../services/content-service/content.service";
import {Item} from "../../model/item";

export const idLoadedResolver: ResolveFn<Item[]> = (route, state) => {
  return inject(ContentService).contentSubscription$;
};
