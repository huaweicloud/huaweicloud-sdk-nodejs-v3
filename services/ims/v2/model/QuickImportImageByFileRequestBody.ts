import { ResourceTag } from './ResourceTag';


export class QuickImportImageByFileRequestBody {
    public name: string;
    public description?: string;
    private 'os_version': string | undefined;
    private 'image_url': string | undefined;
    private 'min_disk': number | undefined;
    public tags?: Array<string>;
    public type?: QuickImportImageByFileRequestBodyTypeEnum;
    private 'enterprise_project_id'?: string | undefined;
    public architecture?: QuickImportImageByFileRequestBodyArchitectureEnum;
    private 'os_type'?: QuickImportImageByFileRequestBodyOsTypeEnum | undefined;
    private 'image_tags'?: Array<ResourceTag> | undefined;
    public constructor(name?: any, osVersion?: any, imageUrl?: any, minDisk?: any) { 
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
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
    public withImageUrl(imageUrl: string): QuickImportImageByFileRequestBody {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
    public withMinDisk(minDisk: number): QuickImportImageByFileRequestBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withTags(tags: Array<string>): QuickImportImageByFileRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withType(type: QuickImportImageByFileRequestBodyTypeEnum): QuickImportImageByFileRequestBody {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QuickImportImageByFileRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withArchitecture(architecture: QuickImportImageByFileRequestBodyArchitectureEnum): QuickImportImageByFileRequestBody {
        this['architecture'] = architecture;
        return this;
    }
    public withOsType(osType: QuickImportImageByFileRequestBodyOsTypeEnum): QuickImportImageByFileRequestBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: QuickImportImageByFileRequestBodyOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withImageTags(imageTags: Array<ResourceTag>): QuickImportImageByFileRequestBody {
        this['image_tags'] = imageTags;
        return this;
    }
    public set imageTags(imageTags: Array<ResourceTag> | undefined) {
        this['image_tags'] = imageTags;
    }
    public get imageTags() {
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
