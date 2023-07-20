import { ConfigurationParametersResult } from './ConfigurationParametersResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationParameterResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'datastore_version'?: string;
    private 'datastore_name'?: string;
    public description?: string;
    public created?: string;
    public updated?: string;
    public parameters?: Array<ConfigurationParametersResult>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowConfigurationParameterResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowConfigurationParameterResponse {
        this['name'] = name;
        return this;
    }
    public withDatastoreVersion(datastoreVersion: string): ShowConfigurationParameterResponse {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreName(datastoreName: string): ShowConfigurationParameterResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withDescription(description: string): ShowConfigurationParameterResponse {
        this['description'] = description;
        return this;
    }
    public withCreated(created: string): ShowConfigurationParameterResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowConfigurationParameterResponse {
        this['updated'] = updated;
        return this;
    }
    public withParameters(parameters: Array<ConfigurationParametersResult>): ShowConfigurationParameterResponse {
        this['parameters'] = parameters;
        return this;
    }
}