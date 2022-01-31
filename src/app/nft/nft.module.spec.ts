import { NFTModule } from './nft.module';

describe('NFTModule', () => {
  let nFTModule: NFTModule;

  beforeEach(() => {
    nFTModule = new NFTModule();
  });

  it('should create an instance', () => {
    expect(nFTModule).toBeTruthy();
  });
});
