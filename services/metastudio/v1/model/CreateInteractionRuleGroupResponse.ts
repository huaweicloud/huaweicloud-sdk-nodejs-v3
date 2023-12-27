
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInteractionRuleGroupResponse extends SdkResponse {
    private 'group_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): CreateInteractionRuleGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withXRequestId(xRequestId: string): CreateInteractionRuleGroupResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}