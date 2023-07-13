import { ShowGroupsRespGroup } from './ShowGroupsRespGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupsResponse extends SdkResponse {
    public group?: ShowGroupsRespGroup;
    public constructor() { 
        super();
    }
    public withGroup(group: ShowGroupsRespGroup): ShowGroupsResponse {
        this['group'] = group;
        return this;
    }
}