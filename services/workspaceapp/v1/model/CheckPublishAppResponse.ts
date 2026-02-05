import { ValidateRuleEnum } from './ValidateRuleEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckPublishAppResponse extends SdkResponse {
    public result?: boolean;
    private 'validate_rule'?: ValidateRuleEnum;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CheckPublishAppResponse {
        this['result'] = result;
        return this;
    }
    public withValidateRule(validateRule: ValidateRuleEnum): CheckPublishAppResponse {
        this['validate_rule'] = validateRule;
        return this;
    }
    public set validateRule(validateRule: ValidateRuleEnum  | undefined) {
        this['validate_rule'] = validateRule;
    }
    public get validateRule(): ValidateRuleEnum | undefined {
        return this['validate_rule'];
    }
}