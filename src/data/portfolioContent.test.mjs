import assert from 'node:assert/strict';
import {
  content,
  getCopy,
  languages,
  projects,
  certificates,
} from './portfolioContent.js';

assert.deepEqual(languages, ['en', 'id']);

for (const language of languages) {
  const copy = getCopy(language);
  assert.equal(typeof copy.nav.home, 'string');
  assert.equal(typeof copy.preloader.loading, 'string');
  assert.equal(typeof copy.footer.text, 'string');
  assert.equal(typeof copy.hero.headline, 'string');
  assert.equal(copy.projects.title.length > 0, true);
  assert.equal(copy.contact.form.name.length > 0, true);
  assert.equal(copy.contact.form.error.length > 0, true);
}

assert.equal(getCopy('unknown'), content.en);
assert.equal(projects.length, 4);
assert.equal(
  projects.some((project) => project.slug === 'indonesia-toxic-speech-detector'),
  true,
);
assert.equal(
  projects.find((project) => project.slug === 'indonesia-toxic-speech-detector').repo,
  'https://github.com/BayuSatrio2804/Indonesia-Toxic-Speech-Detector',
);
assert.equal(certificates.length >= 1, true);
assert.equal(certificates[0].image, '/sertifikat-gemastik.png');

console.log('portfolio content integrity ok');
