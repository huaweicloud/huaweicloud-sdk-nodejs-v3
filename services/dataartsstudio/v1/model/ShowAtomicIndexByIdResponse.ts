import { AtomicIndexVODetailData } from './AtomicIndexVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAtomicIndexByIdResponse extends SdkResponse {
    public data?: AtomicIndexVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: AtomicIndexVODetailData): ShowAtomicIndexByIdResponse {
        this['data'] = data;
        return this;
    }
}