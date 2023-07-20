

export class ConfigurationSummary {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: ConfigurationSummaryDatastoreNameEnum | string;
    public created?: string;
    public updated?: string;
    private 'user_defined'?: boolean;
    public constructor(id?: string, name?: string, datastoreVersionName?: string, datastoreName?: string, created?: string, updated?: string, userDefined?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['datastore_version_name'] = datastoreVersionName;
        this['datastore_name'] = datastoreName;
        this['created'] = created;
        this['updated'] = updated;
        this['user_defined'] = userDefined;
    }
    public withId(id: string): ConfigurationSummary {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConfigurationSummary {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationSummary {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersionName(datastoreVersionName: string): ConfigurationSummary {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: ConfigurationSummaryDatastoreNameEnum | string): ConfigurationSummary {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: ConfigurationSummaryDatastoreNameEnum | string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): ConfigurationSummaryDatastoreNameEnum | string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ConfigurationSummary {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ConfigurationSummary {
        this['updated'] = updated;
        return this;
    }
    public withUserDefined(userDefined: boolean): ConfigurationSummary {
        this['user_defined'] = userDefined;
        return this;
    }
    public set userDefined(userDefined: boolean  | undefined) {
        this['user_defined'] = userDefined;
    }
    public get userDefined(): boolean | undefined {
        return this['user_defined'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationSummaryDatastoreNameEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
