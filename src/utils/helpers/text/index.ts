import { colors } from '@/utils/design/colors';

export const formatNumberPhone = (phone?: string): string => {
  if (!phone) return '';
  const phoneFormatted = phone.replace(/\D/g, '');
  const phoneFormatted2 = phoneFormatted.replace(/^(\d{2})(\d)/g, '($1) $2');
  const phoneFormatted3 = phoneFormatted2.replace(/(\d)(\d{4})$/, '$1-$2');
  return phoneFormatted3;
};

export const formatCardNumber = (cardNumber?: string) => {
  if (!cardNumber) return '';
  const cardNumberFormatted = cardNumber.replace(/\D/g, '');
  const chunks = cardNumberFormatted.match(/.{1,4}/g); // Split the card number into chunks of 4 digits
  if (!chunks) return cardNumberFormatted; // If the chunks array is empty, return the original unformatted card number
  return chunks.join(' '); // Join the chunks with a space separator
};

export const formatCEP = (cep?: string) => {
  if (!cep) return '';
  const cepFormatted = cep.replace(/\D/g, '');
  const cepFormatted2 = cepFormatted.replace(/^(\d{5})(\d)/g, '$1-$2');
  return cepFormatted2;
};

export const getAvatarUrl = (name?: string) => {
  return `https://api.dicebear.com/6.x/initials/png?seed=${
    name || ``
  }&backgroundColor[]&textColor=${colors.brend.orange[600].replace(
    `#`,
    ``,
  )}&fontSize=45`;
};

export const securityMail = (email?: string) => {
  if (!email) return '';
  return `${email.replace(/(.{1})(.*)(@.*)/, `$1****$3`)}`;
};

export const securitPhone = (phone?: string) => {
  if (!phone) return '';
  return `*****-${phone?.slice(-4)}`;
};
