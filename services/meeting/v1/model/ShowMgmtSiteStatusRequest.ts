

export class ShowMgmtSiteStatusRequest {
    private 'X-Schema-Type'?: string;
    public constructor() { 
    }
    public withXSchemaType(xSchemaType: string): ShowMgmtSiteStatusRequest {
        this['X-Schema-Type'] = xSchemaType;
        return this;
    }
    public set xSchemaType(xSchemaType: string  | undefined) {
        this['X-Schema-Type'] = xSchemaType;
    }
    public get xSchemaType(): string | undefined {
        return this['X-Schema-Type'];
    }
}