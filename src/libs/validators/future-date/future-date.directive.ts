import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export const futureDateValidator: ValidatorFn = (control: AbstractControl):ValidationErrors | null =>  {
  const baseDate = control.get('receiveDate');
  const hasExpiration = control.get('hasExpiration');
  const futureDate = control.get('expirationDate');

  if (hasExpiration?.value) {
    // Has expiration is checked but no expiration date is set
    if (!futureDate?.value) {
      return {missingExpiration: true};
    }
    if (baseDate?.value && futureDate?.value) {
      // Expiration date is earlier than receive date
      if (baseDate.value >= futureDate.value) {
        return {futureError: true};
      }
    }
  }

  return null;
}
