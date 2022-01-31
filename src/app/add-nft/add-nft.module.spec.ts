import { AddNFTModule } from './add-nft.module';

describe('AddNFTModule', () => {
  let addNFTModule: AddNFTModule;

  beforeEach(() => {
    addNFTModule = new AddNFTModule();
  });

  it('should create an instance', () => {
    expect(addNFTModule).toBeTruthy();
  });
});
