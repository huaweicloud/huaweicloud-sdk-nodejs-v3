import { Group } from './Group';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGroupV5Response extends SdkResponse {
    public group?: Group;
    public constructor() { 
        super();
    }
    public withGroup(group: Group): UpdateGroupV5Response {
        this['group'] = group;
        return this;
    }
}