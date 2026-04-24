import { LifeCycleTypeConfigRsp } from './LifeCycleTypeConfigRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLifeCycleTypeConfigurationsResponse extends SdkResponse {
    public body?: { [key: string]: LifeCycleTypeConfigRsp; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: LifeCycleTypeConfigRsp; }): ListLifeCycleTypeConfigurationsResponse {
        this['body'] = body;
        return this;
    }
}