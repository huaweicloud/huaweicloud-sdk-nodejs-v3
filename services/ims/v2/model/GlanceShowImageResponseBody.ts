

export class GlanceShowImageResponseBody {
    private '__backup_id'?: string;
    private '__data_origin'?: string;
    private '__description'?: string;
    private '__image_size'?: string;
    private '__image_source_type'?: GlanceShowImageResponseBodyImageSourceTypeEnum | string;
    private '__imagetype'?: GlanceShowImageResponseBodyImagetypeEnum | string;
    private '__isregistered'?: GlanceShowImageResponseBodyIsregisteredEnum | string;
    private '__originalimagename'?: string;
    private '__os_bit'?: GlanceShowImageResponseBodyOsBitEnum | string;
    private '__os_type'?: GlanceShowImageResponseBodyOsTypeEnum | string;
    private '__os_version'?: string;
    private '__platform'?: GlanceShowImageResponseBodyPlatformEnum | string;
    private '__productcode'?: string;
    private '__support_diskintensive'?: string;
    private '__support_highperformance'?: string;
    private '__support_kvm'?: string;
    private '__support_kvm_gpu_type'?: string;
    private '__support_kvm_infiniband'?: string;
    private '__support_largememory'?: string;
    private '__support_xen'?: string;
    private '__support_xen_gpu_type'?: string;
    private '__support_xen_hana'?: string;
    public checksum?: string;
    private 'container_format'?: string;
    private 'created_at'?: string;
    private 'disk_format'?: GlanceShowImageResponseBodyDiskFormatEnum | string;
    public file?: string;
    public id?: string;
    private 'min_disk'?: number;
    private 'min_ram'?: number;
    public name?: string;
    public owner?: string;
    private 'protected'?: boolean;
    public schema?: string;
    public self?: string;
    public size?: number;
    public status?: GlanceShowImageResponseBodyStatusEnum | string;
    public tags?: Array<string>;
    private 'updated_at'?: string;
    private 'virtual_env_type'?: GlanceShowImageResponseBodyVirtualEnvTypeEnum | string;
    private 'virtual_size'?: number;
    public visibility?: GlanceShowImageResponseBodyVisibilityEnum | string;
    private '__support_fc_inject'?: GlanceShowImageResponseBodySupportFcInjectEnum | string;
    private 'enterprise_project_id'?: string;
    private 'hw_firmware_type'?: GlanceShowImageResponseBodyHwFirmwareTypeEnum | string;
    private '__support_arm'?: GlanceShowImageResponseBodySupportArmEnum | string;
    private '__is_offshelved'?: GlanceShowImageResponseBodyIsOffshelvedEnum | string;
    private '__lazyloading'?: string;
    private '__os_feature_list'?: string;
    private '__root_origin'?: string;
    private '__sequence_num'?: string;
    private '__support_agent_list'?: string;
    private '__system__cmkid'?: string;
    private 'active_at'?: string;
    private 'hw_vif_multiqueue_enabled'?: string;
    private 'max_ram'?: string;
    private '__image_location'?: string;
    private '__is_config_init'?: string;
    private '__account_code'?: string;
    private '__support_amd'?: string;
    public constructor(imageSize?: string, imageSourceType?: string, imagetype?: string, isregistered?: string, osType?: string, containerFormat?: string, createdAt?: string, diskFormat?: string, file?: string, id?: string, minDisk?: number, minRam?: number, name?: string, owner?: string, _protected?: boolean, schema?: string, self?: string, status?: string, tags?: Array<string>, updatedAt?: string, virtualEnvType?: string, visibility?: string) { 
        this['__image_size'] = imageSize;
        this['__image_source_type'] = imageSourceType;
        this['__imagetype'] = imagetype;
        this['__isregistered'] = isregistered;
        this['__os_type'] = osType;
        this['container_format'] = containerFormat;
        this['created_at'] = createdAt;
        this['disk_format'] = diskFormat;
        this['file'] = file;
        this['id'] = id;
        this['min_disk'] = minDisk;
        this['min_ram'] = minRam;
        this['name'] = name;
        this['owner'] = owner;
        this['protected'] = _protected;
        this['schema'] = schema;
        this['self'] = self;
        this['status'] = status;
        this['tags'] = tags;
        this['updated_at'] = updatedAt;
        this['virtual_env_type'] = virtualEnvType;
        this['visibility'] = visibility;
    }
    public withBackupId(backupId: string): GlanceShowImageResponseBody {
        this['__backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['__backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['__backup_id'];
    }
    public withDataOrigin(dataOrigin: string): GlanceShowImageResponseBody {
        this['__data_origin'] = dataOrigin;
        return this;
    }
    public set dataOrigin(dataOrigin: string  | undefined) {
        this['__data_origin'] = dataOrigin;
    }
    public get dataOrigin(): string | undefined {
        return this['__data_origin'];
    }
    public withDescription(description: string): GlanceShowImageResponseBody {
        this['__description'] = description;
        return this;
    }
    public set description(description: string  | undefined) {
        this['__description'] = description;
    }
    public get description(): string | undefined {
        return this['__description'];
    }
    public withImageSize(imageSize: string): GlanceShowImageResponseBody {
        this['__image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string  | undefined) {
        this['__image_size'] = imageSize;
    }
    public get imageSize(): string | undefined {
        return this['__image_size'];
    }
    public withImageSourceType(imageSourceType: GlanceShowImageResponseBodyImageSourceTypeEnum | string): GlanceShowImageResponseBody {
        this['__image_source_type'] = imageSourceType;
        return this;
    }
    public set imageSourceType(imageSourceType: GlanceShowImageResponseBodyImageSourceTypeEnum | string  | undefined) {
        this['__image_source_type'] = imageSourceType;
    }
    public get imageSourceType(): GlanceShowImageResponseBodyImageSourceTypeEnum | string | undefined {
        return this['__image_source_type'];
    }
    public withImagetype(imagetype: GlanceShowImageResponseBodyImagetypeEnum | string): GlanceShowImageResponseBody {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: GlanceShowImageResponseBodyImagetypeEnum | string  | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype(): GlanceShowImageResponseBodyImagetypeEnum | string | undefined {
        return this['__imagetype'];
    }
    public withIsregistered(isregistered: GlanceShowImageResponseBodyIsregisteredEnum | string): GlanceShowImageResponseBody {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: GlanceShowImageResponseBodyIsregisteredEnum | string  | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered(): GlanceShowImageResponseBodyIsregisteredEnum | string | undefined {
        return this['__isregistered'];
    }
    public withOriginalimagename(originalimagename: string): GlanceShowImageResponseBody {
        this['__originalimagename'] = originalimagename;
        return this;
    }
    public set originalimagename(originalimagename: string  | undefined) {
        this['__originalimagename'] = originalimagename;
    }
    public get originalimagename(): string | undefined {
        return this['__originalimagename'];
    }
    public withOsBit(osBit: GlanceShowImageResponseBodyOsBitEnum | string): GlanceShowImageResponseBody {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: GlanceShowImageResponseBodyOsBitEnum | string  | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit(): GlanceShowImageResponseBodyOsBitEnum | string | undefined {
        return this['__os_bit'];
    }
    public withOsType(osType: GlanceShowImageResponseBodyOsTypeEnum | string): GlanceShowImageResponseBody {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: GlanceShowImageResponseBodyOsTypeEnum | string  | undefined) {
        this['__os_type'] = osType;
    }
    public get osType(): GlanceShowImageResponseBodyOsTypeEnum | string | undefined {
        return this['__os_type'];
    }
    public withOsVersion(osVersion: string): GlanceShowImageResponseBody {
        this['__os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['__os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['__os_version'];
    }
    public withPlatform(platform: GlanceShowImageResponseBodyPlatformEnum | string): GlanceShowImageResponseBody {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: GlanceShowImageResponseBodyPlatformEnum | string  | undefined) {
        this['__platform'] = platform;
    }
    public get platform(): GlanceShowImageResponseBodyPlatformEnum | string | undefined {
        return this['__platform'];
    }
    public withProductcode(productcode: string): GlanceShowImageResponseBody {
        this['__productcode'] = productcode;
        return this;
    }
    public set productcode(productcode: string  | undefined) {
        this['__productcode'] = productcode;
    }
    public get productcode(): string | undefined {
        return this['__productcode'];
    }
    public withSupportDiskintensive(supportDiskintensive: string): GlanceShowImageResponseBody {
        this['__support_diskintensive'] = supportDiskintensive;
        return this;
    }
    public set supportDiskintensive(supportDiskintensive: string  | undefined) {
        this['__support_diskintensive'] = supportDiskintensive;
    }
    public get supportDiskintensive(): string | undefined {
        return this['__support_diskintensive'];
    }
    public withSupportHighperformance(supportHighperformance: string): GlanceShowImageResponseBody {
        this['__support_highperformance'] = supportHighperformance;
        return this;
    }
    public set supportHighperformance(supportHighperformance: string  | undefined) {
        this['__support_highperformance'] = supportHighperformance;
    }
    public get supportHighperformance(): string | undefined {
        return this['__support_highperformance'];
    }
    public withSupportKvm(supportKvm: string): GlanceShowImageResponseBody {
        this['__support_kvm'] = supportKvm;
        return this;
    }
    public set supportKvm(supportKvm: string  | undefined) {
        this['__support_kvm'] = supportKvm;
    }
    public get supportKvm(): string | undefined {
        return this['__support_kvm'];
    }
    public withSupportKvmGpuType(supportKvmGpuType: string): GlanceShowImageResponseBody {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
        return this;
    }
    public set supportKvmGpuType(supportKvmGpuType: string  | undefined) {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
    }
    public get supportKvmGpuType(): string | undefined {
        return this['__support_kvm_gpu_type'];
    }
    public withSupportKvmInfiniband(supportKvmInfiniband: string): GlanceShowImageResponseBody {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
        return this;
    }
    public set supportKvmInfiniband(supportKvmInfiniband: string  | undefined) {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
    }
    public get supportKvmInfiniband(): string | undefined {
        return this['__support_kvm_infiniband'];
    }
    public withSupportLargememory(supportLargememory: string): GlanceShowImageResponseBody {
        this['__support_largememory'] = supportLargememory;
        return this;
    }
    public set supportLargememory(supportLargememory: string  | undefined) {
        this['__support_largememory'] = supportLargememory;
    }
    public get supportLargememory(): string | undefined {
        return this['__support_largememory'];
    }
    public withSupportXen(supportXen: string): GlanceShowImageResponseBody {
        this['__support_xen'] = supportXen;
        return this;
    }
    public set supportXen(supportXen: string  | undefined) {
        this['__support_xen'] = supportXen;
    }
    public get supportXen(): string | undefined {
        return this['__support_xen'];
    }
    public withSupportXenGpuType(supportXenGpuType: string): GlanceShowImageResponseBody {
        this['__support_xen_gpu_type'] = supportXenGpuType;
        return this;
    }
    public set supportXenGpuType(supportXenGpuType: string  | undefined) {
        this['__support_xen_gpu_type'] = supportXenGpuType;
    }
    public get supportXenGpuType(): string | undefined {
        return this['__support_xen_gpu_type'];
    }
    public withSupportXenHana(supportXenHana: string): GlanceShowImageResponseBody {
        this['__support_xen_hana'] = supportXenHana;
        return this;
    }
    public set supportXenHana(supportXenHana: string  | undefined) {
        this['__support_xen_hana'] = supportXenHana;
    }
    public get supportXenHana(): string | undefined {
        return this['__support_xen_hana'];
    }
    public withChecksum(checksum: string): GlanceShowImageResponseBody {
        this['checksum'] = checksum;
        return this;
    }
    public withContainerFormat(containerFormat: string): GlanceShowImageResponseBody {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string  | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat(): string | undefined {
        return this['container_format'];
    }
    public withCreatedAt(createdAt: string): GlanceShowImageResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDiskFormat(diskFormat: GlanceShowImageResponseBodyDiskFormatEnum | string): GlanceShowImageResponseBody {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: GlanceShowImageResponseBodyDiskFormatEnum | string  | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat(): GlanceShowImageResponseBodyDiskFormatEnum | string | undefined {
        return this['disk_format'];
    }
    public withFile(file: string): GlanceShowImageResponseBody {
        this['file'] = file;
        return this;
    }
    public withId(id: string): GlanceShowImageResponseBody {
        this['id'] = id;
        return this;
    }
    public withMinDisk(minDisk: number): GlanceShowImageResponseBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): GlanceShowImageResponseBody {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withName(name: string): GlanceShowImageResponseBody {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): GlanceShowImageResponseBody {
        this['owner'] = owner;
        return this;
    }
    public withProtected(_protected: boolean): GlanceShowImageResponseBody {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
    public withSchema(schema: string): GlanceShowImageResponseBody {
        this['schema'] = schema;
        return this;
    }
    public withSelf(self: string): GlanceShowImageResponseBody {
        this['self'] = self;
        return this;
    }
    public withSize(size: number): GlanceShowImageResponseBody {
        this['size'] = size;
        return this;
    }
    public withStatus(status: GlanceShowImageResponseBodyStatusEnum | string): GlanceShowImageResponseBody {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<string>): GlanceShowImageResponseBody {
        this['tags'] = tags;
        return this;
    }
    public withUpdatedAt(updatedAt: string): GlanceShowImageResponseBody {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVirtualEnvType(virtualEnvType: GlanceShowImageResponseBodyVirtualEnvTypeEnum | string): GlanceShowImageResponseBody {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: GlanceShowImageResponseBodyVirtualEnvTypeEnum | string  | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType(): GlanceShowImageResponseBodyVirtualEnvTypeEnum | string | undefined {
        return this['virtual_env_type'];
    }
    public withVirtualSize(virtualSize: number): GlanceShowImageResponseBody {
        this['virtual_size'] = virtualSize;
        return this;
    }
    public set virtualSize(virtualSize: number  | undefined) {
        this['virtual_size'] = virtualSize;
    }
    public get virtualSize(): number | undefined {
        return this['virtual_size'];
    }
    public withVisibility(visibility: GlanceShowImageResponseBodyVisibilityEnum | string): GlanceShowImageResponseBody {
        this['visibility'] = visibility;
        return this;
    }
    public withSupportFcInject(supportFcInject: GlanceShowImageResponseBodySupportFcInjectEnum | string): GlanceShowImageResponseBody {
        this['__support_fc_inject'] = supportFcInject;
        return this;
    }
    public set supportFcInject(supportFcInject: GlanceShowImageResponseBodySupportFcInjectEnum | string  | undefined) {
        this['__support_fc_inject'] = supportFcInject;
    }
    public get supportFcInject(): GlanceShowImageResponseBodySupportFcInjectEnum | string | undefined {
        return this['__support_fc_inject'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GlanceShowImageResponseBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHwFirmwareType(hwFirmwareType: GlanceShowImageResponseBodyHwFirmwareTypeEnum | string): GlanceShowImageResponseBody {
        this['hw_firmware_type'] = hwFirmwareType;
        return this;
    }
    public set hwFirmwareType(hwFirmwareType: GlanceShowImageResponseBodyHwFirmwareTypeEnum | string  | undefined) {
        this['hw_firmware_type'] = hwFirmwareType;
    }
    public get hwFirmwareType(): GlanceShowImageResponseBodyHwFirmwareTypeEnum | string | undefined {
        return this['hw_firmware_type'];
    }
    public withSupportArm(supportArm: GlanceShowImageResponseBodySupportArmEnum | string): GlanceShowImageResponseBody {
        this['__support_arm'] = supportArm;
        return this;
    }
    public set supportArm(supportArm: GlanceShowImageResponseBodySupportArmEnum | string  | undefined) {
        this['__support_arm'] = supportArm;
    }
    public get supportArm(): GlanceShowImageResponseBodySupportArmEnum | string | undefined {
        return this['__support_arm'];
    }
    public withIsOffshelved(isOffshelved: GlanceShowImageResponseBodyIsOffshelvedEnum | string): GlanceShowImageResponseBody {
        this['__is_offshelved'] = isOffshelved;
        return this;
    }
    public set isOffshelved(isOffshelved: GlanceShowImageResponseBodyIsOffshelvedEnum | string  | undefined) {
        this['__is_offshelved'] = isOffshelved;
    }
    public get isOffshelved(): GlanceShowImageResponseBodyIsOffshelvedEnum | string | undefined {
        return this['__is_offshelved'];
    }
    public withLazyloading(lazyloading: string): GlanceShowImageResponseBody {
        this['__lazyloading'] = lazyloading;
        return this;
    }
    public set lazyloading(lazyloading: string  | undefined) {
        this['__lazyloading'] = lazyloading;
    }
    public get lazyloading(): string | undefined {
        return this['__lazyloading'];
    }
    public withOsFeatureList(osFeatureList: string): GlanceShowImageResponseBody {
        this['__os_feature_list'] = osFeatureList;
        return this;
    }
    public set osFeatureList(osFeatureList: string  | undefined) {
        this['__os_feature_list'] = osFeatureList;
    }
    public get osFeatureList(): string | undefined {
        return this['__os_feature_list'];
    }
    public withRootOrigin(rootOrigin: string): GlanceShowImageResponseBody {
        this['__root_origin'] = rootOrigin;
        return this;
    }
    public set rootOrigin(rootOrigin: string  | undefined) {
        this['__root_origin'] = rootOrigin;
    }
    public get rootOrigin(): string | undefined {
        return this['__root_origin'];
    }
    public withSequenceNum(sequenceNum: string): GlanceShowImageResponseBody {
        this['__sequence_num'] = sequenceNum;
        return this;
    }
    public set sequenceNum(sequenceNum: string  | undefined) {
        this['__sequence_num'] = sequenceNum;
    }
    public get sequenceNum(): string | undefined {
        return this['__sequence_num'];
    }
    public withSupportAgentList(supportAgentList: string): GlanceShowImageResponseBody {
        this['__support_agent_list'] = supportAgentList;
        return this;
    }
    public set supportAgentList(supportAgentList: string  | undefined) {
        this['__support_agent_list'] = supportAgentList;
    }
    public get supportAgentList(): string | undefined {
        return this['__support_agent_list'];
    }
    public withSystemCmkid(systemCmkid: string): GlanceShowImageResponseBody {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string  | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid(): string | undefined {
        return this['__system__cmkid'];
    }
    public withActiveAt(activeAt: string): GlanceShowImageResponseBody {
        this['active_at'] = activeAt;
        return this;
    }
    public set activeAt(activeAt: string  | undefined) {
        this['active_at'] = activeAt;
    }
    public get activeAt(): string | undefined {
        return this['active_at'];
    }
    public withHwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string): GlanceShowImageResponseBody {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
        return this;
    }
    public set hwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string  | undefined) {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
    }
    public get hwVifMultiqueueEnabled(): string | undefined {
        return this['hw_vif_multiqueue_enabled'];
    }
    public withMaxRam(maxRam: string): GlanceShowImageResponseBody {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: string  | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam(): string | undefined {
        return this['max_ram'];
    }
    public withImageLocation(imageLocation: string): GlanceShowImageResponseBody {
        this['__image_location'] = imageLocation;
        return this;
    }
    public set imageLocation(imageLocation: string  | undefined) {
        this['__image_location'] = imageLocation;
    }
    public get imageLocation(): string | undefined {
        return this['__image_location'];
    }
    public withIsConfigInit(isConfigInit: string): GlanceShowImageResponseBody {
        this['__is_config_init'] = isConfigInit;
        return this;
    }
    public set isConfigInit(isConfigInit: string  | undefined) {
        this['__is_config_init'] = isConfigInit;
    }
    public get isConfigInit(): string | undefined {
        return this['__is_config_init'];
    }
    public withAccountCode(accountCode: string): GlanceShowImageResponseBody {
        this['__account_code'] = accountCode;
        return this;
    }
    public set accountCode(accountCode: string  | undefined) {
        this['__account_code'] = accountCode;
    }
    public get accountCode(): string | undefined {
        return this['__account_code'];
    }
    public withSupportAmd(supportAmd: string): GlanceShowImageResponseBody {
        this['__support_amd'] = supportAmd;
        return this;
    }
    public set supportAmd(supportAmd: string  | undefined) {
        this['__support_amd'] = supportAmd;
    }
    public get supportAmd(): string | undefined {
        return this['__support_amd'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyImageSourceTypeEnum {
    UDS = 'uds',
    SWIFT = 'swift'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared',
    MARKET = 'market'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyIsregisteredEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyPlatformEnum {
    WINDOWS = 'Windows',
    UBUNTU = 'Ubuntu',
    REDHAT = 'RedHat',
    SUSE = 'SUSE',
    CENTOS = 'CentOS',
    DEBIAN = 'Debian',
    OPENSUSE = 'OpenSUSE',
    ORACLELINUX = 'OracleLinux',
    FEDORA = 'Fedora',
    OTHER = 'Other',
    COREOS = 'CoreOS',
    EULEROS = 'EulerOS'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyDiskFormatEnum {
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
export enum GlanceShowImageResponseBodyStatusEnum {
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
export enum GlanceShowImageResponseBodyVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyVisibilityEnum {
    PRIVATE = 'private',
    PUBLIC = 'public',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodySupportFcInjectEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyHwFirmwareTypeEnum {
    BIOS = 'bios',
    UEFI = 'uefi'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodySupportArmEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageResponseBodyIsOffshelvedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
