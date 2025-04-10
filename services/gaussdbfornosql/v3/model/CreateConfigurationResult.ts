

export class CreateConfigurationResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: string;
    public mode?: string;
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
    public withId(id: string): CreateConfigurationResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateConfigurationResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConfigurationResult {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersionName(datastoreVersionName: string): CreateConfigurationResult {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: string): CreateConfigurationResult {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withMode(mode: string): CreateConfigurationResult {
        this['mode'] = mode;
        return this;
    }
    public withCreated(created: string): CreateConfigurationResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): CreateConfigurationResult {
        this['updated'] = updated;
        return this;
    }
}