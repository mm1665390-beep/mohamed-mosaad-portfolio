import type { L10n } from '../i18n/types';

/** Editing software. Shown as plain names (no logos) to avoid implying endorsement. */
export const editingTools: { name: string; role: L10n }[] = [
  {
    name: 'DaVinci Resolve',
    role: {
      en: 'Editing and colour work',
      ar: 'المونتاج وتصحيح الألوان',
    },
  },
  {
    name: 'Adobe After Effects',
    role: {
      en: 'Motion graphics and titles',
      ar: 'الموشن غرافيك والعناوين',
    },
  },
];

/**
 * Services. Derived from the tools above, so edit freely to match
 * exactly what you offer clients.
 */
export const editingServices: L10n[] = [
  { en: 'Video editing and assembly', ar: 'مونتاج وتجميع الفيديو' },
  { en: 'Colour correction and grading', ar: 'تصحيح الألوان وتدرّجها' },
  { en: 'Motion graphics and titles', ar: 'الموشن غرافيك والعناوين' },
];
