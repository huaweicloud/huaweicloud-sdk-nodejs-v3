import { AtomicIndexVODetailData } from './AtomicIndexVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDesignAtomicIndexResponse extends SdkResponse {
    public data?: AtomicIndexVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: AtomicIndexVODetailData): UpdateDesignAtomicIndexResponse {
        this['data'] = data;
        return this;
    }
}