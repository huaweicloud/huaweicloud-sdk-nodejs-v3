import { CreateKeypairResp } from './CreateKeypairResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKeypairResponse extends SdkResponse {
    public keypair?: CreateKeypairResp;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: CreateKeypairResp): CreateKeypairResponse {
        this['keypair'] = keypair;
        return this;
    }
}