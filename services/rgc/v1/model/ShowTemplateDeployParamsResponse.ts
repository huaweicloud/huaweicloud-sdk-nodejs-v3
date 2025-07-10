import { TemplateParamVariable } from './TemplateParamVariable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateDeployParamsResponse extends SdkResponse {
    public variables?: Array<TemplateParamVariable>;
    public constructor() { 
        super();
    }
    public withVariables(variables: Array<TemplateParamVariable>): ShowTemplateDeployParamsResponse {
        this['variables'] = variables;
        return this;
    }
}