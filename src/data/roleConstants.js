export const CREATOR_TYPES = {
  PROGRAMMING: 'programming',
  ART_2D: 'art-2d',
  ART_3D: '3d-art',
  ANIMATION: 'animation',
  AUDIO: 'audio',
  DESIGN: 'design',
  QA: 'qa',
  TECHNICAL: 'technical-art'
};

export const CREATOR_TYPE_LABELS = {
  [CREATOR_TYPES.PROGRAMMING]: 'Programming',
  [CREATOR_TYPES.ART_2D]: 'Art (2D)',
  [CREATOR_TYPES.ART_3D]: '3D Art',
  [CREATOR_TYPES.ANIMATION]: 'Animation',
  [CREATOR_TYPES.AUDIO]: 'Audio/Music',
  [CREATOR_TYPES.DESIGN]: 'Design',
  [CREATOR_TYPES.QA]: 'QA/Testing',
  [CREATOR_TYPES.TECHNICAL]: 'Technical Art'
};

export const ROLES_BY_TYPE = {
  [CREATOR_TYPES.PROGRAMMING]: [
    'Gameplay Programmer',
    'Engine Programmer',
    'Tools Programmer',
    'Network Programmer',
    'AI Programmer',
    'Solo Developer'
  ],
  [CREATOR_TYPES.ART_2D]: [
    'Artist',
    '2D Artist',
    'UI/UX Designer',
    'Concept Artist',
    'Illustrator'
  ],
  [CREATOR_TYPES.ART_3D]: [
    '3D Artist',
    'Environment Artist',
    'Character Artist',
    'Prop Artist',
    'Technical Artist'
  ],
  [CREATOR_TYPES.ANIMATION]: [
    'Animator',
    'Character Animator',
    'Technical Animator'
  ],
  [CREATOR_TYPES.AUDIO]: [
    'Composer',
    'Audio Designer',
    'Sound Engineer'
  ],
  [CREATOR_TYPES.DESIGN]: [
    'Game Designer',
    'Level Designer',
    'Systems Designer',
    'Narrative Designer'
  ],
  [CREATOR_TYPES.QA]: [
    'QA Specialist',
    'QA Tester'
  ],
  [CREATOR_TYPES.TECHNICAL]: [
    'Technical Artist',
    'Shader Programmer',
    'VFX Artist'
  ]
};

export const ALL_ROLES = [
  'Game Designer',
  'Gameplay Programmer',
  'Engine Programmer',
  'Tools Programmer',
  'Network Programmer',
  'AI Programmer',
  'Technical Artist',
  'Shader Programmer',
  'VFX Artist',
  'Animator',
  'Character Animator',
  'Technical Animator',
  'Artist',
  '2D Artist',
  '3D Artist',
  'Environment Artist',
  'Character Artist',
  'Prop Artist',
  'UI/UX Designer',
  'Concept Artist',
  'Illustrator',
  'Composer',
  'Audio Designer',
  'Sound Engineer',
  'Level Designer',
  'Systems Designer',
  'Narrative Designer',
  'Writer',
  'QA Specialist',
  'QA Tester',
  'Solo Developer'
];

export const COMMON_SUB_ROLES = {
  'Gameplay Programmer': ['Combat Systems', 'Physics', 'Networking', 'AI', 'Player Systems'],
  'Animator': ['First-person Animation', 'Character Animation', 'Cinematic Animation', 'Facial Animation'],
  'Technical Artist': ['Shader Programming', 'VFX', 'Rigging', 'Pipeline'],
  'Artist': ['2D Asset Creation', 'Texturing', 'Character Design', 'Environment Art'],
  '3D Artist': ['Modeling', 'Texturing', 'Rigging', 'Sculpting'],
  'Composer': ['Implementation & Mixing', 'Sound Design', 'Music Production'],
  'Game Designer': ['Narrative Systems', 'Gameplay Systems', 'Level Design']
};

