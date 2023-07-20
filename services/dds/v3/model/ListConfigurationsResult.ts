

export class ListConfigurationsResult {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'datastore_version'?: string;
    private 'datastore_name'?: string;
    private 'node_type'?: string;
    public created?: string;
    public updated?: string;
    private 'user_defined'?: boolean;
    public constructor(id?: string, name?: string, description?: string, datastoreVersion?: string, datastoreName?: string, nodeType?: string, created?: string, updated?: string, userDefined?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['datastore_version'] = datastoreVersion;
        this['datastore_name'] = datastoreName;
        this['node_type'] = nodeType;
        this['created'] = created;
        this['updated'] = updated;
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
    public withDatastoreVersion(datastoreVersion: string): ListConfigurationsResult {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
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
    public withNodeType(nodeType: string): ListConfigurationsResult {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withCreated(created: string): ListConfigurationsResult {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ListConfigurationsResult {
        this['updated'] = updated;
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