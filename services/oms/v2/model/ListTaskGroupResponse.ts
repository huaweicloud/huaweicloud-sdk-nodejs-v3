import { TaskGroupResp } from './TaskGroupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskGroupResponse extends SdkResponse {
    public count?: number;
    public taskgroups?: Array<TaskGroupResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTaskGroupResponse {
        this['count'] = count;
        return this;
    }
    public withTaskgroups(taskgroups: Array<TaskGroupResp>): ListTaskGroupResponse {
        this['taskgroups'] = taskgroups;
        return this;
    }
}