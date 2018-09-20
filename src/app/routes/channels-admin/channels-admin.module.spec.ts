import { ChannelsAdminModule } from './channels-admin.module';

describe('ChannelsAdminModule', () => {
  let channelsAdminModule: ChannelsAdminModule;

  beforeEach(() => {
    channelsAdminModule = new ChannelsAdminModule();
  });

  it('should create an instance', () => {
    expect(channelsAdminModule).toBeTruthy();
  });
});
