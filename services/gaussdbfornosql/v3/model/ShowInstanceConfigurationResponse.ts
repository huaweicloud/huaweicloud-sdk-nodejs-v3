import { ConfigurationParameterResult } from './ConfigurationParameterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceConfigurationResponse extends SdkResponse {
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: string;
    public created?: string;
    public updated?: string;
    public id?: string;
    public mode?: string;
    private 'configuration_parameters'?: Array<ConfigurationParameterResult>;
    public constructor() { 
        super();
    }
    public withDatastoreVersionName(datastoreVersionName: string): ShowInstanceConfigurationResponse {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: string): ShowInstanceConfigurationResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ShowInstanceConfigurationResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowInstanceConfigurationResponse {
        this['updated'] = updated;
        return this;
    }
    public withId(id: string): ShowInstanceConfigurationResponse {
        this['id'] = id;
        return this;
    }
    public withMode(mode: string): ShowInstanceConfigurationResponse {
        this['mode'] = mode;
        return this;
    }
    public withConfigurationParameters(configurationParameters: Array<ConfigurationParameterResult>): ShowInstanceConfigurationResponse {
        this['configuration_parameters'] = configurationParameters;
        return this;
    }
    public set configurationParameters(configurationParameters: Array<ConfigurationParameterResult>  | undefined) {
        this['configuration_parameters'] = configurationParameters;
    }
    public get configurationParameters(): Array<ConfigurationParameterResult> | undefined {
        return this['configuration_parameters'];
    }
}