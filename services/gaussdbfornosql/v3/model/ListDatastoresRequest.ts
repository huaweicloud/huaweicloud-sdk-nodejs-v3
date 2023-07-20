

export class ListDatastoresRequest {
    private 'datastore_name'?: string;
    public constructor(datastoreName?: string) { 
        this['datastore_name'] = datastoreName;
    }
    public withDatastoreName(datastoreName: string): ListDatastoresRequest {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
}