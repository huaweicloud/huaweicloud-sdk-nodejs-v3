
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOpenSourceStrategyResponse extends SdkResponse {
    public status?: boolean;
    private 'rule_set_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): UpdateOpenSourceStrategyResponse {
        this['status'] = status;
        return this;
    }
    public withRuleSetId(ruleSetId: string): UpdateOpenSourceStrategyResponse {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
}