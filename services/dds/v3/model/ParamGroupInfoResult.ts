

export class ParamGroupInfoResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version'?: string;
    private 'datastore_name'?: string;
    public created?: string;
    public updated?: string;
    public constructor(id?: string, name?: string, description?: string, datastoreVersion?: string, datastoreName?: string, created?: string, updated?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['datastore_version'] = datastoreVersion;
        this['datastore_name'] = datastoreName;
        this['created'] = created;
        this['updated'] = updated;
    }
    public withId(id: string): ParamGroupInfoResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ParamGroupInfoResult {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ParamGroupInfoResult {
        this['description'] = description;
        return this;
    }
    public withDatastoreVersion(datastoreVersion: string): ParamGroupInfoResult {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withDatastoreName(datastoreName: string): ParamGroupInfoResult {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withCreated(created: string): ParamGroupInfoResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ParamGroupInfoResult {
        this['updated'] = updated;
        return this;
    }
}