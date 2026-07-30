import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAssociatedResourceRuleResponse extends SdkResponse {
    public errors?: Array<ErrorInfo>;
    public constructor() { 
        super();
    }
    public withErrors(errors: Array<ErrorInfo>): DeleteAssociatedResourceRuleResponse {
        this['errors'] = errors;
        return this;
    }
}