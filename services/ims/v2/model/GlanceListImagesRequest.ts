

export class GlanceListImagesRequest {
    private '__imagetype'?: GlanceListImagesRequestImagetypeEnum | undefined;
    private '__isregistered'?: boolean | undefined;
    private '__os_bit'?: GlanceListImagesRequestOsBitEnum | undefined;
    private '__os_type'?: GlanceListImagesRequestOsTypeEnum | undefined;
    private '__platform'?: GlanceListImagesRequestPlatformEnum | undefined;
    private '__support_diskintensive'?: string | undefined;
    private '__support_highperformance'?: string | undefined;
    private '__support_kvm'?: string | undefined;
    private '__support_kvm_gpu_type'?: string | undefined;
    private '__support_kvm_infiniband'?: string | undefined;
    private '__support_largememory'?: string | undefined;
    private '__support_xen'?: string | undefined;
    private '__support_xen_gpu_type'?: string | undefined;
    private '__support_xen_hana'?: string | undefined;
    private 'container_format'?: string | undefined;
    private 'disk_format'?: GlanceListImagesRequestDiskFormatEnum | undefined;
    public id?: string;
    public limit?: number;
    public marker?: string;
    private 'member_status'?: string | undefined;
    private 'min_disk'?: number | undefined;
    private 'min_ram'?: number | undefined;
    public name?: string;
    public owner?: string;
    private 'protected'?: boolean | undefined;
    private 'sort_dir'?: string | undefined;
    private 'sort_key'?: string | undefined;
    public status?: GlanceListImagesRequestStatusEnum;
    public tag?: string;
    public visibility?: GlanceListImagesRequestVisibilityEnum;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
    }
    public withImagetype(imagetype: GlanceListImagesRequestImagetypeEnum): GlanceListImagesRequest {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: GlanceListImagesRequestImagetypeEnum | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype() {
        return this['__imagetype'];
    }
    public withIsregistered(isregistered: boolean): GlanceListImagesRequest {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: boolean | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered() {
        return this['__isregistered'];
    }
    public withOsBit(osBit: GlanceListImagesRequestOsBitEnum): GlanceListImagesRequest {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: GlanceListImagesRequestOsBitEnum | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit() {
        return this['__os_bit'];
    }
    public withOsType(osType: GlanceListImagesRequestOsTypeEnum): GlanceListImagesRequest {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: GlanceListImagesRequestOsTypeEnum | undefined) {
        this['__os_type'] = osType;
    }
    public get osType() {
        return this['__os_type'];
    }
    public withPlatform(platform: GlanceListImagesRequestPlatformEnum): GlanceListImagesRequest {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: GlanceListImagesRequestPlatformEnum | undefined) {
        this['__platform'] = platform;
    }
    public get platform() {
        return this['__platform'];
    }
    public withSupportDiskintensive(supportDiskintensive: string): GlanceListImagesRequest {
        this['__support_diskintensive'] = supportDiskintensive;
        return this;
    }
    public set supportDiskintensive(supportDiskintensive: string | undefined) {
        this['__support_diskintensive'] = supportDiskintensive;
    }
    public get supportDiskintensive() {
        return this['__support_diskintensive'];
    }
    public withSupportHighperformance(supportHighperformance: string): GlanceListImagesRequest {
        this['__support_highperformance'] = supportHighperformance;
        return this;
    }
    public set supportHighperformance(supportHighperformance: string | undefined) {
        this['__support_highperformance'] = supportHighperformance;
    }
    public get supportHighperformance() {
        return this['__support_highperformance'];
    }
    public withSupportKvm(supportKvm: string): GlanceListImagesRequest {
        this['__support_kvm'] = supportKvm;
        return this;
    }
    public set supportKvm(supportKvm: string | undefined) {
        this['__support_kvm'] = supportKvm;
    }
    public get supportKvm() {
        return this['__support_kvm'];
    }
    public withSupportKvmGpuType(supportKvmGpuType: string): GlanceListImagesRequest {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
        return this;
    }
    public set supportKvmGpuType(supportKvmGpuType: string | undefined) {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
    }
    public get supportKvmGpuType() {
        return this['__support_kvm_gpu_type'];
    }
    public withSupportKvmInfiniband(supportKvmInfiniband: string): GlanceListImagesRequest {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
        return this;
    }
    public set supportKvmInfiniband(supportKvmInfiniband: string | undefined) {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
    }
    public get supportKvmInfiniband() {
        return this['__support_kvm_infiniband'];
    }
    public withSupportLargememory(supportLargememory: string): GlanceListImagesRequest {
        this['__support_largememory'] = supportLargememory;
        return this;
    }
    public set supportLargememory(supportLargememory: string | undefined) {
        this['__support_largememory'] = supportLargememory;
    }
    public get supportLargememory() {
        return this['__support_largememory'];
    }
    public withSupportXen(supportXen: string): GlanceListImagesRequest {
        this['__support_xen'] = supportXen;
        return this;
    }
    public set supportXen(supportXen: string | undefined) {
        this['__support_xen'] = supportXen;
    }
    public get supportXen() {
        return this['__support_xen'];
    }
    public withSupportXenGpuType(supportXenGpuType: string): GlanceListImagesRequest {
        this['__support_xen_gpu_type'] = supportXenGpuType;
        return this;
    }
    public set supportXenGpuType(supportXenGpuType: string | undefined) {
        this['__support_xen_gpu_type'] = supportXenGpuType;
    }
    public get supportXenGpuType() {
        return this['__support_xen_gpu_type'];
    }
    public withSupportXenHana(supportXenHana: string): GlanceListImagesRequest {
        this['__support_xen_hana'] = supportXenHana;
        return this;
    }
    public set supportXenHana(supportXenHana: string | undefined) {
        this['__support_xen_hana'] = supportXenHana;
    }
    public get supportXenHana() {
        return this['__support_xen_hana'];
    }
    public withContainerFormat(containerFormat: string): GlanceListImagesRequest {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withDiskFormat(diskFormat: GlanceListImagesRequestDiskFormatEnum): GlanceListImagesRequest {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: GlanceListImagesRequestDiskFormatEnum | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withId(id: string): GlanceListImagesRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): GlanceListImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): GlanceListImagesRequest {
        this['marker'] = marker;
        return this;
    }
    public withMemberStatus(memberStatus: string): GlanceListImagesRequest {
        this['member_status'] = memberStatus;
        return this;
    }
    public set memberStatus(memberStatus: string | undefined) {
        this['member_status'] = memberStatus;
    }
    public get memberStatus() {
        return this['member_status'];
    }
    public withMinDisk(minDisk: number): GlanceListImagesRequest {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): GlanceListImagesRequest {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam() {
        return this['min_ram'];
    }
    public withName(name: string): GlanceListImagesRequest {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): GlanceListImagesRequest {
        this['owner'] = owner;
        return this;
    }
    public withProtected(_protected: boolean): GlanceListImagesRequest {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean | undefined) {
        this['protected'] = _protected;
    }
    public get _protected() {
        return this['protected'];
    }
    public withSortDir(sortDir: string): GlanceListImagesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): GlanceListImagesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withStatus(status: GlanceListImagesRequestStatusEnum): GlanceListImagesRequest {
        this['status'] = status;
        return this;
    }
    public withTag(tag: string): GlanceListImagesRequest {
        this['tag'] = tag;
        return this;
    }
    public withVisibility(visibility: GlanceListImagesRequestVisibilityEnum): GlanceListImagesRequest {
        this['visibility'] = visibility;
        return this;
    }
    public withCreatedAt(createdAt: string): GlanceListImagesRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GlanceListImagesRequest {
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
export enum GlanceListImagesRequestImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared',
    MARKET = 'market'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceListImagesRequestOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceListImagesRequestOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceListImagesRequestPlatformEnum {
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
    EULEROS = 'EulerOS'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceListImagesRequestDiskFormatEnum {
    VHD = 'vhd',
    ZVHD = 'zvhd',
    RAW = 'raw',
    QCOW2 = 'qcow2'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceListImagesRequestStatusEnum {
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
export enum GlanceListImagesRequestVisibilityEnum {
    PUBLIC = 'public',
    PRIVATE = 'private',
    SHARED = 'shared'
}
