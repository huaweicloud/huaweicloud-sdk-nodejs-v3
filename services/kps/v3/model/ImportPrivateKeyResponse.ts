import { KeypairBean } from './KeypairBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportPrivateKeyResponse extends SdkResponse {
    public keypair?: KeypairBean;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: KeypairBean): ImportPrivateKeyResponse {
        this['keypair'] = keypair;
        return this;
    }
}