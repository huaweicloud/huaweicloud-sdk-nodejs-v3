import { NovaKeypair } from './NovaKeypair';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaCreateKeypairResponse extends SdkResponse {
    public keypair?: NovaKeypair;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: NovaKeypair): NovaCreateKeypairResponse {
        this['keypair'] = keypair;
        return this;
    }
}