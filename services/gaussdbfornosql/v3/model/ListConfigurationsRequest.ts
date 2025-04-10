

export class ListConfigurationsRequest {
    private 'datastore_name'?: string;
    public mode?: string;
    public constructor() { 
    }
    public withDatastoreName(datastoreName: string): ListConfigurationsRequest {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withMode(mode: string): ListConfigurationsRequest {
        this['mode'] = mode;
        return this;
    }
}