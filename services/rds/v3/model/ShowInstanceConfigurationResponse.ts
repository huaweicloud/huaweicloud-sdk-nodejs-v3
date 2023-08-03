import { ConfigurationParameter } from './ConfigurationParameter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceConfigurationResponse extends SdkResponse {
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: ShowInstanceConfigurationResponseDatastoreNameEnum | string;
    public created?: string;
    public updated?: string;
    private 'configuration_parameters'?: Array<ConfigurationParameter>;
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
    public withDatastoreName(datastoreName: ShowInstanceConfigurationResponseDatastoreNameEnum | string): ShowInstanceConfigurationResponse {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: ShowInstanceConfigurationResponseDatastoreNameEnum | string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): ShowInstanceConfigurationResponseDatastoreNameEnum | string | undefined {
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
    public withConfigurationParameters(configurationParameters: Array<ConfigurationParameter>): ShowInstanceConfigurationResponse {
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
export enum ShowInstanceConfigurationResponseDatastoreNameEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver',
    MARIADB = 'mariadb'
}
