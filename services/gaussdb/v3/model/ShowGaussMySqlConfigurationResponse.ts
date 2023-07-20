import { ConfigurationSummary2 } from './ConfigurationSummary2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlConfigurationResponse extends SdkResponse {
    public configurations?: ConfigurationSummary2;
    private 'parameter_values'?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: ConfigurationSummary2): ShowGaussMySqlConfigurationResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withParameterValues(parameterValues: { [key: string]: string; }): ShowGaussMySqlConfigurationResponse {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: { [key: string]: string; }  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): { [key: string]: string; } | undefined {
        return this['parameter_values'];
    }
}