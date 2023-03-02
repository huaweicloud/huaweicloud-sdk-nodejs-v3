import { FileLocation } from './FileLocation';
import { OtaPackageInfo } from './OtaPackageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOtaPackageResponse extends SdkResponse {
    private 'package_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'package_type'?: string | undefined;
    private 'product_id'?: string | undefined;
    public version?: string;
    private 'support_source_versions'?: Array<string> | undefined;
    public description?: string;
    private 'custom_info'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'file_location'?: FileLocation | undefined;
    public constructor() { 
        super();
    }
    public withPackageId(packageId: string): CreateOtaPackageResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId() {
        return this['package_id'];
    }
    public withAppId(appId: string): CreateOtaPackageResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withPackageType(packageType: string): CreateOtaPackageResponse {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType() {
        return this['package_type'];
    }
    public withProductId(productId: string): CreateOtaPackageResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withVersion(version: string): CreateOtaPackageResponse {
        this['version'] = version;
        return this;
    }
    public withSupportSourceVersions(supportSourceVersions: Array<string>): CreateOtaPackageResponse {
        this['support_source_versions'] = supportSourceVersions;
        return this;
    }
    public set supportSourceVersions(supportSourceVersions: Array<string> | undefined) {
        this['support_source_versions'] = supportSourceVersions;
    }
    public get supportSourceVersions() {
        return this['support_source_versions'];
    }
    public withDescription(description: string): CreateOtaPackageResponse {
        this['description'] = description;
        return this;
    }
    public withCustomInfo(customInfo: string): CreateOtaPackageResponse {
        this['custom_info'] = customInfo;
        return this;
    }
    public set customInfo(customInfo: string | undefined) {
        this['custom_info'] = customInfo;
    }
    public get customInfo() {
        return this['custom_info'];
    }
    public withCreateTime(createTime: string): CreateOtaPackageResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withFileLocation(fileLocation: FileLocation): CreateOtaPackageResponse {
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