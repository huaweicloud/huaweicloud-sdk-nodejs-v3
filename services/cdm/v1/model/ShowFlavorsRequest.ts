

export class ShowFlavorsRequest {
    private 'datastore_id'?: string;
    public constructor(datastoreId?: string) { 
        this['datastore_id'] = datastoreId;
    }
    public withDatastoreId(datastoreId: string): ShowFlavorsRequest {
        this['datastore_id'] = datastoreId;
        return this;
    }
    public set datastoreId(datastoreId: string  | undefined) {
        this['datastore_id'] = datastoreId;
    }
    public get datastoreId(): string | undefined {
        return this['datastore_id'];
    }
}