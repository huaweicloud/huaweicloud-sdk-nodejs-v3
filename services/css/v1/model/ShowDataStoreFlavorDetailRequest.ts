

export class ShowDataStoreFlavorDetailRequest {
    private 'datastore_id'?: string;
    private 'datastore_version_id'?: string;
    public constructor(datastoreId?: string) { 
        this['datastore_id'] = datastoreId;
    }
    public withDatastoreId(datastoreId: string): ShowDataStoreFlavorDetailRequest {
        this['datastore_id'] = datastoreId;
        return this;
    }
    public set datastoreId(datastoreId: string  | undefined) {
        this['datastore_id'] = datastoreId;
    }
    public get datastoreId(): string | undefined {
        return this['datastore_id'];
    }
    public withDatastoreVersionId(datastoreVersionId: string): ShowDataStoreFlavorDetailRequest {
        this['datastore_version_id'] = datastoreVersionId;
        return this;
    }
    public set datastoreVersionId(datastoreVersionId: string  | undefined) {
        this['datastore_version_id'] = datastoreVersionId;
    }
    public get datastoreVersionId(): string | undefined {
        return this['datastore_version_id'];
    }
}