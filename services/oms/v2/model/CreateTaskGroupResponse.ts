
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTaskGroupResponse extends SdkResponse {
    private 'group_id'?: string;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): CreateTaskGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}