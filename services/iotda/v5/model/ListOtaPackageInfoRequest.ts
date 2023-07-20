

export class ListOtaPackageInfoRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    private 'package_type'?: string;
    private 'product_id'?: string;
    public version?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor(packageType?: string) { 
        this['package_type'] = packageType;
    }
    public withInstanceId(instanceId: string): ListOtaPackageInfoRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListOtaPackageInfoRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPackageType(packageType: string): ListOtaPackageInfoRequest {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withProductId(productId: string): ListOtaPackageInfoRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withVersion(version: string): ListOtaPackageInfoRequest {
        this['version'] = version;
        return this;
    }
    public withLimit(limit: number): ListOtaPackageInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOtaPackageInfoRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListOtaPackageInfoRequest {
        this['offset'] = offset;
        return this;
    }
}