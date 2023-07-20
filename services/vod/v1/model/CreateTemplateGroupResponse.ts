
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateGroupResponse extends SdkResponse {
    private 'group_id'?: string;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): CreateTemplateGroupResponse {
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