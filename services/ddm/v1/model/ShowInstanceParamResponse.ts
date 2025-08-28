import { ConfigurationParameterList } from './ConfigurationParameterList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceParamResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public updated?: string;
    private 'configuration_parameter'?: Array<ConfigurationParameterList>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowInstanceParamResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowInstanceParamResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowInstanceParamResponse {
        this['description'] = description;
        return this;
    }
    public withUpdated(updated: string): ShowInstanceParamResponse {
        this['updated'] = updated;
        return this;
    }
    public withConfigurationParameter(configurationParameter: Array<ConfigurationParameterList>): ShowInstanceParamResponse {
        this['configuration_parameter'] = configurationParameter;
        return this;
    }
    public set configurationParameter(configurationParameter: Array<ConfigurationParameterList>  | undefined) {
        this['configuration_parameter'] = configurationParameter;
    }
    public get configurationParameter(): Array<ConfigurationParameterList> | undefined {
        return this['configuration_parameter'];
    }
    public withOffset(offset: number): ShowInstanceParamResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowInstanceParamResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ShowInstanceParamResponse {
        this['total'] = total;
        return this;
    }
}