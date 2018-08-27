import { DancerModule } from './dancer.module';

describe('DancerModule', () => {
  let dancerModule: DancerModule;

  beforeEach(() => {
    dancerModule = new DancerModule();
  });

  it('should create an instance', () => {
    expect(dancerModule).toBeTruthy();
  });
});
