
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateImageResponse extends SdkResponse {
    private '__backup_id'?: string | undefined;
    private '__data_origin'?: string | undefined;
    private '__description'?: string | undefined;
    private '__image_size'?: string | undefined;
    private '__image_source_type'?: UpdateImageResponseImageSourceTypeEnum | undefined;
    private '__imagetype'?: UpdateImageResponseImagetypeEnum | undefined;
    private '__isregistered'?: UpdateImageResponseIsregisteredEnum | undefined;
    private '__originalimagename'?: string | undefined;
    private '__os_bit'?: UpdateImageResponseOsBitEnum | undefined;
    private '__os_type'?: UpdateImageResponseOsTypeEnum | undefined;
    private '__os_version'?: string | undefined;
    private '__platform'?: UpdateImageResponsePlatformEnum | undefined;
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
    private '__system_support_market'?: boolean | undefined;
    public checksum?: string;
    private 'container_format'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'disk_format'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
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
    public status?: UpdateImageResponseStatusEnum;
    public tags?: Array<string>;
    private 'updated_at'?: string | undefined;
    private 'virtual_env_type'?: UpdateImageResponseVirtualEnvTypeEnum | undefined;
    private 'virtual_size'?: number | undefined;
    public visibility?: UpdateImageResponseVisibilityEnum;
    private '__support_fc_inject'?: UpdateImageResponseSupportFcInjectEnum | undefined;
    private 'hw_firmware_type'?: UpdateImageResponseHwFirmwareTypeEnum | undefined;
    private '__support_arm'?: UpdateImageResponseSupportArmEnum | undefined;
    private 'max_ram'?: string | undefined;
    private '__system__cmkid'?: string | undefined;
    private '__os_feature_list'?: string | undefined;
    private '__account_code'?: string | undefined;
    private 'hw_vif_multiqueue_enabled'?: string | undefined;
    private '__is_offshelved'?: string | undefined;
    private '__lazyloading'?: boolean | undefined;
    private '__root_origin'?: string | undefined;
    private '__sequence_num'?: string | undefined;
    private 'active_at'?: string | undefined;
    private '__support_agent_list'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBackupId(backupId: string): UpdateImageResponse {
        this['__backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['__backup_id'] = backupId;
    }
    public get backupId() {
        return this['__backup_id'];
    }
    public withDataOrigin(dataOrigin: string): UpdateImageResponse {
        this['__data_origin'] = dataOrigin;
        return this;
    }
    public set dataOrigin(dataOrigin: string | undefined) {
        this['__data_origin'] = dataOrigin;
    }
    public get dataOrigin() {
        return this['__data_origin'];
    }
    public withDescription(description: string): UpdateImageResponse {
        this['__description'] = description;
        return this;
    }
    public set description(description: string | undefined) {
        this['__description'] = description;
    }
    public get description() {
        return this['__description'];
    }
    public withImageSize(imageSize: string): UpdateImageResponse {
        this['__image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string | undefined) {
        this['__image_size'] = imageSize;
    }
    public get imageSize() {
        return this['__image_size'];
    }
    public withImageSourceType(imageSourceType: UpdateImageResponseImageSourceTypeEnum): UpdateImageResponse {
        this['__image_source_type'] = imageSourceType;
        return this;
    }
    public set imageSourceType(imageSourceType: UpdateImageResponseImageSourceTypeEnum | undefined) {
        this['__image_source_type'] = imageSourceType;
    }
    public get imageSourceType() {
        return this['__image_source_type'];
    }
    public withImagetype(imagetype: UpdateImageResponseImagetypeEnum): UpdateImageResponse {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: UpdateImageResponseImagetypeEnum | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype() {
        return this['__imagetype'];
    }
    public withIsregistered(isregistered: UpdateImageResponseIsregisteredEnum): UpdateImageResponse {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: UpdateImageResponseIsregisteredEnum | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered() {
        return this['__isregistered'];
    }
    public withOriginalimagename(originalimagename: string): UpdateImageResponse {
        this['__originalimagename'] = originalimagename;
        return this;
    }
    public set originalimagename(originalimagename: string | undefined) {
        this['__originalimagename'] = originalimagename;
    }
    public get originalimagename() {
        return this['__originalimagename'];
    }
    public withOsBit(osBit: UpdateImageResponseOsBitEnum): UpdateImageResponse {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: UpdateImageResponseOsBitEnum | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit() {
        return this['__os_bit'];
    }
    public withOsType(osType: UpdateImageResponseOsTypeEnum): UpdateImageResponse {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: UpdateImageResponseOsTypeEnum | undefined) {
        this['__os_type'] = osType;
    }
    public get osType() {
        return this['__os_type'];
    }
    public withOsVersion(osVersion: string): UpdateImageResponse {
        this['__os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['__os_version'] = osVersion;
    }
    public get osVersion() {
        return this['__os_version'];
    }
    public withPlatform(platform: UpdateImageResponsePlatformEnum): UpdateImageResponse {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: UpdateImageResponsePlatformEnum | undefined) {
        this['__platform'] = platform;
    }
    public get platform() {
        return this['__platform'];
    }
    public withProductcode(productcode: string): UpdateImageResponse {
        this['__productcode'] = productcode;
        return this;
    }
    public set productcode(productcode: string | undefined) {
        this['__productcode'] = productcode;
    }
    public get productcode() {
        return this['__productcode'];
    }
    public withSupportDiskintensive(supportDiskintensive: string): UpdateImageResponse {
        this['__support_diskintensive'] = supportDiskintensive;
        return this;
    }
    public set supportDiskintensive(supportDiskintensive: string | undefined) {
        this['__support_diskintensive'] = supportDiskintensive;
    }
    public get supportDiskintensive() {
        return this['__support_diskintensive'];
    }
    public withSupportHighperformance(supportHighperformance: string): UpdateImageResponse {
        this['__support_highperformance'] = supportHighperformance;
        return this;
    }
    public set supportHighperformance(supportHighperformance: string | undefined) {
        this['__support_highperformance'] = supportHighperformance;
    }
    public get supportHighperformance() {
        return this['__support_highperformance'];
    }
    public withSupportKvm(supportKvm: string): UpdateImageResponse {
        this['__support_kvm'] = supportKvm;
        return this;
    }
    public set supportKvm(supportKvm: string | undefined) {
        this['__support_kvm'] = supportKvm;
    }
    public get supportKvm() {
        return this['__support_kvm'];
    }
    public withSupportKvmGpuType(supportKvmGpuType: string): UpdateImageResponse {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
        return this;
    }
    public set supportKvmGpuType(supportKvmGpuType: string | undefined) {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
    }
    public get supportKvmGpuType() {
        return this['__support_kvm_gpu_type'];
    }
    public withSupportKvmInfiniband(supportKvmInfiniband: string): UpdateImageResponse {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
        return this;
    }
    public set supportKvmInfiniband(supportKvmInfiniband: string | undefined) {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
    }
    public get supportKvmInfiniband() {
        return this['__support_kvm_infiniband'];
    }
    public withSupportLargememory(supportLargememory: string): UpdateImageResponse {
        this['__support_largememory'] = supportLargememory;
        return this;
    }
    public set supportLargememory(supportLargememory: string | undefined) {
        this['__support_largememory'] = supportLargememory;
    }
    public get supportLargememory() {
        return this['__support_largememory'];
    }
    public withSupportXen(supportXen: string): UpdateImageResponse {
        this['__support_xen'] = supportXen;
        return this;
    }
    public set supportXen(supportXen: string | undefined) {
        this['__support_xen'] = supportXen;
    }
    public get supportXen() {
        return this['__support_xen'];
    }
    public withSupportXenGpuType(supportXenGpuType: string): UpdateImageResponse {
        this['__support_xen_gpu_type'] = supportXenGpuType;
        return this;
    }
    public set supportXenGpuType(supportXenGpuType: string | undefined) {
        this['__support_xen_gpu_type'] = supportXenGpuType;
    }
    public get supportXenGpuType() {
        return this['__support_xen_gpu_type'];
    }
    public withSupportXenHana(supportXenHana: string): UpdateImageResponse {
        this['__support_xen_hana'] = supportXenHana;
        return this;
    }
    public set supportXenHana(supportXenHana: string | undefined) {
        this['__support_xen_hana'] = supportXenHana;
    }
    public get supportXenHana() {
        return this['__support_xen_hana'];
    }
    public withSystemSupportMarket(systemSupportMarket: boolean): UpdateImageResponse {
        this['__system_support_market'] = systemSupportMarket;
        return this;
    }
    public set systemSupportMarket(systemSupportMarket: boolean | undefined) {
        this['__system_support_market'] = systemSupportMarket;
    }
    public get systemSupportMarket() {
        return this['__system_support_market'];
    }
    public withChecksum(checksum: string): UpdateImageResponse {
        this['checksum'] = checksum;
        return this;
    }
    public withContainerFormat(containerFormat: string): UpdateImageResponse {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withCreatedAt(createdAt: string): UpdateImageResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withDiskFormat(diskFormat: string): UpdateImageResponse {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: string | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateImageResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFile(file: string): UpdateImageResponse {
        this['file'] = file;
        return this;
    }
    public withId(id: string): UpdateImageResponse {
        this['id'] = id;
        return this;
    }
    public withMinDisk(minDisk: number): UpdateImageResponse {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): UpdateImageResponse {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam() {
        return this['min_ram'];
    }
    public withName(name: string): UpdateImageResponse {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): UpdateImageResponse {
        this['owner'] = owner;
        return this;
    }
    public withProtected(_protected: boolean): UpdateImageResponse {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean | undefined) {
        this['protected'] = _protected;
    }
    public get _protected() {
        return this['protected'];
    }
    public withSchema(schema: string): UpdateImageResponse {
        this['schema'] = schema;
        return this;
    }
    public withSelf(self: string): UpdateImageResponse {
        this['self'] = self;
        return this;
    }
    public withSize(size: number): UpdateImageResponse {
        this['size'] = size;
        return this;
    }
    public withStatus(status: UpdateImageResponseStatusEnum): UpdateImageResponse {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<string>): UpdateImageResponse {
        this['tags'] = tags;
        return this;
    }
    public withUpdatedAt(updatedAt: string): UpdateImageResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withVirtualEnvType(virtualEnvType: UpdateImageResponseVirtualEnvTypeEnum): UpdateImageResponse {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: UpdateImageResponseVirtualEnvTypeEnum | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType() {
        return this['virtual_env_type'];
    }
    public withVirtualSize(virtualSize: number): UpdateImageResponse {
        this['virtual_size'] = virtualSize;
        return this;
    }
    public set virtualSize(virtualSize: number | undefined) {
        this['virtual_size'] = virtualSize;
    }
    public get virtualSize() {
        return this['virtual_size'];
    }
    public withVisibility(visibility: UpdateImageResponseVisibilityEnum): UpdateImageResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withSupportFcInject(supportFcInject: UpdateImageResponseSupportFcInjectEnum): UpdateImageResponse {
        this['__support_fc_inject'] = supportFcInject;
        return this;
    }
    public set supportFcInject(supportFcInject: UpdateImageResponseSupportFcInjectEnum | undefined) {
        this['__support_fc_inject'] = supportFcInject;
    }
    public get supportFcInject() {
        return this['__support_fc_inject'];
    }
    public withHwFirmwareType(hwFirmwareType: UpdateImageResponseHwFirmwareTypeEnum): UpdateImageResponse {
        this['hw_firmware_type'] = hwFirmwareType;
        return this;
    }
    public set hwFirmwareType(hwFirmwareType: UpdateImageResponseHwFirmwareTypeEnum | undefined) {
        this['hw_firmware_type'] = hwFirmwareType;
    }
    public get hwFirmwareType() {
        return this['hw_firmware_type'];
    }
    public withSupportArm(supportArm: UpdateImageResponseSupportArmEnum): UpdateImageResponse {
        this['__support_arm'] = supportArm;
        return this;
    }
    public set supportArm(supportArm: UpdateImageResponseSupportArmEnum | undefined) {
        this['__support_arm'] = supportArm;
    }
    public get supportArm() {
        return this['__support_arm'];
    }
    public withMaxRam(maxRam: string): UpdateImageResponse {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: string | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam() {
        return this['max_ram'];
    }
    public withSystemCmkid(systemCmkid: string): UpdateImageResponse {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
    }
    public withOsFeatureList(osFeatureList: string): UpdateImageResponse {
        this['__os_feature_list'] = osFeatureList;
        return this;
    }
    public set osFeatureList(osFeatureList: string | undefined) {
        this['__os_feature_list'] = osFeatureList;
    }
    public get osFeatureList() {
        return this['__os_feature_list'];
    }
    public withAccountCode(accountCode: string): UpdateImageResponse {
        this['__account_code'] = accountCode;
        return this;
    }
    public set accountCode(accountCode: string | undefined) {
        this['__account_code'] = accountCode;
    }
    public get accountCode() {
        return this['__account_code'];
    }
    public withHwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string): UpdateImageResponse {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
        return this;
    }
    public set hwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string | undefined) {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
    }
    public get hwVifMultiqueueEnabled() {
        return this['hw_vif_multiqueue_enabled'];
    }
    public withIsOffshelved(isOffshelved: string): UpdateImageResponse {
        this['__is_offshelved'] = isOffshelved;
        return this;
    }
    public set isOffshelved(isOffshelved: string | undefined) {
        this['__is_offshelved'] = isOffshelved;
    }
    public get isOffshelved() {
        return this['__is_offshelved'];
    }
    public withLazyloading(lazyloading: boolean): UpdateImageResponse {
        this['__lazyloading'] = lazyloading;
        return this;
    }
    public set lazyloading(lazyloading: boolean | undefined) {
        this['__lazyloading'] = lazyloading;
    }
    public get lazyloading() {
        return this['__lazyloading'];
    }
    public withRootOrigin(rootOrigin: string): UpdateImageResponse {
        this['__root_origin'] = rootOrigin;
        return this;
    }
    public set rootOrigin(rootOrigin: string | undefined) {
        this['__root_origin'] = rootOrigin;
    }
    public get rootOrigin() {
        return this['__root_origin'];
    }
    public withSequenceNum(sequenceNum: string): UpdateImageResponse {
        this['__sequence_num'] = sequenceNum;
        return this;
    }
    public set sequenceNum(sequenceNum: string | undefined) {
        this['__sequence_num'] = sequenceNum;
    }
    public get sequenceNum() {
        return this['__sequence_num'];
    }
    public withActiveAt(activeAt: string): UpdateImageResponse {
        this['active_at'] = activeAt;
        return this;
    }
    public set activeAt(activeAt: string | undefined) {
        this['active_at'] = activeAt;
    }
    public get activeAt() {
        return this['active_at'];
    }
    public withSupportAgentList(supportAgentList: string): UpdateImageResponse {
        this['__support_agent_list'] = supportAgentList;
        return this;
    }
    public set supportAgentList(supportAgentList: string | undefined) {
        this['__support_agent_list'] = supportAgentList;
    }
    public get supportAgentList() {
        return this['__support_agent_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseImageSourceTypeEnum {
    UDS = 'uds',
    SWIFT = 'swift'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseIsregisteredEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponsePlatformEnum {
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
export enum UpdateImageResponseStatusEnum {
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
export enum UpdateImageResponseVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseVisibilityEnum {
    PRIVATE = 'private',
    PUBLIC = 'public'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseSupportFcInjectEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseHwFirmwareTypeEnum {
    BIOS = 'bios',
    UEFI = 'uefi'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateImageResponseSupportArmEnum {
    TRUE = 'true',
    FALSE = 'false'
}
