

export class ListTagsRequest {
    public limit?: number;
    public page?: number;
    private '__imagetype'?: ListTagsRequestImagetypeEnum | undefined;
    public id?: string;
    public status?: ListTagsRequestStatusEnum;
    public name?: string;
    private 'min_disk'?: number | undefined;
    private '__platform'?: string | undefined;
    private '__os_type'?: ListTagsRequestOsTypeEnum | undefined;
    private 'member_status'?: ListTagsRequestMemberStatusEnum | undefined;
    private 'virtual_env_type'?: ListTagsRequestVirtualEnvTypeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public architecture?: ListTagsRequestArchitectureEnum;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPage(page: number): ListTagsRequest {
        this['page'] = page;
        return this;
    }
    public withImagetype(imagetype: ListTagsRequestImagetypeEnum): ListTagsRequest {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: ListTagsRequestImagetypeEnum | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype() {
        return this['__imagetype'];
    }
    public withId(id: string): ListTagsRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListTagsRequestStatusEnum): ListTagsRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ListTagsRequest {
        this['name'] = name;
        return this;
    }
    public withMinDisk(minDisk: number): ListTagsRequest {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withPlatform(platform: string): ListTagsRequest {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: string | undefined) {
        this['__platform'] = platform;
    }
    public get platform() {
        return this['__platform'];
    }
    public withOsType(osType: ListTagsRequestOsTypeEnum): ListTagsRequest {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: ListTagsRequestOsTypeEnum | undefined) {
        this['__os_type'] = osType;
    }
    public get osType() {
        return this['__os_type'];
    }
    public withMemberStatus(memberStatus: ListTagsRequestMemberStatusEnum): ListTagsRequest {
        this['member_status'] = memberStatus;
        return this;
    }
    public set memberStatus(memberStatus: ListTagsRequestMemberStatusEnum | undefined) {
        this['member_status'] = memberStatus;
    }
    public get memberStatus() {
        return this['member_status'];
    }
    public withVirtualEnvType(virtualEnvType: ListTagsRequestVirtualEnvTypeEnum): ListTagsRequest {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: ListTagsRequestVirtualEnvTypeEnum | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType() {
        return this['virtual_env_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTagsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withArchitecture(architecture: ListTagsRequestArchitectureEnum): ListTagsRequest {
        this['architecture'] = architecture;
        return this;
    }
    public withCreatedAt(createdAt: string): ListTagsRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListTagsRequest {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared',
    MARKET = 'market'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestStatusEnum {
    QUEUED = 'queued',
    SAVING = 'saving',
    DELETED = 'deleted',
    KILLED = 'killed',
    ACTIVE = 'active'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestMemberStatusEnum {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    PENDING = 'pending'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestArchitectureEnum {
    X86 = 'x86',
    ARM = 'arm'
}
