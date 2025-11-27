
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddInstanceGroupResponse extends SdkResponse {
    public success?: boolean;
    private 'group_id'?: number;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): AddInstanceGroupResponse {
        this['success'] = success;
        return this;
    }
    public withGroupId(groupId: number): AddInstanceGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
}