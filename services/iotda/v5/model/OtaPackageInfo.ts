

export class OtaPackageInfo {
    private 'package_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'package_type'?: string | undefined;
    private 'product_id'?: string | undefined;
    public version?: string;
    private 'support_source_versions'?: Array<string> | undefined;
    public description?: string;
    private 'custom_info'?: string | undefined;
    private 'create_time'?: string | undefined;
    public constructor() { 
    }
    public withPackageId(packageId: string): OtaPackageInfo {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId() {
        return this['package_id'];
    }
    public withAppId(appId: string): OtaPackageInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withPackageType(packageType: string): OtaPackageInfo {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType() {
        return this['package_type'];
    }
    public withProductId(productId: string): OtaPackageInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withVersion(version: string): OtaPackageInfo {
        this['version'] = version;
        return this;
    }
    public withSupportSourceVersions(supportSourceVersions: Array<string>): OtaPackageInfo {
        this['support_source_versions'] = supportSourceVersions;
        return this;
    }
    public set supportSourceVersions(supportSourceVersions: Array<string> | undefined) {
        this['support_source_versions'] = supportSourceVersions;
    }
    public get supportSourceVersions() {
        return this['support_source_versions'];
    }
    public withDescription(description: string): OtaPackageInfo {
        this['description'] = description;
        return this;
    }
    public withCustomInfo(customInfo: string): OtaPackageInfo {
        this['custom_info'] = customInfo;
        return this;
    }
    public set customInfo(customInfo: string | undefined) {
        this['custom_info'] = customInfo;
    }
    public get customInfo() {
        return this['custom_info'];
    }
    public withCreateTime(createTime: string): OtaPackageInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}