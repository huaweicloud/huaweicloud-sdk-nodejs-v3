

export class ConfigurationInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_name'?: string;
    public created?: string;
    public updated?: string;
    private 'user_defined'?: boolean;
    public constructor(id?: string, name?: string, datastoreName?: string, created?: string, updated?: string, userDefined?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['datastore_name'] = datastoreName;
        this['created'] = created;
        this['updated'] = updated;
        this['user_defined'] = userDefined;
    }
    public withId(id: string): ConfigurationInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConfigurationInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConfigurationInfo {
        this['description'] = description;
        return this;
    }
    public withDatastoreName(datastoreName: string): ConfigurationInfo {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ConfigurationInfo {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ConfigurationInfo {
        this['updated'] = updated;
        return this;
    }
    public withUserDefined(userDefined: boolean): ConfigurationInfo {
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