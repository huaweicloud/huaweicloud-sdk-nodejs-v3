import { DDMInstance4Restore } from './DDMInstance4Restore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvalibleDdmsResponse extends SdkResponse {
    public instances?: Array<DDMInstance4Restore>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<DDMInstance4Restore>): ShowAvalibleDdmsResponse {
        this['instances'] = instances;
        return this;
    }
}