import { Group } from './Group';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupV5Response extends SdkResponse {
    public group?: Group;
    public constructor() { 
        super();
    }
    public withGroup(group: Group): ShowGroupV5Response {
        this['group'] = group;
        return this;
    }
}