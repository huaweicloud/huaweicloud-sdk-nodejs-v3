

export class ListCommonPoolsRequest {
    public fields?: Array<string>;
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'public_border_group'?: string;
    public constructor() { 
    }
    public withFields(fields: Array<string>): ListCommonPoolsRequest {
        this['fields'] = fields;
        return this;
    }
    public withLimit(limit: number): ListCommonPoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCommonPoolsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListCommonPoolsRequest {
        this['name'] = name;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListCommonPoolsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}