import {FormControl, FormGroup} from "@angular/forms";

export type TypedForm<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;
