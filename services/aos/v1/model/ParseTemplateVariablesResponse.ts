import { VariableResponse } from './VariableResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ParseTemplateVariablesResponse extends SdkResponse {
    public variables?: Array<VariableResponse>;
    public constructor() { 
        super();
    }
    public withVariables(variables: Array<VariableResponse>): ParseTemplateVariablesResponse {
        this['variables'] = variables;
        return this;
    }
}