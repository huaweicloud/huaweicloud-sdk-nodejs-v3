
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTranscodeTemplateResponse extends SdkResponse {
    private 'group_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): CreateTranscodeTemplateResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
}