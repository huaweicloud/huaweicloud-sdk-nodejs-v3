import { ConfigurationParameter } from './ConfigurationParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'datastore_name'?: string;
    public description?: string;
    public created?: string;
    public updated?: string;
    private 'configuration_parameters'?: Array<ConfigurationParameter>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowConfigurationResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowConfigurationResponse {
        this['name'] = name;
        return this;
    }
    public withDatastoreName(datastoreName: string): ShowConfigurationResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withDescription(description: string): ShowConfigurationResponse {
        this['description'] = description;
        return this;
    }
    public withCreated(created: string): ShowConfigurationResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowConfigurationResponse {
        this['updated'] = updated;
        return this;
    }
    public withConfigurationParameters(configurationParameters: Array<ConfigurationParameter>): ShowConfigurationResponse {
        this['configuration_parameters'] = configurationParameters;
        return this;
    }
    public set configurationParameters(configurationParameters: Array<ConfigurationParameter>  | undefined) {
        this['configuration_parameters'] = configurationParameters;
    }
    public get configurationParameters(): Array<ConfigurationParameter> | undefined {
        return this['configuration_parameters'];
    }
}