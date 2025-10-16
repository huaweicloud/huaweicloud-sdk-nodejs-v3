

export class OtaPackageInfo {
    private 'package_id'?: string;
    private 'app_id'?: string;
    private 'package_type'?: string;
    private 'product_id'?: string;
    private 'product_name'?: string;
    private 'module_name'?: string;
    public version?: string;
    private 'support_source_versions'?: Array<string>;
    public description?: string;
    private 'custom_info'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withPackageId(packageId: string): OtaPackageInfo {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withAppId(appId: string): OtaPackageInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPackageType(packageType: string): OtaPackageInfo {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withProductId(productId: string): OtaPackageInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): OtaPackageInfo {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withModuleName(moduleName: string): OtaPackageInfo {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withVersion(version: string): OtaPackageInfo {
        this['version'] = version;
        return this;
    }
    public withSupportSourceVersions(supportSourceVersions: Array<string>): OtaPackageInfo {
        this['support_source_versions'] = supportSourceVersions;
        return this;
    }
    public set supportSourceVersions(supportSourceVersions: Array<string>  | undefined) {
        this['support_source_versions'] = supportSourceVersions;
    }
    public get supportSourceVersions(): Array<string> | undefined {
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
    public set customInfo(customInfo: string  | undefined) {
        this['custom_info'] = customInfo;
    }
    public get customInfo(): string | undefined {
        return this['custom_info'];
    }
    public withCreateTime(createTime: string): OtaPackageInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}