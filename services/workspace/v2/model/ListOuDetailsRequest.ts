

export class ListOuDetailsRequest {
    private 'ou_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withOuName(ouName: string): ListOuDetailsRequest {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withLimit(limit: number): ListOuDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOuDetailsRequest {
        this['offset'] = offset;
        return this;
    }
}