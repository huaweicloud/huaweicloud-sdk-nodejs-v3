import { PromInstanceEpsModel } from './PromInstanceEpsModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPromInstanceResponse extends SdkResponse {
    public prometheus?: Array<PromInstanceEpsModel>;
    public constructor() { 
        super();
    }
    public withPrometheus(prometheus: Array<PromInstanceEpsModel>): ListPromInstanceResponse {
        this['prometheus'] = prometheus;
        return this;
    }
}