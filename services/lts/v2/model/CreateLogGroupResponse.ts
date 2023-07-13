
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogGroupResponse extends SdkResponse {
    private 'log_group_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLogGroupId(logGroupId: string): CreateLogGroupResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
}