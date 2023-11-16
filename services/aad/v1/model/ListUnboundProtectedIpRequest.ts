

export class ListUnboundProtectedIpRequest {
    private 'package_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(packageId?: string) { 
        this['package_id'] = packageId;
    }
    public withPackageId(packageId: string): ListUnboundProtectedIpRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withOffset(offset: number): ListUnboundProtectedIpRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUnboundProtectedIpRequest {
        this['limit'] = limit;
        return this;
    }
}