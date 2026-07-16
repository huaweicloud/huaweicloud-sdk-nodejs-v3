import { TmsTagResponse } from './TmsTagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteImageResponse extends SdkResponse {
    public arch?: DeleteImageResponseArchEnum | string;
    private 'create_at'?: number;
    public description?: string;
    private 'dev_services'?: Array<DeleteImageResponseDevServicesEnum> | Array<string>;
    public id?: string;
    public name?: string;
    public namespace?: string;
    public origin?: DeleteImageResponseOriginEnum | string;
    private 'resource_categories'?: Array<DeleteImageResponseResourceCategoriesEnum> | Array<string>;
    private 'service_type'?: DeleteImageResponseServiceTypeEnum | string;
    public size?: number;
    public status?: DeleteImageResponseStatusEnum | string;
    private 'status_message'?: string;
    private 'support_res_categories'?: Array<DeleteImageResponseSupportResCategoriesEnum> | Array<string>;
    private 'swr_path'?: string;
    public tag?: string;
    public type?: DeleteImageResponseTypeEnum | string;
    private 'update_at'?: number;
    public visibility?: DeleteImageResponseVisibilityEnum | string;
    private 'workspace_id'?: string;
    private 'flavor_type'?: string;
    private 'swr_instance_id'?: string;
    private 'show_name'?: string;
    private 'show_tag'?: string;
    public tags?: Array<TmsTagResponse>;
    public constructor() { 
        super();
    }
    public withArch(arch: DeleteImageResponseArchEnum | string): DeleteImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withCreateAt(createAt: number): DeleteImageResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDescription(description: string): DeleteImageResponse {
        this['description'] = description;
        return this;
    }
    public withDevServices(devServices: Array<DeleteImageResponseDevServicesEnum> | Array<string>): DeleteImageResponse {
        this['dev_services'] = devServices;
        return this;
    }
    public set devServices(devServices: Array<DeleteImageResponseDevServicesEnum> | Array<string>  | undefined) {
        this['dev_services'] = devServices;
    }
    public get devServices(): Array<DeleteImageResponseDevServicesEnum> | Array<string> | undefined {
        return this['dev_services'];
    }
    public withId(id: string): DeleteImageResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteImageResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): DeleteImageResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withOrigin(origin: DeleteImageResponseOriginEnum | string): DeleteImageResponse {
        this['origin'] = origin;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<DeleteImageResponseResourceCategoriesEnum> | Array<string>): DeleteImageResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<DeleteImageResponseResourceCategoriesEnum> | Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<DeleteImageResponseResourceCategoriesEnum> | Array<string> | undefined {
        return this['resource_categories'];
    }
    public withServiceType(serviceType: DeleteImageResponseServiceTypeEnum | string): DeleteImageResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: DeleteImageResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): DeleteImageResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withSize(size: number): DeleteImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: DeleteImageResponseStatusEnum | string): DeleteImageResponse {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): DeleteImageResponse {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withSupportResCategories(supportResCategories: Array<DeleteImageResponseSupportResCategoriesEnum> | Array<string>): DeleteImageResponse {
        this['support_res_categories'] = supportResCategories;
        return this;
    }
    public set supportResCategories(supportResCategories: Array<DeleteImageResponseSupportResCategoriesEnum> | Array<string>  | undefined) {
        this['support_res_categories'] = supportResCategories;
    }
    public get supportResCategories(): Array<DeleteImageResponseSupportResCategoriesEnum> | Array<string> | undefined {
        return this['support_res_categories'];
    }
    public withSwrPath(swrPath: string): DeleteImageResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withTag(tag: string): DeleteImageResponse {
        this['tag'] = tag;
        return this;
    }
    public withType(type: DeleteImageResponseTypeEnum | string): DeleteImageResponse {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): DeleteImageResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVisibility(visibility: DeleteImageResponseVisibilityEnum | string): DeleteImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withWorkspaceId(workspaceId: string): DeleteImageResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFlavorType(flavorType: string): DeleteImageResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withSwrInstanceId(swrInstanceId: string): DeleteImageResponse {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
    public withShowName(showName: string): DeleteImageResponse {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
    public withShowTag(showTag: string): DeleteImageResponse {
        this['show_tag'] = showTag;
        return this;
    }
    public set showTag(showTag: string  | undefined) {
        this['show_tag'] = showTag;
    }
    public get showTag(): string | undefined {
        return this['show_tag'];
    }
    public withTags(tags: Array<TmsTagResponse>): DeleteImageResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseArchEnum {
    AARCH64 = 'AARCH64',
    X86_64 = 'X86_64'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseDevServicesEnum {
    NOTEBOOK = 'NOTEBOOK',
    SSH = 'SSH'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseOriginEnum {
    CUSTOMIZE = 'CUSTOMIZE',
    IMAGE_SAVE = 'IMAGE_SAVE'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseResourceCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseServiceTypeEnum {
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
export enum DeleteImageResponseStatusEnum {
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
export enum DeleteImageResponseSupportResCategoriesEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteImageResponseVisibilityEnum {
    HIDDEN = 'HIDDEN',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
