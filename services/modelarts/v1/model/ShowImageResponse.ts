import { TmsTagResponse } from './TmsTagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageResponse extends SdkResponse {
    public arch?: ShowImageResponseArchEnum | string;
    private 'create_at'?: number;
    public description?: string;
    private 'dev_services'?: Array<ShowImageResponseDevServicesEnum> | Array<string>;
    public id?: string;
    public name?: string;
    public namespace?: string;
    public origin?: ShowImageResponseOriginEnum | string;
    private 'resource_categories'?: Array<ShowImageResponseResourceCategoriesEnum> | Array<string>;
    private 'service_type'?: ShowImageResponseServiceTypeEnum | string;
    public size?: number;
    public status?: ShowImageResponseStatusEnum | string;
    private 'status_message'?: string;
    private 'support_res_categories'?: Array<ShowImageResponseSupportResCategoriesEnum> | Array<string>;
    private 'swr_path'?: string;
    public tag?: string;
    public type?: ShowImageResponseTypeEnum | string;
    private 'update_at'?: number;
    public visibility?: ShowImageResponseVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    private 'swr_instance_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
        super();
    }
    public withArch(arch: ShowImageResponseArchEnum | string): ShowImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withCreateAt(createAt: number): ShowImageResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): ShowImageResponse {
        this['description'] = description;
        return this;
    }
    public withDevServices(devServices: Array<ShowImageResponseDevServicesEnum> | Array<string>): ShowImageResponse {
        this['dev_services'] = devServices;
        return this;
    }
    public set devServices(devServices: Array<ShowImageResponseDevServicesEnum> | Array<string>  | undefined) {
        this['dev_services'] = devServices;
    }
    public get devServices(): Array<ShowImageResponseDevServicesEnum> | Array<string> | undefined {
        return this['dev_services'];
    }
    public withId(id: string): ShowImageResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowImageResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ShowImageResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withOrigin(origin: ShowImageResponseOriginEnum | string): ShowImageResponse {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<ShowImageResponseResourceCategoriesEnum> | Array<string>): ShowImageResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<ShowImageResponseResourceCategoriesEnum> | Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<ShowImageResponseResourceCategoriesEnum> | Array<string> | undefined {
        return this['resource_categories'];
    }
    public withServiceType(serviceType: ShowImageResponseServiceTypeEnum | string): ShowImageResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ShowImageResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ShowImageResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSize(size: number): ShowImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: ShowImageResponseStatusEnum | string): ShowImageResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): ShowImageResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withSupportResCategories(supportResCategories: Array<ShowImageResponseSupportResCategoriesEnum> | Array<string>): ShowImageResponse {
        this['support_res_categories'] = supportResCategories;
        return this;
    }
    public set supportResCategories(supportResCategories: Array<ShowImageResponseSupportResCategoriesEnum> | Array<string>  | undefined) {
        this['support_res_categories'] = supportResCategories;
    }
    public get supportResCategories(): Array<ShowImageResponseSupportResCategoriesEnum> | Array<string> | undefined {
        return this['support_res_categories'];
    }
    public withSwrPath(swrPath: string): ShowImageResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withTag(tag: string): ShowImageResponse {
        this['tag'] = tag;
        return this;
    }
    public withType(type: ShowImageResponseTypeEnum | string): ShowImageResponse {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): ShowImageResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVisibility(visibility: ShowImageResponseVisibilityEnum | string): ShowImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ShowImageResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): ShowImageResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withSwrInstanceId(swrInstanceId: string): ShowImageResponse {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withShowName(showName: string): ShowImageResponse {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): ShowImageResponse {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
    public withTags(tags: Array<TmsTagResponse>): ShowImageResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseDevServicesEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseResourceCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseServiceTypeEnum {
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
export enum ShowImageResponseStatusEnum {
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
export enum ShowImageResponseSupportResCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowImageResponseVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
