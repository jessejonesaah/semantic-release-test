const releaseRules = [
  { type: 'breaking', release: 'major' },
  { type: 'feature', release: 'minor' },
  { type: 'defect', release: 'patch' },
  { type: 'issue', release: 'patch' },
  { type: 'hotfix', release: 'patch' },
];
const configTypes = [
  { type: 'breaking', section: 'Breaking Changes', hidden: false },
  { type: 'feature', section: 'Features', hidden: false },
  { type: 'defect', section: 'Bug Fixes', hidden: false },
  { type: 'issue', section: 'Bug Fixes', hidden: false },
  { type: 'hotfix', section: 'Bug Fixes', hidden: false },
];

module.exports = {
  branches: [
    'issue-1',
    {
      name: 'task-**',
      prerelease: true,
    },
    {
      name: 'feature-**',
      prerelease: true,
    },
    {
      name: 'issue-**',
      prerelease: true,
    },
    {
      name: 'defect-**',
      prerelease: true,
    },
    {
      name: 'hotfix-**',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: releaseRules,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: configTypes,
        },
        writerOpts: {
          groupBy: 'type',
          commitGroupsSort: 'title',
          commitsSort: ['scope', 'subject'],
        },
      },
    ],
    '@semantic-release/github',
  ],
};
