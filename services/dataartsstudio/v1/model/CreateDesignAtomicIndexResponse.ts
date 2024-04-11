import { AtomicIndexVODetailData } from './AtomicIndexVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesignAtomicIndexResponse extends SdkResponse {
    public data?: AtomicIndexVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: AtomicIndexVODetailData): CreateDesignAtomicIndexResponse {
        this['data'] = data;
        return this;
    }
}