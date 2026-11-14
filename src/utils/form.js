// телефон: только цифры, всегда формат +7 XXX XXX XX XX
export const formatPhone = (raw) => {
  let digits = raw.replace(/\D/g, '');

  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
  if (digits && !digits.startsWith('7')) digits = '7' + digits;
  digits = digits.slice(0, 11);

  const p = [
    digits.slice(0, 1),
    digits.slice(1, 4),
    digits.slice(4, 7),
    digits.slice(7, 9),
    digits.slice(9, 11),
  ];

  return p.join(' ').trim() && `+${p[0]} ${p[1]} ${p[2]} ${p[3]} ${p[4]}`.replace(/\s+/g, ' ').trim();
};

// имя: только буквы, пробел и дефис, первая буква каждого слова — большая
export const formatName = (raw) => {
  const cleaned = raw.replace(/[^a-zA-Zа-яёА-ЯЁ\s-]/gi, '').slice(0, 30);
  return cleaned
    .toLowerCase()
    .replace(/(^|[\s-])([а-яёa-z])/g, (_, sep, ch) => sep + ch.toUpperCase());
};

// валидация: пустое поле — ошибки нет, неполное — есть
export const validateForm = (values) => {
  const errors = { name: '', phone: '' };

  if (values.phone) {
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length < 11) errors.phone = 'введите номер';
  }

  if (values.name && values.name.trim().length < 2) {
    errors.name = 'введите имя';
  }

  return errors;
};
