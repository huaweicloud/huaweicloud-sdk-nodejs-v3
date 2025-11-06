import { PromInstanceEpsModel } from './PromInstanceEpsModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePromInstanceResponse extends SdkResponse {
    public count?: number;
    public prometheus?: Array<PromInstanceEpsModel>;
    public constructor() { 
        super();
    }
    public withCount(count: number): UpdatePromInstanceResponse {
        this['count'] = count;
        return this;
    }
    public withPrometheus(prometheus: Array<PromInstanceEpsModel>): UpdatePromInstanceResponse {
        this['prometheus'] = prometheus;
        return this;
    }
}