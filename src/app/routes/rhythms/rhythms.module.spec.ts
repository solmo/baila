import { RhythmsModule } from './rhythms.module';

describe('RhythmsModule', () => {
  let rhythmsModule: RhythmsModule;

  beforeEach(() => {
    rhythmsModule = new RhythmsModule();
  });

  it('should create an instance', () => {
    expect(rhythmsModule).toBeTruthy();
  });
});
