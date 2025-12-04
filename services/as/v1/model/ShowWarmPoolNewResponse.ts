import { WarmPoolInfo } from './WarmPoolInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWarmPoolNewResponse extends SdkResponse {
    private 'warm_pool'?: WarmPoolInfo;
    public constructor() { 
        super();
    }
    public withWarmPool(warmPool: WarmPoolInfo): ShowWarmPoolNewResponse {
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