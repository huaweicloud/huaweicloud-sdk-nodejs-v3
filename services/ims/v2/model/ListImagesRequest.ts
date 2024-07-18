

export class ListImagesRequest {
    private '__imagetype'?: ListImagesRequestImagetypeEnum | string;
    private '__isregistered'?: ListImagesRequestIsregisteredEnum | string;
    private '__os_bit'?: ListImagesRequestOsBitEnum | string;
    private '__os_type'?: ListImagesRequestOsTypeEnum | string;
    private '__platform'?: ListImagesRequestPlatformEnum | string;
    private '__support_diskintensive'?: string;
    private '__support_highperformance'?: string;
    private '__support_kvm'?: string;
    private '__support_kvm_gpu_type'?: string;
    private '__support_kvm_infiniband'?: string;
    private '__support_largememory'?: string;
    private '__support_xen'?: string;
    private '__support_xen_gpu_type'?: string;
    private '__support_xen_hana'?: string;
    private 'container_format'?: string;
    private 'disk_format'?: ListImagesRequestDiskFormatEnum | string;
    private 'enterprise_project_id'?: string;
    public id?: string;
    public limit?: number;
    public marker?: string;
    private 'member_status'?: ListImagesRequestMemberStatusEnum | string;
    private 'min_disk'?: number;
    private 'min_ram'?: number;
    public name?: string;
    public owner?: string;
    private 'protected'?: boolean;
    private 'sort_dir'?: ListImagesRequestSortDirEnum | string;
    private 'sort_key'?: ListImagesRequestSortKeyEnum | string;
    public status?: ListImagesRequestStatusEnum | string;
    public tag?: string;
    private 'virtual_env_type'?: ListImagesRequestVirtualEnvTypeEnum | string;
    public visibility?: ListImagesRequestVisibilityEnum | string;
    private 'X-Sdk-Date'?: string;
    private 'flavor_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public architecture?: ListImagesRequestArchitectureEnum | string;
    public constructor() { 
    }
    public withImagetype(imagetype: ListImagesRequestImagetypeEnum | string): ListImagesRequest {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: ListImagesRequestImagetypeEnum | string  | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype(): ListImagesRequestImagetypeEnum | string | undefined {
        return this['__imagetype'];
    }
    public withIsregistered(isregistered: ListImagesRequestIsregisteredEnum | string): ListImagesRequest {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: ListImagesRequestIsregisteredEnum | string  | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered(): ListImagesRequestIsregisteredEnum | string | undefined {
        return this['__isregistered'];
    }
    public withOsBit(osBit: ListImagesRequestOsBitEnum | string): ListImagesRequest {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: ListImagesRequestOsBitEnum | string  | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit(): ListImagesRequestOsBitEnum | string | undefined {
        return this['__os_bit'];
    }
    public withOsType(osType: ListImagesRequestOsTypeEnum | string): ListImagesRequest {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: ListImagesRequestOsTypeEnum | string  | undefined) {
        this['__os_type'] = osType;
    }
    public get osType(): ListImagesRequestOsTypeEnum | string | undefined {
        return this['__os_type'];
    }
    public withPlatform(platform: ListImagesRequestPlatformEnum | string): ListImagesRequest {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: ListImagesRequestPlatformEnum | string  | undefined) {
        this['__platform'] = platform;
    }
    public get platform(): ListImagesRequestPlatformEnum | string | undefined {
        return this['__platform'];
    }
    public withSupportDiskintensive(supportDiskintensive: string): ListImagesRequest {
        this['__support_diskintensive'] = supportDiskintensive;
        return this;
    }
    public set supportDiskintensive(supportDiskintensive: string  | undefined) {
        this['__support_diskintensive'] = supportDiskintensive;
    }
    public get supportDiskintensive(): string | undefined {
        return this['__support_diskintensive'];
    }
    public withSupportHighperformance(supportHighperformance: string): ListImagesRequest {
        this['__support_highperformance'] = supportHighperformance;
        return this;
    }
    public set supportHighperformance(supportHighperformance: string  | undefined) {
        this['__support_highperformance'] = supportHighperformance;
    }
    public get supportHighperformance(): string | undefined {
        return this['__support_highperformance'];
    }
    public withSupportKvm(supportKvm: string): ListImagesRequest {
        this['__support_kvm'] = supportKvm;
        return this;
    }
    public set supportKvm(supportKvm: string  | undefined) {
        this['__support_kvm'] = supportKvm;
    }
    public get supportKvm(): string | undefined {
        return this['__support_kvm'];
    }
    public withSupportKvmGpuType(supportKvmGpuType: string): ListImagesRequest {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
        return this;
    }
    public set supportKvmGpuType(supportKvmGpuType: string  | undefined) {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
    }
    public get supportKvmGpuType(): string | undefined {
        return this['__support_kvm_gpu_type'];
    }
    public withSupportKvmInfiniband(supportKvmInfiniband: string): ListImagesRequest {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
        return this;
    }
    public set supportKvmInfiniband(supportKvmInfiniband: string  | undefined) {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
    }
    public get supportKvmInfiniband(): string | undefined {
        return this['__support_kvm_infiniband'];
    }
    public withSupportLargememory(supportLargememory: string): ListImagesRequest {
        this['__support_largememory'] = supportLargememory;
        return this;
    }
    public set supportLargememory(supportLargememory: string  | undefined) {
        this['__support_largememory'] = supportLargememory;
    }
    public get supportLargememory(): string | undefined {
        return this['__support_largememory'];
    }
    public withSupportXen(supportXen: string): ListImagesRequest {
        this['__support_xen'] = supportXen;
        return this;
    }
    public set supportXen(supportXen: string  | undefined) {
        this['__support_xen'] = supportXen;
    }
    public get supportXen(): string | undefined {
        return this['__support_xen'];
    }
    public withSupportXenGpuType(supportXenGpuType: string): ListImagesRequest {
        this['__support_xen_gpu_type'] = supportXenGpuType;
        return this;
    }
    public set supportXenGpuType(supportXenGpuType: string  | undefined) {
        this['__support_xen_gpu_type'] = supportXenGpuType;
    }
    public get supportXenGpuType(): string | undefined {
        return this['__support_xen_gpu_type'];
    }
    public withSupportXenHana(supportXenHana: string): ListImagesRequest {
        this['__support_xen_hana'] = supportXenHana;
        return this;
    }
    public set supportXenHana(supportXenHana: string  | undefined) {
        this['__support_xen_hana'] = supportXenHana;
    }
    public get supportXenHana(): string | undefined {
        return this['__support_xen_hana'];
    }
    public withContainerFormat(containerFormat: string): ListImagesRequest {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string  | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat(): string | undefined {
        return this['container_format'];
    }
    public withDiskFormat(diskFormat: ListImagesRequestDiskFormatEnum | string): ListImagesRequest {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: ListImagesRequestDiskFormatEnum | string  | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat(): ListImagesRequestDiskFormatEnum | string | undefined {
        return this['disk_format'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImagesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): ListImagesRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListImagesRequest {
        this['marker'] = marker;
        return this;
    }
    public withMemberStatus(memberStatus: ListImagesRequestMemberStatusEnum | string): ListImagesRequest {
        this['member_status'] = memberStatus;
        return this;
    }
    public set memberStatus(memberStatus: ListImagesRequestMemberStatusEnum | string  | undefined) {
        this['member_status'] = memberStatus;
    }
    public get memberStatus(): ListImagesRequestMemberStatusEnum | string | undefined {
        return this['member_status'];
    }
    public withMinDisk(minDisk: number): ListImagesRequest {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): ListImagesRequest {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withName(name: string): ListImagesRequest {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): ListImagesRequest {
        this['owner'] = owner;
        return this;
    }
    public withProtected(_protected: boolean): ListImagesRequest {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
    public withSortDir(sortDir: ListImagesRequestSortDirEnum | string): ListImagesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListImagesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListImagesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: ListImagesRequestSortKeyEnum | string): ListImagesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListImagesRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListImagesRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: ListImagesRequestStatusEnum | string): ListImagesRequest {
        this['status'] = status;
        return this;
    }
    public withTag(tag: string): ListImagesRequest {
        this['tag'] = tag;
        return this;
    }
    public withVirtualEnvType(virtualEnvType: ListImagesRequestVirtualEnvTypeEnum | string): ListImagesRequest {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: ListImagesRequestVirtualEnvTypeEnum | string  | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType(): ListImagesRequestVirtualEnvTypeEnum | string | undefined {
        return this['virtual_env_type'];
    }
    public withVisibility(visibility: ListImagesRequestVisibilityEnum | string): ListImagesRequest {
        this['visibility'] = visibility;
        return this;
    }
    public withXSdkDate(xSdkDate: string): ListImagesRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withFlavorId(flavorId: string): ListImagesRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withCreatedAt(createdAt: string): ListImagesRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListImagesRequest {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withArchitecture(architecture: ListImagesRequestArchitectureEnum | string): ListImagesRequest {
        this['architecture'] = architecture;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared',
    MARKET = 'market'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestIsregisteredEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestPlatformEnum {
    WINDOWS = 'Windows',
    UBUNTU = 'Ubuntu',
    REDHAT = 'RedHat',
    SUSE = 'SUSE',
    CENTOS = 'CentOS',
    DEBIAN = 'Debian',
    OPENSUSE = 'OpenSUSE',
    ORACLE_LINUX = 'Oracle Linux',
    FEDORA = 'Fedora',
    OTHER = 'Other',
    COREOS = 'CoreOS',
    EULEROS = 'EulerOS',
    HUAWEI_CLOUD_EULEROS = 'Huawei Cloud EulerOS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestDiskFormatEnum {
    VHD = 'vhd',
    ZVHD = 'zvhd',
    RAW = 'raw',
    QCOW2 = 'qcow2',
    ZVHD2 = 'zvhd2'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestMemberStatusEnum {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    PENDING = 'pending'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestSortKeyEnum {
    CREATED_AT = 'created_at',
    NAME = 'name',
    CONTAINER_FORMAT = 'container_format',
    DISK_FORMAT = 'disk_format',
    STATUS = 'status ',
    ID = 'id',
    SIZE = 'size'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestStatusEnum {
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
export enum ListImagesRequestVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestVisibilityEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
/**
    * @export
    * @enum {string}
    */
export enum ListImagesRequestArchitectureEnum {
    X86 = 'x86',
    ARM = 'arm'
}
