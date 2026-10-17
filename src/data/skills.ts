import type { Dictionary } from '../i18n/en';

export type SkillGroupId = keyof Dictionary['skills']['groups'];

export interface SkillGroup {
  id: SkillGroupId;
  items: string[];
}

/** Development and post-production skills presented as separate disciplines. */
export const skillGroups: SkillGroup[] = [
  { id: 'core', items: ['Flutter', 'Dart'] },
  { id: 'architecture', items: ['Clean Architecture', 'MVVM', 'SOLID'] },
  { id: 'state', items: ['BLoC / Cubit', 'Provider'] },
  { id: 'network', items: ['REST APIs', 'Dio', 'Retrofit', 'Firebase Auth', 'SQLite (sqflite)'] },
  { id: 'tooling', items: ['get_it', 'Freezed', 'JSON Serialization', 'Git & GitHub'] },
  { id: 'editing', items: ['Video Editing', 'DaVinci Resolve', 'Adobe After Effects', 'Motion Graphics', 'Color Grading', 'Rotoscoping', 'Captions & Typography'] },
];
