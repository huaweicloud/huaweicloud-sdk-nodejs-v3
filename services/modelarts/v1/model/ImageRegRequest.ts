

export class ImageRegRequest {
    public arch?: ImageRegRequestArchEnum | string;
    public description?: string;
    public origin?: ImageRegRequestOriginEnum | string;
    private 'resource_category'?: Array<ImageRegRequestResourceCategoryEnum> | Array<string>;
    private 'service_type'?: ImageRegRequestServiceTypeEnum | string;
    public services?: Array<ImageRegRequestServicesEnum> | Array<string>;
    private 'swr_path'?: string;
    public visibility?: ImageRegRequestVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    public tags?: Array<string>;
    private 'swr_instance_id'?: string;
    private 'read_me'?: string;
    public constructor(swrPath?: string) { 
        this['swr_path'] = swrPath;
    }
    public withArch(arch: ImageRegRequestArchEnum | string): ImageRegRequest {
        this['arch'] = arch;
        return this;
    }
    public withDescription(description: string): ImageRegRequest {
        this['description'] = description;
        return this;
    }
    public withOrigin(origin: ImageRegRequestOriginEnum | string): ImageRegRequest {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategory(resourceCategory: Array<ImageRegRequestResourceCategoryEnum> | Array<string>): ImageRegRequest {
        this['resource_category'] = resourceCategory;
        return this;
    }
    public set resourceCategory(resourceCategory: Array<ImageRegRequestResourceCategoryEnum> | Array<string>  | undefined) {
        this['resource_category'] = resourceCategory;
    }
    public get resourceCategory(): Array<ImageRegRequestResourceCategoryEnum> | Array<string> | undefined {
        return this['resource_category'];
    }
    public withServiceType(serviceType: ImageRegRequestServiceTypeEnum | string): ImageRegRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ImageRegRequestServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ImageRegRequestServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withServices(services: Array<ImageRegRequestServicesEnum> | Array<string>): ImageRegRequest {
        this['services'] = services;
        return this;
    }
    public withSwrPath(swrPath: string): ImageRegRequest {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withVisibility(visibility: ImageRegRequestVisibilityEnum | string): ImageRegRequest {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ImageRegRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): ImageRegRequest {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withTags(tags: Array<string>): ImageRegRequest {
        this['tags'] = tags;
        return this;
    }
    public withSwrInstanceId(swrInstanceId: string): ImageRegRequest {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withReadMe(readMe: string): ImageRegRequest {
        this['read_me'] = readMe;
        return this;
    }
    public set readMe(readMe: string  | undefined) {
        this['read_me'] = readMe;
    }
    public get readMe(): string | undefined {
        return this['read_me'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageRegRequestArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageRegRequestOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageRegRequestResourceCategoryEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageRegRequestServiceTypeEnum {
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
export enum ImageRegRequestServicesEnum {
    AI_FLOW = 'AI_FLOW',
    MA_STUDIO = 'MA_STUDIO',
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH',
    TENSOR_BOARD = 'TENSOR_BOARD',
    WEB_IDE = 'WEB_IDE'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageRegRequestVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
