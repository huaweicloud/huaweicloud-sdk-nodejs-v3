

export class ParameterConfigurationInfo {
    private 'datastore_version_name'?: string;
    private 'datastore_name'?: string;
    private 'configuration_id'?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
    }
    public withDatastoreVersionName(datastoreVersionName: string): ParameterConfigurationInfo {
        this['datastore_version_name'] = datastoreVersionName;
        return this;
    }
    public set datastoreVersionName(datastoreVersionName: string  | undefined) {
        this['datastore_version_name'] = datastoreVersionName;
    }
    public get datastoreVersionName(): string | undefined {
        return this['datastore_version_name'];
    }
    public withDatastoreName(datastoreName: string): ParameterConfigurationInfo {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withConfigurationId(configurationId: string): ParameterConfigurationInfo {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withCreated(created: string): ParameterConfigurationInfo {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ParameterConfigurationInfo {
        this['updated'] = updated;
        return this;
    }
}