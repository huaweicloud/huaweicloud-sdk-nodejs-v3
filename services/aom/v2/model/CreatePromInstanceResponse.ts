import { PromInstanceEpsCreateModel } from './PromInstanceEpsCreateModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePromInstanceResponse extends SdkResponse {
    public prometheus?: Array<PromInstanceEpsCreateModel>;
    public constructor() { 
        super();
    }
    public withPrometheus(prometheus: Array<PromInstanceEpsCreateModel>): CreatePromInstanceResponse {
        this['prometheus'] = prometheus;
        return this;
    }
}