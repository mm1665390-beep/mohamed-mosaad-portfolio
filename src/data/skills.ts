import type { Dictionary } from '../i18n/en';

export type SkillGroupId = keyof Dictionary['skills']['groups'];

export interface SkillGroup {
  id: SkillGroupId;
  items: string[];
}

/**
 * Skills. Core, architecture and state items come from your own list.
 * Networking and tooling extras were confirmed in the dependency files of
 * your Flutter repositories. Remove anything you do not want to claim.
 */
export const skillGroups: SkillGroup[] = [
  { id: 'core', items: ['Flutter', 'Dart'] },
  {
    id: 'architecture',
    items: ['Clean Architecture', 'MVVM', 'SOLID'],
  },
  { id: 'state', items: ['BLoC / Cubit', 'Provider'] },
  {
    id: 'network',
    items: ['REST APIs', 'Dio', 'Retrofit', 'Firebase Auth', 'SQLite (sqflite)'],
  },
  {
    id: 'tooling',
    items: ['GoRouter', 'get_it', 'Freezed', 'Git & GitHub'],
  },
];
