export function formatPhone(phoneString: string) {
  let i = 0;

  return '+## (##) #####-####'.replace(/#/g, () => phoneString[i++] || '');
}
