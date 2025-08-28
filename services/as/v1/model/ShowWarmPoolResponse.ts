import { WarmPoolInfo } from './WarmPoolInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWarmPoolResponse extends SdkResponse {
    private 'warm_pool'?: WarmPoolInfo;
    public constructor() { 
        super();
    }
    public withWarmPool(warmPool: WarmPoolInfo): ShowWarmPoolResponse {
        this['warm_pool'] = warmPool;
        return this;
    }
    public set warmPool(warmPool: WarmPoolInfo  | undefined) {
        this['warm_pool'] = warmPool;
    }
    public get warmPool(): WarmPoolInfo | undefined {
        return this['warm_pool'];
    }
}