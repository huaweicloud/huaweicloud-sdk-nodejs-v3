

export class ConfigurationSummaryForCreate {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: ConfigurationSummaryForCreateDatastoreNameEnum | string;
    public created?: string;
    public updated?: string;
    public constructor(id?: string, name?: string, datastoreVersionName?: string, datastoreName?: string, created?: string, updated?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['datastore_version_name'] = datastoreVersionName;
        this['datastore_name'] = datastoreName;
        this['created'] = created;
        this['updated'] = updated;
    }
    public withId(id: string): ConfigurationSummaryForCreate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConfigurationSummaryForCreate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationSummaryForCreate {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersionName(datastoreVersionName: string): ConfigurationSummaryForCreate {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: ConfigurationSummaryForCreateDatastoreNameEnum | string): ConfigurationSummaryForCreate {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: ConfigurationSummaryForCreateDatastoreNameEnum | string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): ConfigurationSummaryForCreateDatastoreNameEnum | string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ConfigurationSummaryForCreate {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ConfigurationSummaryForCreate {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationSummaryForCreateDatastoreNameEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
