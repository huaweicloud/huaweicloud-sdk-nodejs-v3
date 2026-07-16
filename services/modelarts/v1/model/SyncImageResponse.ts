import { TmsTagResponse } from './TmsTagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncImageResponse extends SdkResponse {
    public arch?: SyncImageResponseArchEnum | string;
    private 'create_at'?: number;
    public description?: string;
    private 'dev_services'?: Array<SyncImageResponseDevServicesEnum> | Array<string>;
    public id?: string;
    public name?: string;
    public namespace?: string;
    public origin?: SyncImageResponseOriginEnum | string;
    private 'resource_categories'?: Array<SyncImageResponseResourceCategoriesEnum> | Array<string>;
    private 'service_type'?: SyncImageResponseServiceTypeEnum | string;
    public size?: number;
    public status?: SyncImageResponseStatusEnum | string;
    private 'status_message'?: string;
    private 'support_res_categories'?: Array<SyncImageResponseSupportResCategoriesEnum> | Array<string>;
    private 'swr_path'?: string;
    public tag?: string;
    public type?: SyncImageResponseTypeEnum | string;
    private 'update_at'?: number;
    public visibility?: SyncImageResponseVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    private 'swr_instance_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
        super();
    }
    public withArch(arch: SyncImageResponseArchEnum | string): SyncImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withCreateAt(createAt: number): SyncImageResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): SyncImageResponse {
        this['description'] = description;
        return this;
    }
    public withDevServices(devServices: Array<SyncImageResponseDevServicesEnum> | Array<string>): SyncImageResponse {
        this['dev_services'] = devServices;
        return this;
    }
    public set devServices(devServices: Array<SyncImageResponseDevServicesEnum> | Array<string>  | undefined) {
        this['dev_services'] = devServices;
    }
    public get devServices(): Array<SyncImageResponseDevServicesEnum> | Array<string> | undefined {
        return this['dev_services'];
    }
    public withId(id: string): SyncImageResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SyncImageResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): SyncImageResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withOrigin(origin: SyncImageResponseOriginEnum | string): SyncImageResponse {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<SyncImageResponseResourceCategoriesEnum> | Array<string>): SyncImageResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<SyncImageResponseResourceCategoriesEnum> | Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<SyncImageResponseResourceCategoriesEnum> | Array<string> | undefined {
        return this['resource_categories'];
    }
    public withServiceType(serviceType: SyncImageResponseServiceTypeEnum | string): SyncImageResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: SyncImageResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): SyncImageResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSize(size: number): SyncImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: SyncImageResponseStatusEnum | string): SyncImageResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): SyncImageResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withSupportResCategories(supportResCategories: Array<SyncImageResponseSupportResCategoriesEnum> | Array<string>): SyncImageResponse {
        this['support_res_categories'] = supportResCategories;
        return this;
    }
    public set supportResCategories(supportResCategories: Array<SyncImageResponseSupportResCategoriesEnum> | Array<string>  | undefined) {
        this['support_res_categories'] = supportResCategories;
    }
    public get supportResCategories(): Array<SyncImageResponseSupportResCategoriesEnum> | Array<string> | undefined {
        return this['support_res_categories'];
    }
    public withSwrPath(swrPath: string): SyncImageResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withTag(tag: string): SyncImageResponse {
        this['tag'] = tag;
        return this;
    }
    public withType(type: SyncImageResponseTypeEnum | string): SyncImageResponse {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): SyncImageResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVisibility(visibility: SyncImageResponseVisibilityEnum | string): SyncImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): SyncImageResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): SyncImageResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withSwrInstanceId(swrInstanceId: string): SyncImageResponse {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withShowName(showName: string): SyncImageResponse {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): SyncImageResponse {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
    public withTags(tags: Array<TmsTagResponse>): SyncImageResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseDevServicesEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseResourceCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseServiceTypeEnum {
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
export enum SyncImageResponseStatusEnum {
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
export enum SyncImageResponseSupportResCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
/**
    * @export
    * @enum {string}
    */
export enum SyncImageResponseVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
