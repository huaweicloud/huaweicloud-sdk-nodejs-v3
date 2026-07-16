import { TmsTagResponse } from './TmsTagResponse';


export class ImageResponse {
    public arch?: ImageResponseArchEnum | string;
    private 'create_at'?: number;
    public description?: string;
    private 'dev_services'?: Array<ImageResponseDevServicesEnum> | Array<string>;
    public id?: string;
    public name?: string;
    public namespace?: string;
    public origin?: ImageResponseOriginEnum | string;
    private 'resource_categories'?: Array<ImageResponseResourceCategoriesEnum> | Array<string>;
    private 'service_type'?: ImageResponseServiceTypeEnum | string;
    public size?: number;
    public status?: ImageResponseStatusEnum | string;
    private 'status_message'?: string;
    private 'swr_path'?: string;
    public tag?: string;
    public type?: ImageResponseTypeEnum | string;
    private 'update_at'?: number;
    public visibility?: ImageResponseVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    private 'swr_instance_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
    }
    public withArch(arch: ImageResponseArchEnum | string): ImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withCreateAt(createAt: number): ImageResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): ImageResponse {
        this['description'] = description;
        return this;
    }
    public withDevServices(devServices: Array<ImageResponseDevServicesEnum> | Array<string>): ImageResponse {
        this['dev_services'] = devServices;
        return this;
    }
    public set devServices(devServices: Array<ImageResponseDevServicesEnum> | Array<string>  | undefined) {
        this['dev_services'] = devServices;
    }
    public get devServices(): Array<ImageResponseDevServicesEnum> | Array<string> | undefined {
        return this['dev_services'];
    }
    public withId(id: string): ImageResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ImageResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ImageResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withOrigin(origin: ImageResponseOriginEnum | string): ImageResponse {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<ImageResponseResourceCategoriesEnum> | Array<string>): ImageResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<ImageResponseResourceCategoriesEnum> | Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<ImageResponseResourceCategoriesEnum> | Array<string> | undefined {
        return this['resource_categories'];
    }
    public withServiceType(serviceType: ImageResponseServiceTypeEnum | string): ImageResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ImageResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ImageResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSize(size: number): ImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: ImageResponseStatusEnum | string): ImageResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): ImageResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withSwrPath(swrPath: string): ImageResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withTag(tag: string): ImageResponse {
        this['tag'] = tag;
        return this;
    }
    public withType(type: ImageResponseTypeEnum | string): ImageResponse {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): ImageResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVisibility(visibility: ImageResponseVisibilityEnum | string): ImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ImageResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): ImageResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withSwrInstanceId(swrInstanceId: string): ImageResponse {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withShowName(showName: string): ImageResponse {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): ImageResponse {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
    public withTags(tags: Array<TmsTagResponse>): ImageResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageResponseArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageResponseDevServicesEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageResponseOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageResponseResourceCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageResponseServiceTypeEnum {
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
export enum ImageResponseStatusEnum {
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
export enum ImageResponseTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageResponseVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
