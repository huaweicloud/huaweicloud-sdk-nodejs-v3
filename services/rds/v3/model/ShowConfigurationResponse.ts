import { ConfigurationParameter } from './ConfigurationParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: ShowConfigurationResponseDatastoreNameEnum | string;
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
    public withDescription(description: string): ShowConfigurationResponse {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersionName(datastoreVersionName: string): ShowConfigurationResponse {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: ShowConfigurationResponseDatastoreNameEnum | string): ShowConfigurationResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: ShowConfigurationResponseDatastoreNameEnum | string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): ShowConfigurationResponseDatastoreNameEnum | string | undefined {
        return this['datastore_name'];
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

/**
    * @export
    * @enum {string}
    */
export enum ShowConfigurationResponseDatastoreNameEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver',
    MARIADB = 'mariadb'
}
