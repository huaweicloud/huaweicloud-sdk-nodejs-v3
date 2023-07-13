import { ProtectablesResp } from './ProtectablesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectableResponse extends SdkResponse {
    public instances?: Array<ProtectablesResp>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ProtectablesResp>): ListProtectableResponse {
        this['instances'] = instances;
        return this;
    }
}