import { KeypairDetail } from './KeypairDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeypairDetailResponse extends SdkResponse {
    public keypair?: KeypairDetail;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: KeypairDetail): ListKeypairDetailResponse {
        this['keypair'] = keypair;
        return this;
    }
}