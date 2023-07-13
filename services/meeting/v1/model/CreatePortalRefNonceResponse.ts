
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePortalRefNonceResponse extends SdkResponse {
    public nonce?: string;
    public constructor() { 
        super();
    }
    public withNonce(nonce: string): CreatePortalRefNonceResponse {
        this['nonce'] = nonce;
        return this;
    }
}