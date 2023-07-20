import { CreateDataImage } from './CreateDataImage';
import { TagKeyValue } from './TagKeyValue';


export class CreateImageRequestBody {
    private 'data_images'?: Array<CreateDataImage>;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'image_tags'?: Array<TagKeyValue>;
    private 'instance_id'?: string;
    public name?: string;
    public tags?: Array<string>;
    private 'max_ram'?: number;
    private 'min_ram'?: number;
    private 'os_version'?: string;
    private 'image_url'?: string;
    private 'min_disk'?: number;
    private 'is_config'?: boolean;
    private 'cmk_id'?: string;
    public type?: CreateImageRequestBodyTypeEnum | string;
    private 'is_quick_import'?: boolean;
    public architecture?: CreateImageRequestBodyArchitectureEnum | string;
    private 'volume_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withDataImages(dataImages: Array<CreateDataImage>): CreateImageRequestBody {
        this['data_images'] = dataImages;
        return this;
    }
    public set dataImages(dataImages: Array<CreateDataImage>  | undefined) {
        this['data_images'] = dataImages;
    }
    public get dataImages(): Array<CreateDataImage> | undefined {
        return this['data_images'];
    }
    public withDescription(description: string): CreateImageRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateImageRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageTags(imageTags: Array<TagKeyValue>): CreateImageRequestBody {
        this['image_tags'] = imageTags;
        return this;
    }
    public set imageTags(imageTags: Array<TagKeyValue>  | undefined) {
        this['image_tags'] = imageTags;
    }
    public get imageTags(): Array<TagKeyValue> | undefined {
        return this['image_tags'];
    }
    public withInstanceId(instanceId: string): CreateImageRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): CreateImageRequestBody {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<string>): CreateImageRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withMaxRam(maxRam: number): CreateImageRequestBody {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: number  | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam(): number | undefined {
        return this['max_ram'];
    }
    public withMinRam(minRam: number): CreateImageRequestBody {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withOsVersion(osVersion: string): CreateImageRequestBody {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withImageUrl(imageUrl: string): CreateImageRequestBody {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withMinDisk(minDisk: number): CreateImageRequestBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withIsConfig(isConfig: boolean): CreateImageRequestBody {
        this['is_config'] = isConfig;
        return this;
    }
    public set isConfig(isConfig: boolean  | undefined) {
        this['is_config'] = isConfig;
    }
    public get isConfig(): boolean | undefined {
        return this['is_config'];
    }
    public withCmkId(cmkId: string): CreateImageRequestBody {
        this['cmk_id'] = cmkId;
        return this;
    }
    public set cmkId(cmkId: string  | undefined) {
        this['cmk_id'] = cmkId;
    }
    public get cmkId(): string | undefined {
        return this['cmk_id'];
    }
    public withType(type: CreateImageRequestBodyTypeEnum | string): CreateImageRequestBody {
        this['type'] = type;
        return this;
    }
    public withIsQuickImport(isQuickImport: boolean): CreateImageRequestBody {
        this['is_quick_import'] = isQuickImport;
        return this;
    }
    public set isQuickImport(isQuickImport: boolean  | undefined) {
        this['is_quick_import'] = isQuickImport;
    }
    public get isQuickImport(): boolean | undefined {
        return this['is_quick_import'];
    }
    public withArchitecture(architecture: CreateImageRequestBodyArchitectureEnum | string): CreateImageRequestBody {
        this['architecture'] = architecture;
        return this;
    }
    public withVolumeId(volumeId: string): CreateImageRequestBody {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateImageRequestBodyTypeEnum {
    ECS = 'ECS',
    BMS = 'BMS',
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    ISOIMAGE = 'IsoImage'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateImageRequestBodyArchitectureEnum {
    X86 = 'x86',
    ARM = 'arm'
}
