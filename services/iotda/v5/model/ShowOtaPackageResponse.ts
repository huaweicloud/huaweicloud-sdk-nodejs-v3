import { FileLocation } from './FileLocation';
import { OtaPackageInfo } from './OtaPackageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOtaPackageResponse extends SdkResponse {
    private 'package_id'?: string;
    private 'app_id'?: string;
    private 'package_type'?: string;
    private 'product_id'?: string;
    public version?: string;
    private 'support_source_versions'?: Array<string>;
    public description?: string;
    private 'custom_info'?: string;
    private 'create_time'?: string;
    private 'file_location'?: FileLocation;
    public constructor() { 
        super();
    }
    public withPackageId(packageId: string): ShowOtaPackageResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withAppId(appId: string): ShowOtaPackageResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPackageType(packageType: string): ShowOtaPackageResponse {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withProductId(productId: string): ShowOtaPackageResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withVersion(version: string): ShowOtaPackageResponse {
        this['version'] = version;
        return this;
    }
    public withSupportSourceVersions(supportSourceVersions: Array<string>): ShowOtaPackageResponse {
        this['support_source_versions'] = supportSourceVersions;
        return this;
    }
    public set supportSourceVersions(supportSourceVersions: Array<string>  | undefined) {
        this['support_source_versions'] = supportSourceVersions;
    }
    public get supportSourceVersions(): Array<string> | undefined {
        return this['support_source_versions'];
    }
    public withDescription(description: string): ShowOtaPackageResponse {
        this['description'] = description;
        return this;
    }
    public withCustomInfo(customInfo: string): ShowOtaPackageResponse {
        this['custom_info'] = customInfo;
        return this;
    }
    public set customInfo(customInfo: string  | undefined) {
        this['custom_info'] = customInfo;
    }
    public get customInfo(): string | undefined {
        return this['custom_info'];
    }
    public withCreateTime(createTime: string): ShowOtaPackageResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withFileLocation(fileLocation: FileLocation): ShowOtaPackageResponse {
        this['file_location'] = fileLocation;
        return this;
    }
    public set fileLocation(fileLocation: FileLocation  | undefined) {
        this['file_location'] = fileLocation;
    }
    public get fileLocation(): FileLocation | undefined {
        return this['file_location'];
    }
}