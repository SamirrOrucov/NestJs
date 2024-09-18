export enum DtoPrefix {
  NAME = 'NAME',
  LASTNAME = 'LASTNAME',
  İDENTİTY_NUMBER = 'İDENTİTY_NUMBER',
  EMAIL_OR_PHONE = 'EMAIL_OR_PHONE',
}
export enum ValidationType {
  IS_NOT_EMPTY = 'IS_NOT_EMPTY',
  MAX_LENTGH = 'MAX_LENTGH',
  MIN_LENTGH = 'MIN_LENTGH',
}

export function getValidationMessage(
  prefix: DtoPrefix,
  validationType: ValidationType,
  ...args: any
): string {
  const message = `${prefix}_${validationType}${args.length > 0 ? '|' + args.join('|') : ''}`;
  return message;
}
