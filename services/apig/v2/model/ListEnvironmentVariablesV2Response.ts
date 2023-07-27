import { BasePage } from './BasePage';
import { EnvVariableInfo } from './EnvVariableInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentVariablesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public variables?: Array<EnvVariableInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListEnvironmentVariablesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListEnvironmentVariablesV2Response {
        this['total'] = total;
        return this;
    }
    public withVariables(variables: Array<EnvVariableInfo>): ListEnvironmentVariablesV2Response {
        this['variables'] = variables;
        return this;
    }
}