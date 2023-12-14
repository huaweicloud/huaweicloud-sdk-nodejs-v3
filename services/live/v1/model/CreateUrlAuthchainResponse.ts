
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUrlAuthchainResponse extends SdkResponse {
    public keychain?: Array<string>;
    public constructor() { 
        super();
    }
    public withKeychain(keychain: Array<string>): CreateUrlAuthchainResponse {
        this['keychain'] = keychain;
        return this;
    }
}