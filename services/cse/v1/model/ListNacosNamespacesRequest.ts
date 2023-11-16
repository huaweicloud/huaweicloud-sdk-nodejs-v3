

export class ListNacosNamespacesRequest {
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(xEngineId?: string, xEnterpriseProjectID?: string, offset?: number, limit?: number) { 
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXEngineId(xEngineId: string): ListNacosNamespacesRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ListNacosNamespacesRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withOffset(offset: number): ListNacosNamespacesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNacosNamespacesRequest {
        this['limit'] = limit;
        return this;
    }
}