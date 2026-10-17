/**
 * Contact links and identity. Edit here; nothing else in the app hard-codes these.
 */
export const site = {
  name: { en: 'Mohamed Mosaad', ar: 'محمد مسعد' },
  initials: 'MM',
  email: 'engmohamedmosaad285@gmail.com',
  /** International format, digits only, for wa.me links. */
  whatsappNumber: '201220530706',
  whatsappDisplay: '+20 122 053 0706',
  linkedin: 'https://www.linkedin.com/in/mohamed-mosaad-4618b4352/',
  github: 'https://github.com/mm1665390-beep',
  driveFolder:
    'https://drive.google.com/drive/folders/1xd4W5xyAIdK1Ilr13mF23J_tiJ35vvBf?usp=sharing',
} as const;

/**
 * Your real portrait. Leave as null until you add one; the hero then shows the "MM" mark.
 * To add it: put your photo in public/profile/raw/, run `npm run optimize-photo`,
 * and paste the printed object here.
 */
export const profilePhoto: { src: string; width: number; height: number } | null = null;
