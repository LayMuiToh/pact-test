jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

beforeAll((done) => {
  global.Platform.setup().then(() => done());
});

afterEach((done) => {
  global.Platform.verify().then(() => done());
});

afterAll((done) => {
  global.Platform.finalize().then(() => done());
});
