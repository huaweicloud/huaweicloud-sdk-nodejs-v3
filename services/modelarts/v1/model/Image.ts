import { TmsTagResponse } from './TmsTagResponse';


export class Image {
    public arch?: ImageArchEnum | string;
    private 'create_at'?: number;
    public description?: string;
    private 'dev_services'?: Array<ImageDevServicesEnum> | Array<string>;
    public id?: string;
    public name?: string;
    public namespace?: string;
    public origin?: ImageOriginEnum | string;
    private 'resource_categories'?: Array<ImageResourceCategoriesEnum> | Array<string>;
    private 'service_type'?: ImageServiceTypeEnum | string;
    public size?: number;
    public status?: ImageStatusEnum | string;
    private 'status_message'?: string;
    private 'support_res_categories'?: Array<ImageSupportResCategoriesEnum> | Array<string>;
    private 'swr_path'?: string;
    public tag?: string;
    public type?: ImageTypeEnum | string;
    private 'update_at'?: number;
    public visibility?: ImageVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    private 'swr_instance_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
    }
    public withArch(arch: ImageArchEnum | string): Image {
        this['arch'] = arch;
        return this;
    }
    public withCreateAt(createAt: number): Image {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): Image {
        this['description'] = description;
        return this;
    }
    public withDevServices(devServices: Array<ImageDevServicesEnum> | Array<string>): Image {
        this['dev_services'] = devServices;
        return this;
    }
    public set devServices(devServices: Array<ImageDevServicesEnum> | Array<string>  | undefined) {
        this['dev_services'] = devServices;
    }
    public get devServices(): Array<ImageDevServicesEnum> | Array<string> | undefined {
        return this['dev_services'];
    }
    public withId(id: string): Image {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Image {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): Image {
        this['namespace'] = namespace;
        return this;
    }
    public withOrigin(origin: ImageOriginEnum | string): Image {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<ImageResourceCategoriesEnum> | Array<string>): Image {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<ImageResourceCategoriesEnum> | Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<ImageResourceCategoriesEnum> | Array<string> | undefined {
        return this['resource_categories'];
    }
    public withServiceType(serviceType: ImageServiceTypeEnum | string): Image {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ImageServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ImageServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSize(size: number): Image {
        this['size'] = size;
        return this;
    }
    public withStatus(status: ImageStatusEnum | string): Image {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): Image {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withSupportResCategories(supportResCategories: Array<ImageSupportResCategoriesEnum> | Array<string>): Image {
        this['support_res_categories'] = supportResCategories;
        return this;
    }
    public set supportResCategories(supportResCategories: Array<ImageSupportResCategoriesEnum> | Array<string>  | undefined) {
        this['support_res_categories'] = supportResCategories;
    }
    public get supportResCategories(): Array<ImageSupportResCategoriesEnum> | Array<string> | undefined {
        return this['support_res_categories'];
    }
    public withSwrPath(swrPath: string): Image {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withTag(tag: string): Image {
        this['tag'] = tag;
        return this;
    }
    public withType(type: ImageTypeEnum | string): Image {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): Image {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVisibility(visibility: ImageVisibilityEnum | string): Image {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): Image {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): Image {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withSwrInstanceId(swrInstanceId: string): Image {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withShowName(showName: string): Image {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): Image {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
    public withTags(tags: Array<TmsTagResponse>): Image {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageDevServicesEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageResourceCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageServiceTypeEnum {
    COMMON = 'COMMON',
    DEV = 'DEV',
    INFERENCE = 'INFERENCE',
    TRAIN = 'TRAIN',
    UNKNOWN = 'UNKNOWN'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageStatusEnum {
    ACTIVE = 'ACTIVE',
    CREATE_FAILED = 'CREATE_FAILED',
    CREATING = 'CREATING',
    DELETED = 'DELETED',
    ERROR = 'ERROR',
    INIT = 'INIT'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageSupportResCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
