import { EntityConfigurationParametersResult } from './EntityConfigurationParametersResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEntityConfigurationResponse extends SdkResponse {
    private 'datastore_version'?: string;
    private 'datastore_name'?: string;
    public created?: string;
    public updated?: string;
    public parameters?: Array<EntityConfigurationParametersResult>;
    public constructor() { 
        super();
    }
    public withDatastoreVersion(datastoreVersion: string): ShowEntityConfigurationResponse {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreName(datastoreName: string): ShowEntityConfigurationResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ShowEntityConfigurationResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowEntityConfigurationResponse {
        this['updated'] = updated;
        return this;
    }
    public withParameters(parameters: Array<EntityConfigurationParametersResult>): ShowEntityConfigurationResponse {
        this['parameters'] = parameters;
        return this;
    }
}