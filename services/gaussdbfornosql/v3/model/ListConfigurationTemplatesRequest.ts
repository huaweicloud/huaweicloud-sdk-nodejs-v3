

export class ListConfigurationTemplatesRequest {
    public offset?: number;
    public limit?: number;
    private 'datastore_name'?: string;
    public mode?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListConfigurationTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigurationTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withDatastoreName(datastoreName: string): ListConfigurationTemplatesRequest {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withMode(mode: string): ListConfigurationTemplatesRequest {
        this['mode'] = mode;
        return this;
    }
}