
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceUpdateImageResponse extends SdkResponse {
    private '__backup_id'?: string | undefined;
    private '__data_origin'?: string | undefined;
    private '__description'?: string | undefined;
    private '__image_size'?: string | undefined;
    private '__image_source_type'?: GlanceUpdateImageResponseImageSourceTypeEnum | undefined;
    private '__imagetype'?: GlanceUpdateImageResponseImagetypeEnum | undefined;
    private '__isregistered'?: GlanceUpdateImageResponseIsregisteredEnum | undefined;
    private '__originalimagename'?: string | undefined;
    private '__os_bit'?: GlanceUpdateImageResponseOsBitEnum | undefined;
    private '__os_type'?: GlanceUpdateImageResponseOsTypeEnum | undefined;
    private '__os_version'?: string | undefined;
    private '__platform'?: GlanceUpdateImageResponsePlatformEnum | undefined;
    private '__productcode'?: string | undefined;
    private '__support_diskintensive'?: string | undefined;
    private '__support_highperformance'?: string | undefined;
    private '__support_kvm'?: string | undefined;
    private '__support_kvm_gpu_type'?: string | undefined;
    private '__support_kvm_infiniband'?: string | undefined;
    private '__support_largememory'?: string | undefined;
    private '__support_xen'?: string | undefined;
    private '__support_xen_gpu_type'?: string | undefined;
    private '__support_xen_hana'?: string | undefined;
    public checksum?: string;
    private 'container_format'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'disk_format'?: GlanceUpdateImageResponseDiskFormatEnum | undefined;
    public file?: string;
    public id?: string;
    private 'min_disk'?: number | undefined;
    private 'min_ram'?: number | undefined;
    public name?: string;
    public owner?: string;
    private 'protected'?: boolean | undefined;
    public schema?: string;
    public self?: string;
    public size?: number;
    public status?: GlanceUpdateImageResponseStatusEnum;
    public tags?: Array<string>;
    private 'updated_at'?: string | undefined;
    private 'virtual_env_type'?: GlanceUpdateImageResponseVirtualEnvTypeEnum | undefined;
    private 'virtual_size'?: number | undefined;
    public visibility?: GlanceUpdateImageResponseVisibilityEnum;
    private '__support_fc_inject'?: GlanceUpdateImageResponseSupportFcInjectEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'hw_firmware_type'?: GlanceUpdateImageResponseHwFirmwareTypeEnum | undefined;
    private '__support_arm'?: GlanceUpdateImageResponseSupportArmEnum | undefined;
    private '__is_offshelved'?: GlanceUpdateImageResponseIsOffshelvedEnum | undefined;
    private '__lazyloading'?: boolean | undefined;
    private '__os_feature_list'?: string | undefined;
    private '__root_origin'?: string | undefined;
    private '__sequence_num'?: string | undefined;
    private '__support_agent_list'?: string | undefined;
    private '__system__cmkid'?: string | undefined;
    private 'active_at'?: string | undefined;
    private 'hw_vif_multiqueue_enabled'?: string | undefined;
    private 'max_ram'?: string | undefined;
    private '__image_location'?: string | undefined;
    private '__is_config_init'?: string | undefined;
    private '__account_code'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBackupId(backupId: string): GlanceUpdateImageResponse {
        this['__backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['__backup_id'] = backupId;
    }
    public get backupId() {
        return this['__backup_id'];
    }
    public withDataOrigin(dataOrigin: string): GlanceUpdateImageResponse {
        this['__data_origin'] = dataOrigin;
        return this;
    }
    public set dataOrigin(dataOrigin: string | undefined) {
        this['__data_origin'] = dataOrigin;
    }
    public get dataOrigin() {
        return this['__data_origin'];
    }
    public withDescription(description: string): GlanceUpdateImageResponse {
        this['__description'] = description;
        return this;
    }
    public set description(description: string | undefined) {
        this['__description'] = description;
    }
    public get description() {
        return this['__description'];
    }
    public withImageSize(imageSize: string): GlanceUpdateImageResponse {
        this['__image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string | undefined) {
        this['__image_size'] = imageSize;
    }
    public get imageSize() {
        return this['__image_size'];
    }
    public withImageSourceType(imageSourceType: GlanceUpdateImageResponseImageSourceTypeEnum): GlanceUpdateImageResponse {
        this['__image_source_type'] = imageSourceType;
        return this;
    }
    public set imageSourceType(imageSourceType: GlanceUpdateImageResponseImageSourceTypeEnum | undefined) {
        this['__image_source_type'] = imageSourceType;
    }
    public get imageSourceType() {
        return this['__image_source_type'];
    }
    public withImagetype(imagetype: GlanceUpdateImageResponseImagetypeEnum): GlanceUpdateImageResponse {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: GlanceUpdateImageResponseImagetypeEnum | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype() {
        return this['__imagetype'];
    }
    public withIsregistered(isregistered: GlanceUpdateImageResponseIsregisteredEnum): GlanceUpdateImageResponse {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: GlanceUpdateImageResponseIsregisteredEnum | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered() {
        return this['__isregistered'];
    }
    public withOriginalimagename(originalimagename: string): GlanceUpdateImageResponse {
        this['__originalimagename'] = originalimagename;
        return this;
    }
    public set originalimagename(originalimagename: string | undefined) {
        this['__originalimagename'] = originalimagename;
    }
    public get originalimagename() {
        return this['__originalimagename'];
    }
    public withOsBit(osBit: GlanceUpdateImageResponseOsBitEnum): GlanceUpdateImageResponse {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: GlanceUpdateImageResponseOsBitEnum | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit() {
        return this['__os_bit'];
    }
    public withOsType(osType: GlanceUpdateImageResponseOsTypeEnum): GlanceUpdateImageResponse {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: GlanceUpdateImageResponseOsTypeEnum | undefined) {
        this['__os_type'] = osType;
    }
    public get osType() {
        return this['__os_type'];
    }
    public withOsVersion(osVersion: string): GlanceUpdateImageResponse {
        this['__os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['__os_version'] = osVersion;
    }
    public get osVersion() {
        return this['__os_version'];
    }
    public withPlatform(platform: GlanceUpdateImageResponsePlatformEnum): GlanceUpdateImageResponse {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: GlanceUpdateImageResponsePlatformEnum | undefined) {
        this['__platform'] = platform;
    }
    public get platform() {
        return this['__platform'];
    }
    public withProductcode(productcode: string): GlanceUpdateImageResponse {
        this['__productcode'] = productcode;
        return this;
    }
    public set productcode(productcode: string | undefined) {
        this['__productcode'] = productcode;
    }
    public get productcode() {
        return this['__productcode'];
    }
    public withSupportDiskintensive(supportDiskintensive: string): GlanceUpdateImageResponse {
        this['__support_diskintensive'] = supportDiskintensive;
        return this;
    }
    public set supportDiskintensive(supportDiskintensive: string | undefined) {
        this['__support_diskintensive'] = supportDiskintensive;
    }
    public get supportDiskintensive() {
        return this['__support_diskintensive'];
    }
    public withSupportHighperformance(supportHighperformance: string): GlanceUpdateImageResponse {
        this['__support_highperformance'] = supportHighperformance;
        return this;
    }
    public set supportHighperformance(supportHighperformance: string | undefined) {
        this['__support_highperformance'] = supportHighperformance;
    }
    public get supportHighperformance() {
        return this['__support_highperformance'];
    }
    public withSupportKvm(supportKvm: string): GlanceUpdateImageResponse {
        this['__support_kvm'] = supportKvm;
        return this;
    }
    public set supportKvm(supportKvm: string | undefined) {
        this['__support_kvm'] = supportKvm;
    }
    public get supportKvm() {
        return this['__support_kvm'];
    }
    public withSupportKvmGpuType(supportKvmGpuType: string): GlanceUpdateImageResponse {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
        return this;
    }
    public set supportKvmGpuType(supportKvmGpuType: string | undefined) {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
    }
    public get supportKvmGpuType() {
        return this['__support_kvm_gpu_type'];
    }
    public withSupportKvmInfiniband(supportKvmInfiniband: string): GlanceUpdateImageResponse {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
        return this;
    }
    public set supportKvmInfiniband(supportKvmInfiniband: string | undefined) {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
    }
    public get supportKvmInfiniband() {
        return this['__support_kvm_infiniband'];
    }
    public withSupportLargememory(supportLargememory: string): GlanceUpdateImageResponse {
        this['__support_largememory'] = supportLargememory;
        return this;
    }
    public set supportLargememory(supportLargememory: string | undefined) {
        this['__support_largememory'] = supportLargememory;
    }
    public get supportLargememory() {
        return this['__support_largememory'];
    }
    public withSupportXen(supportXen: string): GlanceUpdateImageResponse {
        this['__support_xen'] = supportXen;
        return this;
    }
    public set supportXen(supportXen: string | undefined) {
        this['__support_xen'] = supportXen;
    }
    public get supportXen() {
        return this['__support_xen'];
    }
    public withSupportXenGpuType(supportXenGpuType: string): GlanceUpdateImageResponse {
        this['__support_xen_gpu_type'] = supportXenGpuType;
        return this;
    }
    public set supportXenGpuType(supportXenGpuType: string | undefined) {
        this['__support_xen_gpu_type'] = supportXenGpuType;
    }
    public get supportXenGpuType() {
        return this['__support_xen_gpu_type'];
    }
    public withSupportXenHana(supportXenHana: string): GlanceUpdateImageResponse {
        this['__support_xen_hana'] = supportXenHana;
        return this;
    }
    public set supportXenHana(supportXenHana: string | undefined) {
        this['__support_xen_hana'] = supportXenHana;
    }
    public get supportXenHana() {
        return this['__support_xen_hana'];
    }
    public withChecksum(checksum: string): GlanceUpdateImageResponse {
        this['checksum'] = checksum;
        return this;
    }
    public withContainerFormat(containerFormat: string): GlanceUpdateImageResponse {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withCreatedAt(createdAt: string): GlanceUpdateImageResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withDiskFormat(diskFormat: GlanceUpdateImageResponseDiskFormatEnum): GlanceUpdateImageResponse {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: GlanceUpdateImageResponseDiskFormatEnum | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withFile(file: string): GlanceUpdateImageResponse {
        this['file'] = file;
        return this;
    }
    public withId(id: string): GlanceUpdateImageResponse {
        this['id'] = id;
        return this;
    }
    public withMinDisk(minDisk: number): GlanceUpdateImageResponse {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): GlanceUpdateImageResponse {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam() {
        return this['min_ram'];
    }
    public withName(name: string): GlanceUpdateImageResponse {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): GlanceUpdateImageResponse {
        this['owner'] = owner;
        return this;
    }
    public withProtected(_protected: boolean): GlanceUpdateImageResponse {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean | undefined) {
        this['protected'] = _protected;
    }
    public get _protected() {
        return this['protected'];
    }
    public withSchema(schema: string): GlanceUpdateImageResponse {
        this['schema'] = schema;
        return this;
    }
    public withSelf(self: string): GlanceUpdateImageResponse {
        this['self'] = self;
        return this;
    }
    public withSize(size: number): GlanceUpdateImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: GlanceUpdateImageResponseStatusEnum): GlanceUpdateImageResponse {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<string>): GlanceUpdateImageResponse {
        this['tags'] = tags;
        return this;
    }
    public withUpdatedAt(updatedAt: string): GlanceUpdateImageResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withVirtualEnvType(virtualEnvType: GlanceUpdateImageResponseVirtualEnvTypeEnum): GlanceUpdateImageResponse {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: GlanceUpdateImageResponseVirtualEnvTypeEnum | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType() {
        return this['virtual_env_type'];
    }
    public withVirtualSize(virtualSize: number): GlanceUpdateImageResponse {
        this['virtual_size'] = virtualSize;
        return this;
    }
    public set virtualSize(virtualSize: number | undefined) {
        this['virtual_size'] = virtualSize;
    }
    public get virtualSize() {
        return this['virtual_size'];
    }
    public withVisibility(visibility: GlanceUpdateImageResponseVisibilityEnum): GlanceUpdateImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withSupportFcInject(supportFcInject: GlanceUpdateImageResponseSupportFcInjectEnum): GlanceUpdateImageResponse {
        this['__support_fc_inject'] = supportFcInject;
        return this;
    }
    public set supportFcInject(supportFcInject: GlanceUpdateImageResponseSupportFcInjectEnum | undefined) {
        this['__support_fc_inject'] = supportFcInject;
    }
    public get supportFcInject() {
        return this['__support_fc_inject'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GlanceUpdateImageResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withHwFirmwareType(hwFirmwareType: GlanceUpdateImageResponseHwFirmwareTypeEnum): GlanceUpdateImageResponse {
        this['hw_firmware_type'] = hwFirmwareType;
        return this;
    }
    public set hwFirmwareType(hwFirmwareType: GlanceUpdateImageResponseHwFirmwareTypeEnum | undefined) {
        this['hw_firmware_type'] = hwFirmwareType;
    }
    public get hwFirmwareType() {
        return this['hw_firmware_type'];
    }
    public withSupportArm(supportArm: GlanceUpdateImageResponseSupportArmEnum): GlanceUpdateImageResponse {
        this['__support_arm'] = supportArm;
        return this;
    }
    public set supportArm(supportArm: GlanceUpdateImageResponseSupportArmEnum | undefined) {
        this['__support_arm'] = supportArm;
    }
    public get supportArm() {
        return this['__support_arm'];
    }
    public withIsOffshelved(isOffshelved: GlanceUpdateImageResponseIsOffshelvedEnum): GlanceUpdateImageResponse {
        this['__is_offshelved'] = isOffshelved;
        return this;
    }
    public set isOffshelved(isOffshelved: GlanceUpdateImageResponseIsOffshelvedEnum | undefined) {
        this['__is_offshelved'] = isOffshelved;
    }
    public get isOffshelved() {
        return this['__is_offshelved'];
    }
    public withLazyloading(lazyloading: boolean): GlanceUpdateImageResponse {
        this['__lazyloading'] = lazyloading;
        return this;
    }
    public set lazyloading(lazyloading: boolean | undefined) {
        this['__lazyloading'] = lazyloading;
    }
    public get lazyloading() {
        return this['__lazyloading'];
    }
    public withOsFeatureList(osFeatureList: string): GlanceUpdateImageResponse {
        this['__os_feature_list'] = osFeatureList;
        return this;
    }
    public set osFeatureList(osFeatureList: string | undefined) {
        this['__os_feature_list'] = osFeatureList;
    }
    public get osFeatureList() {
        return this['__os_feature_list'];
    }
    public withRootOrigin(rootOrigin: string): GlanceUpdateImageResponse {
        this['__root_origin'] = rootOrigin;
        return this;
    }
    public set rootOrigin(rootOrigin: string | undefined) {
        this['__root_origin'] = rootOrigin;
    }
    public get rootOrigin() {
        return this['__root_origin'];
    }
    public withSequenceNum(sequenceNum: string): GlanceUpdateImageResponse {
        this['__sequence_num'] = sequenceNum;
        return this;
    }
    public set sequenceNum(sequenceNum: string | undefined) {
        this['__sequence_num'] = sequenceNum;
    }
    public get sequenceNum() {
        return this['__sequence_num'];
    }
    public withSupportAgentList(supportAgentList: string): GlanceUpdateImageResponse {
        this['__support_agent_list'] = supportAgentList;
        return this;
    }
    public set supportAgentList(supportAgentList: string | undefined) {
        this['__support_agent_list'] = supportAgentList;
    }
    public get supportAgentList() {
        return this['__support_agent_list'];
    }
    public withSystemCmkid(systemCmkid: string): GlanceUpdateImageResponse {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
    }
    public withActiveAt(activeAt: string): GlanceUpdateImageResponse {
        this['active_at'] = activeAt;
        return this;
    }
    public set activeAt(activeAt: string | undefined) {
        this['active_at'] = activeAt;
    }
    public get activeAt() {
        return this['active_at'];
    }
    public withHwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string): GlanceUpdateImageResponse {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
        return this;
    }
    public set hwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string | undefined) {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
    }
    public get hwVifMultiqueueEnabled() {
        return this['hw_vif_multiqueue_enabled'];
    }
    public withMaxRam(maxRam: string): GlanceUpdateImageResponse {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: string | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam() {
        return this['max_ram'];
    }
    public withImageLocation(imageLocation: string): GlanceUpdateImageResponse {
        this['__image_location'] = imageLocation;
        return this;
    }
    public set imageLocation(imageLocation: string | undefined) {
        this['__image_location'] = imageLocation;
    }
    public get imageLocation() {
        return this['__image_location'];
    }
    public withIsConfigInit(isConfigInit: string): GlanceUpdateImageResponse {
        this['__is_config_init'] = isConfigInit;
        return this;
    }
    public set isConfigInit(isConfigInit: string | undefined) {
        this['__is_config_init'] = isConfigInit;
    }
    public get isConfigInit() {
        return this['__is_config_init'];
    }
    public withAccountCode(accountCode: string): GlanceUpdateImageResponse {
        this['__account_code'] = accountCode;
        return this;
    }
    public set accountCode(accountCode: string | undefined) {
        this['__account_code'] = accountCode;
    }
    public get accountCode() {
        return this['__account_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseImageSourceTypeEnum {
    UDS = 'uds',
    SWIFT = 'swift'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseIsregisteredEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponsePlatformEnum {
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
export enum GlanceUpdateImageResponseDiskFormatEnum {
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
export enum GlanceUpdateImageResponseStatusEnum {
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
export enum GlanceUpdateImageResponseVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseVisibilityEnum {
    PRIVATE = 'private',
    PUBLIC = 'public',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseSupportFcInjectEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseHwFirmwareTypeEnum {
    BIOS = 'bios',
    UEFI = 'uefi'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseSupportArmEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceUpdateImageResponseIsOffshelvedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
