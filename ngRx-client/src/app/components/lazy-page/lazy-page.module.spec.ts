import { LazyPageModule } from './lazy-page.module';

describe('LazyPageModule', () => {
  let lazyPageModule: LazyPageModule;

  beforeEach(() => {
    lazyPageModule = new LazyPageModule();
  });

  it('should create an instance', () => {
    expect(lazyPageModule).toBeTruthy();
  });
});
