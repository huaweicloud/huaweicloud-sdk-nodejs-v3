

export class ListEmailTemplateRequest {
    private 'datastore_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(datastoreType?: string) { 
        this['datastore_type'] = datastoreType;
    }
    public withDatastoreType(datastoreType: string): ListEmailTemplateRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withOffset(offset: number): ListEmailTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEmailTemplateRequest {
        this['limit'] = limit;
        return this;
    }
}