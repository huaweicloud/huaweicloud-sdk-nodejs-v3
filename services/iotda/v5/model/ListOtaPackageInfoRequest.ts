

export class ListOtaPackageInfoRequest {
    private 'Sp-Auth-Token'?: string | undefined;
    private 'Instance-Id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'package_type': string | undefined;
    private 'product_id'?: string | undefined;
    public version?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor(packageType?: any) { 
        this['package_type'] = packageType;
    }
    public withSpAuthToken(spAuthToken: string): ListOtaPackageInfoRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken() {
        return this['Sp-Auth-Token'];
    }
    public withInstanceId(instanceId: string): ListOtaPackageInfoRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListOtaPackageInfoRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withPackageType(packageType: string): ListOtaPackageInfoRequest {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType() {
        return this['package_type'];
    }
    public withProductId(productId: string): ListOtaPackageInfoRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
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