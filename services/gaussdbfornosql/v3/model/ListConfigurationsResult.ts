

export class ListConfigurationsResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: string;
    public created?: string;
    public updated?: string;
    public mode?: string;
    private 'user_defined'?: boolean;
    public constructor(id?: string, name?: string, datastoreVersionName?: string, datastoreName?: string, created?: string, updated?: string, mode?: string, userDefined?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['datastore_version_name'] = datastoreVersionName;
        this['datastore_name'] = datastoreName;
        this['created'] = created;
        this['updated'] = updated;
        this['mode'] = mode;
        this['user_defined'] = userDefined;
    }
    public withId(id: string): ListConfigurationsResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListConfigurationsResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListConfigurationsResult {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersionName(datastoreVersionName: string): ListConfigurationsResult {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: string): ListConfigurationsResult {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ListConfigurationsResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ListConfigurationsResult {
        this['updated'] = updated;
        return this;
    }
    public withMode(mode: string): ListConfigurationsResult {
        this['mode'] = mode;
        return this;
    }
    public withUserDefined(userDefined: boolean): ListConfigurationsResult {
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