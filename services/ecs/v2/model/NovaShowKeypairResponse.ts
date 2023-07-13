import { NovaKeypairDetail } from './NovaKeypairDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaShowKeypairResponse extends SdkResponse {
    public keypair?: NovaKeypairDetail;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: NovaKeypairDetail): NovaShowKeypairResponse {
        this['keypair'] = keypair;
        return this;
    }
}