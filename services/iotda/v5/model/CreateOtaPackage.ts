import { FileLocation } from './FileLocation';


export class CreateOtaPackage {
    private 'app_id': string | undefined;
    private 'package_type': string | undefined;
    private 'product_id': string | undefined;
    public version: string;
    private 'support_source_versions'?: Array<string> | undefined;
    public description?: string;
    private 'custom_info'?: string | undefined;
    private 'file_location': FileLocation | undefined;
    public constructor(appId?: any, packageType?: any, productId?: any, version?: any, fileLocation?: any) { 
        this['app_id'] = appId;
        this['package_type'] = packageType;
        this['product_id'] = productId;
        this['version'] = version;
        this['file_location'] = fileLocation;
    }
    public withAppId(appId: string): CreateOtaPackage {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withPackageType(packageType: string): CreateOtaPackage {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType() {
        return this['package_type'];
    }
    public withProductId(productId: string): CreateOtaPackage {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withVersion(version: string): CreateOtaPackage {
        this['version'] = version;
        return this;
    }
    public withSupportSourceVersions(supportSourceVersions: Array<string>): CreateOtaPackage {
        this['support_source_versions'] = supportSourceVersions;
        return this;
    }
    public set supportSourceVersions(supportSourceVersions: Array<string> | undefined) {
        this['support_source_versions'] = supportSourceVersions;
    }
    public get supportSourceVersions() {
        return this['support_source_versions'];
    }
    public withDescription(description: string): CreateOtaPackage {
        this['description'] = description;
        return this;
    }
    public withCustomInfo(customInfo: string): CreateOtaPackage {
        this['custom_info'] = customInfo;
        return this;
    }
    public set customInfo(customInfo: string | undefined) {
        this['custom_info'] = customInfo;
    }
    public get customInfo() {
        return this['custom_info'];
    }
    public withFileLocation(fileLocation: FileLocation): CreateOtaPackage {
        this['file_location'] = fileLocation;
        return this;
    }
    public set fileLocation(fileLocation: FileLocation | undefined) {
        this['file_location'] = fileLocation;
    }
    public get fileLocation() {
        return this['file_location'];
    }
}