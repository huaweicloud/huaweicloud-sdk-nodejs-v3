import { ResourceTag } from './ResourceTag';


export class QuickImportImageByFileRequestBody {
    public name?: string;
    public description?: string;
    private 'os_version'?: string;
    private 'image_url'?: string;
    private 'min_disk'?: number;
    private 'license_type'?: string;
    public tags?: Array<string>;
    public type?: QuickImportImageByFileRequestBodyTypeEnum | string;
    private 'enterprise_project_id'?: string;
    public architecture?: QuickImportImageByFileRequestBodyArchitectureEnum | string;
    private 'os_type'?: QuickImportImageByFileRequestBodyOsTypeEnum | string;
    private 'image_tags'?: Array<ResourceTag>;
    public constructor(name?: string, osVersion?: string, imageUrl?: string, minDisk?: number) { 
        this['name'] = name;
        this['os_version'] = osVersion;
        this['image_url'] = imageUrl;
        this['min_disk'] = minDisk;
    }
    public withName(name: string): QuickImportImageByFileRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): QuickImportImageByFileRequestBody {
        this['description'] = description;
        return this;
    }
    public withOsVersion(osVersion: string): QuickImportImageByFileRequestBody {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withImageUrl(imageUrl: string): QuickImportImageByFileRequestBody {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withMinDisk(minDisk: number): QuickImportImageByFileRequestBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withLicenseType(licenseType: string): QuickImportImageByFileRequestBody {
        this['license_type'] = licenseType;
        return this;
    }
    public set licenseType(licenseType: string  | undefined) {
        this['license_type'] = licenseType;
    }
    public get licenseType(): string | undefined {
        return this['license_type'];
    }
    public withTags(tags: Array<string>): QuickImportImageByFileRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withType(type: QuickImportImageByFileRequestBodyTypeEnum | string): QuickImportImageByFileRequestBody {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QuickImportImageByFileRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withArchitecture(architecture: QuickImportImageByFileRequestBodyArchitectureEnum | string): QuickImportImageByFileRequestBody {
        this['architecture'] = architecture;
        return this;
    }
    public withOsType(osType: QuickImportImageByFileRequestBodyOsTypeEnum | string): QuickImportImageByFileRequestBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: QuickImportImageByFileRequestBodyOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): QuickImportImageByFileRequestBodyOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withImageTags(imageTags: Array<ResourceTag>): QuickImportImageByFileRequestBody {
        this['image_tags'] = imageTags;
        return this;
    }
    public set imageTags(imageTags: Array<ResourceTag>  | undefined) {
        this['image_tags'] = imageTags;
    }
    public get imageTags(): Array<ResourceTag> | undefined {
        return this['image_tags'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QuickImportImageByFileRequestBodyTypeEnum {
    ECS = 'ECS',
    BMS = 'BMS',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum QuickImportImageByFileRequestBodyArchitectureEnum {
    X86 = 'x86',
    ARM = 'arm'
}
/**
    * @export
    * @enum {string}
    */
export enum QuickImportImageByFileRequestBodyOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows'
}
