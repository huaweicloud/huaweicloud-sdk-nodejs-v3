

export class ConfigurationsResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version'?: string;
    private 'datastore_name'?: string;
    private 'ha_mode'?: string;
    public created?: string;
    public updated?: string;
    private 'user_defined'?: boolean;
    public constructor(id?: string, name?: string, datastoreVersion?: string, datastoreName?: string, haMode?: string, created?: string, updated?: string, userDefined?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['datastore_version'] = datastoreVersion;
        this['datastore_name'] = datastoreName;
        this['ha_mode'] = haMode;
        this['created'] = created;
        this['updated'] = updated;
        this['user_defined'] = userDefined;
    }
    public withId(id: string): ConfigurationsResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConfigurationsResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationsResult {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersion(datastoreVersion: string): ConfigurationsResult {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreName(datastoreName: string): ConfigurationsResult {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withHaMode(haMode: string): ConfigurationsResult {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withCreated(created: string): ConfigurationsResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ConfigurationsResult {
        this['updated'] = updated;
        return this;
    }
    public withUserDefined(userDefined: boolean): ConfigurationsResult {
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