import { AssociatedResourceRule } from './AssociatedResourceRule';
import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssociatedResourceRulesResponse extends SdkResponse {
    public rules?: Array<AssociatedResourceRule>;
    public errors?: Array<ErrorInfo>;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<AssociatedResourceRule>): CreateAssociatedResourceRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withErrors(errors: Array<ErrorInfo>): CreateAssociatedResourceRulesResponse {
        this['errors'] = errors;
        return this;
    }
}