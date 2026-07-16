import { TmsTagResponse } from './TmsTagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterImageResponse extends SdkResponse {
    public arch?: RegisterImageResponseArchEnum | string;
    private 'create_at'?: number;
    public description?: string;
    private 'dev_services'?: Array<RegisterImageResponseDevServicesEnum> | Array<string>;
    public id?: string;
    public name?: string;
    public namespace?: string;
    public origin?: RegisterImageResponseOriginEnum | string;
    private 'resource_categories'?: Array<RegisterImageResponseResourceCategoriesEnum> | Array<string>;
    private 'service_type'?: RegisterImageResponseServiceTypeEnum | string;
    public size?: number;
    public status?: RegisterImageResponseStatusEnum | string;
    private 'status_message'?: string;
    private 'support_res_categories'?: Array<RegisterImageResponseSupportResCategoriesEnum> | Array<string>;
    private 'swr_path'?: string;
    public tag?: string;
    public type?: RegisterImageResponseTypeEnum | string;
    private 'update_at'?: number;
    public visibility?: RegisterImageResponseVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    private 'swr_instance_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
        super();
    }
    public withArch(arch: RegisterImageResponseArchEnum | string): RegisterImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withCreateAt(createAt: number): RegisterImageResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): RegisterImageResponse {
        this['description'] = description;
        return this;
    }
    public withDevServices(devServices: Array<RegisterImageResponseDevServicesEnum> | Array<string>): RegisterImageResponse {
        this['dev_services'] = devServices;
        return this;
    }
    public set devServices(devServices: Array<RegisterImageResponseDevServicesEnum> | Array<string>  | undefined) {
        this['dev_services'] = devServices;
    }
    public get devServices(): Array<RegisterImageResponseDevServicesEnum> | Array<string> | undefined {
        return this['dev_services'];
    }
    public withId(id: string): RegisterImageResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RegisterImageResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): RegisterImageResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withOrigin(origin: RegisterImageResponseOriginEnum | string): RegisterImageResponse {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<RegisterImageResponseResourceCategoriesEnum> | Array<string>): RegisterImageResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<RegisterImageResponseResourceCategoriesEnum> | Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<RegisterImageResponseResourceCategoriesEnum> | Array<string> | undefined {
        return this['resource_categories'];
    }
    public withServiceType(serviceType: RegisterImageResponseServiceTypeEnum | string): RegisterImageResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: RegisterImageResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): RegisterImageResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSize(size: number): RegisterImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: RegisterImageResponseStatusEnum | string): RegisterImageResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): RegisterImageResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withSupportResCategories(supportResCategories: Array<RegisterImageResponseSupportResCategoriesEnum> | Array<string>): RegisterImageResponse {
        this['support_res_categories'] = supportResCategories;
        return this;
    }
    public set supportResCategories(supportResCategories: Array<RegisterImageResponseSupportResCategoriesEnum> | Array<string>  | undefined) {
        this['support_res_categories'] = supportResCategories;
    }
    public get supportResCategories(): Array<RegisterImageResponseSupportResCategoriesEnum> | Array<string> | undefined {
        return this['support_res_categories'];
    }
    public withSwrPath(swrPath: string): RegisterImageResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withTag(tag: string): RegisterImageResponse {
        this['tag'] = tag;
        return this;
    }
    public withType(type: RegisterImageResponseTypeEnum | string): RegisterImageResponse {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): RegisterImageResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVisibility(visibility: RegisterImageResponseVisibilityEnum | string): RegisterImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): RegisterImageResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): RegisterImageResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withSwrInstanceId(swrInstanceId: string): RegisterImageResponse {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withShowName(showName: string): RegisterImageResponse {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): RegisterImageResponse {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
    public withTags(tags: Array<TmsTagResponse>): RegisterImageResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseDevServicesEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseResourceCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseServiceTypeEnum {
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
export enum RegisterImageResponseStatusEnum {
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
export enum RegisterImageResponseSupportResCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
/**
    * @export
    * @enum {string}
    */
export enum RegisterImageResponseVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
