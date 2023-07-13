

export class ListPublicBorderGroupsRequest {
    public fields?: string;
    public constructor() { 
    }
    public withFields(fields: string): ListPublicBorderGroupsRequest {
        this['fields'] = fields;
        return this;
    }
}