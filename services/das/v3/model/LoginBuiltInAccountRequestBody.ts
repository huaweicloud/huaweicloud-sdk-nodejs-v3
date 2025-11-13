

export class LoginBuiltInAccountRequestBody {
    private 'datastore_type'?: string;
    public constructor(datastoreType?: string) { 
        this['datastore_type'] = datastoreType;
    }
    public withDatastoreType(datastoreType: string): LoginBuiltInAccountRequestBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
}