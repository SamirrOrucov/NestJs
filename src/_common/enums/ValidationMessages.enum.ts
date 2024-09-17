export enum DtoPrefix {
  NAME = 'NAME',
  LASTNAME = 'LASTNAME',
  İDENTİTY_NUMBER = 'İDENTİTY_NUMBER',
}
export enum ValidationType {
  IS_NOT_EMPTY = 'IS_NOT_EMPTY',
  MAX_LENTGH = 'MAX_LENTGH',
}

export function getValidationMessage(
  prefix: DtoPrefix,
  validationType: ValidationType,
  ...args: any
): string {
  const message = `${prefix}_${validationType}${args.length > 0 ? '|' + args.join('|') : ''}`;
  return message;
}
