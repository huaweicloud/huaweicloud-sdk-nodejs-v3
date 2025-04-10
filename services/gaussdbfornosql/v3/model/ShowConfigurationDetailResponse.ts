import { ConfigurationParameterResult } from './ConfigurationParameterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: string;
    public mode?: string;
    public created?: string;
    public updated?: string;
    private 'configuration_parameters'?: Array<ConfigurationParameterResult>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowConfigurationDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowConfigurationDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowConfigurationDetailResponse {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersionName(datastoreVersionName: string): ShowConfigurationDetailResponse {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: string): ShowConfigurationDetailResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withMode(mode: string): ShowConfigurationDetailResponse {
        this['mode'] = mode;
        return this;
    }
    public withCreated(created: string): ShowConfigurationDetailResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowConfigurationDetailResponse {
        this['updated'] = updated;
        return this;
    }
    public withConfigurationParameters(configurationParameters: Array<ConfigurationParameterResult>): ShowConfigurationDetailResponse {
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