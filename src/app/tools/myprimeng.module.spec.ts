import { MyprimengModule } from './myprimeng.module';

describe('MyprimengModule', () => {
  let myprimengModule: MyprimengModule;

  beforeEach(() => {
    myprimengModule = new MyprimengModule();
  });

  it('should create an instance', () => {
    expect(myprimengModule).toBeTruthy();
  });
});
