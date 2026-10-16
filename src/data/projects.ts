import type { L10n } from '../i18n/types';

export interface ProjectImage {
  /** Path relative to /public, e.g. "projects/ecommerce/home.webp" */
  src: string;
  width: number;
  height: number;
  alt: L10n;
}

export interface Project {
  id: string;
  name: string;
  repo: string;
  /** "team" projects are labelled so nobody reads them as solo work. */
  kind: 'solo' | 'team';
  /** Name of the group/organisation for team projects. */
  teamName?: string;
  description: L10n;
  /** Optional honest note about the project's state. */
  status?: L10n;
  /** Only technologies that appear in the repository (README or pubspec.yaml). */
  stack: string[];
  /**
   * REAL screenshots only. Put optimised files in public/projects/<id>/ and list them here.
   * While this is empty the card shows a typographic placeholder, never a mock-up.
   */
  images: ProjectImage[];
}

/**
 * HOW TO ADD A PROJECT: append an object to this array. That is all.
 * HOW TO ADD SCREENSHOTS: see README, section "Adding screenshots".
 */
export const projects: Project[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    // The repository name really ends with a hyphen.
    repo: 'https://github.com/mm1665390-beep/E-Commerce-',
    kind: 'solo',
    description: {
      en: 'A Flutter e-commerce app. According to the README it covers sign-in and registration, product browsing and search, a cart and checkout.',
      ar: 'تطبيق متجر إلكتروني مبني بـ Flutter. وفق ملف README يشمل تسجيل الدخول وإنشاء الحساب، وتصفّح المنتجات والبحث، وسلة المشتريات وإتمام الشراء.',
    },
    status: {
      en: 'Still in development',
      ar: 'قيد التطوير',
    },
    stack: ['Flutter', 'Dart', 'REST APIs'],
    images: [],
  },
  {
    id: 'handmade',
    name: 'HandMade',
    repo: 'https://github.com/FAD-Community/fad-team05-HandMade-App',
    kind: 'team',
    teamName: 'FAD Community · Team 05',
    description: {
      en: 'A team Flutter application from the FAD Community. The codebase uses BLoC for state, GoRouter for navigation, Dio with Retrofit for networking, Firebase Authentication, and is set up for localization.',
      ar: 'تطبيق Flutter جماعي ضمن مجتمع FAD. يعتمد الكود على BLoC لإدارة الحالة، وGoRouter للتنقّل، وDio مع Retrofit للشبكات، ومصادقة Firebase، ومهيّأ لتعدّد اللغات.',
    },
    stack: [
      'Flutter',
      'Dart',
      'flutter_bloc',
      'go_router',
      'Dio',
      'Retrofit',
      'Firebase Auth',
      'get_it',
      'Freezed',
    ],
    images: [],
  },
  {
    id: 'fixnow',
    name: 'FixNow',
    repo: 'https://github.com/FAD-Community/Team-2--R1_P2',
    kind: 'team',
    teamName: 'FAD Community · Team 2',
    description: {
      en: 'A team Flutter application from the FAD Community. The codebase uses BLoC for state, GoRouter for navigation, Dio with Retrofit for networking and get_it for dependency injection, and the repository also includes a BackEnd folder.',
      ar: 'تطبيق Flutter جماعي ضمن مجتمع FAD. يعتمد الكود على BLoC لإدارة الحالة، وGoRouter للتنقّل، وDio مع Retrofit للشبكات، وget_it لحقن الاعتماديات، كما يحتوي المستودع على مجلد BackEnd.',
    },
    stack: [
      'Flutter',
      'Dart',
      'flutter_bloc',
      'go_router',
      'Dio',
      'Retrofit',
      'get_it',
      'Freezed',
    ],
    images: [],
  },
];
