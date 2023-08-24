

export class GlanceShowImageListResponseBody {
    private '__backup_id'?: string;
    private '__data_origin'?: string;
    private '__description'?: string;
    private '__image_size'?: string;
    private '__image_source_type'?: GlanceShowImageListResponseBodyImageSourceTypeEnum | string;
    private '__imagetype'?: GlanceShowImageListResponseBodyImagetypeEnum | string;
    private '__isregistered'?: GlanceShowImageListResponseBodyIsregisteredEnum | string;
    private '__originalimagename'?: string;
    private '__os_bit'?: GlanceShowImageListResponseBodyOsBitEnum | string;
    private '__os_type'?: GlanceShowImageListResponseBodyOsTypeEnum | string;
    private '__os_version'?: string;
    private '__platform'?: GlanceShowImageListResponseBodyPlatformEnum | string;
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
    private 'disk_format'?: GlanceShowImageListResponseBodyDiskFormatEnum | string;
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
    public status?: GlanceShowImageListResponseBodyStatusEnum | string;
    public tags?: Array<string>;
    private 'updated_at'?: string;
    private 'virtual_env_type'?: GlanceShowImageListResponseBodyVirtualEnvTypeEnum | string;
    private 'virtual_size'?: number;
    public visibility?: GlanceShowImageListResponseBodyVisibilityEnum | string;
    private '__support_fc_inject'?: GlanceShowImageListResponseBodySupportFcInjectEnum | string;
    private 'enterprise_project_id'?: string;
    private '_sys_enterprise_project_id'?: string;
    private 'hw_firmware_type'?: GlanceShowImageListResponseBodyHwFirmwareTypeEnum | string;
    private '__support_arm'?: GlanceShowImageListResponseBodySupportArmEnum | string;
    private '__is_offshelved'?: GlanceShowImageListResponseBodyIsOffshelvedEnum | string;
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
    public withBackupId(backupId: string): GlanceShowImageListResponseBody {
        this['__backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['__backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['__backup_id'];
    }
    public withDataOrigin(dataOrigin: string): GlanceShowImageListResponseBody {
        this['__data_origin'] = dataOrigin;
        return this;
    }
    public set dataOrigin(dataOrigin: string  | undefined) {
        this['__data_origin'] = dataOrigin;
    }
    public get dataOrigin(): string | undefined {
        return this['__data_origin'];
    }
    public withDescription(description: string): GlanceShowImageListResponseBody {
        this['__description'] = description;
        return this;
    }
    public set description(description: string  | undefined) {
        this['__description'] = description;
    }
    public get description(): string | undefined {
        return this['__description'];
    }
    public withImageSize(imageSize: string): GlanceShowImageListResponseBody {
        this['__image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string  | undefined) {
        this['__image_size'] = imageSize;
    }
    public get imageSize(): string | undefined {
        return this['__image_size'];
    }
    public withImageSourceType(imageSourceType: GlanceShowImageListResponseBodyImageSourceTypeEnum | string): GlanceShowImageListResponseBody {
        this['__image_source_type'] = imageSourceType;
        return this;
    }
    public set imageSourceType(imageSourceType: GlanceShowImageListResponseBodyImageSourceTypeEnum | string  | undefined) {
        this['__image_source_type'] = imageSourceType;
    }
    public get imageSourceType(): GlanceShowImageListResponseBodyImageSourceTypeEnum | string | undefined {
        return this['__image_source_type'];
    }
    public withImagetype(imagetype: GlanceShowImageListResponseBodyImagetypeEnum | string): GlanceShowImageListResponseBody {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: GlanceShowImageListResponseBodyImagetypeEnum | string  | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype(): GlanceShowImageListResponseBodyImagetypeEnum | string | undefined {
        return this['__imagetype'];
    }
    public withIsregistered(isregistered: GlanceShowImageListResponseBodyIsregisteredEnum | string): GlanceShowImageListResponseBody {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: GlanceShowImageListResponseBodyIsregisteredEnum | string  | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered(): GlanceShowImageListResponseBodyIsregisteredEnum | string | undefined {
        return this['__isregistered'];
    }
    public withOriginalimagename(originalimagename: string): GlanceShowImageListResponseBody {
        this['__originalimagename'] = originalimagename;
        return this;
    }
    public set originalimagename(originalimagename: string  | undefined) {
        this['__originalimagename'] = originalimagename;
    }
    public get originalimagename(): string | undefined {
        return this['__originalimagename'];
    }
    public withOsBit(osBit: GlanceShowImageListResponseBodyOsBitEnum | string): GlanceShowImageListResponseBody {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: GlanceShowImageListResponseBodyOsBitEnum | string  | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit(): GlanceShowImageListResponseBodyOsBitEnum | string | undefined {
        return this['__os_bit'];
    }
    public withOsType(osType: GlanceShowImageListResponseBodyOsTypeEnum | string): GlanceShowImageListResponseBody {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: GlanceShowImageListResponseBodyOsTypeEnum | string  | undefined) {
        this['__os_type'] = osType;
    }
    public get osType(): GlanceShowImageListResponseBodyOsTypeEnum | string | undefined {
        return this['__os_type'];
    }
    public withOsVersion(osVersion: string): GlanceShowImageListResponseBody {
        this['__os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['__os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['__os_version'];
    }
    public withPlatform(platform: GlanceShowImageListResponseBodyPlatformEnum | string): GlanceShowImageListResponseBody {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: GlanceShowImageListResponseBodyPlatformEnum | string  | undefined) {
        this['__platform'] = platform;
    }
    public get platform(): GlanceShowImageListResponseBodyPlatformEnum | string | undefined {
        return this['__platform'];
    }
    public withProductcode(productcode: string): GlanceShowImageListResponseBody {
        this['__productcode'] = productcode;
        return this;
    }
    public set productcode(productcode: string  | undefined) {
        this['__productcode'] = productcode;
    }
    public get productcode(): string | undefined {
        return this['__productcode'];
    }
    public withSupportDiskintensive(supportDiskintensive: string): GlanceShowImageListResponseBody {
        this['__support_diskintensive'] = supportDiskintensive;
        return this;
    }
    public set supportDiskintensive(supportDiskintensive: string  | undefined) {
        this['__support_diskintensive'] = supportDiskintensive;
    }
    public get supportDiskintensive(): string | undefined {
        return this['__support_diskintensive'];
    }
    public withSupportHighperformance(supportHighperformance: string): GlanceShowImageListResponseBody {
        this['__support_highperformance'] = supportHighperformance;
        return this;
    }
    public set supportHighperformance(supportHighperformance: string  | undefined) {
        this['__support_highperformance'] = supportHighperformance;
    }
    public get supportHighperformance(): string | undefined {
        return this['__support_highperformance'];
    }
    public withSupportKvm(supportKvm: string): GlanceShowImageListResponseBody {
        this['__support_kvm'] = supportKvm;
        return this;
    }
    public set supportKvm(supportKvm: string  | undefined) {
        this['__support_kvm'] = supportKvm;
    }
    public get supportKvm(): string | undefined {
        return this['__support_kvm'];
    }
    public withSupportKvmGpuType(supportKvmGpuType: string): GlanceShowImageListResponseBody {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
        return this;
    }
    public set supportKvmGpuType(supportKvmGpuType: string  | undefined) {
        this['__support_kvm_gpu_type'] = supportKvmGpuType;
    }
    public get supportKvmGpuType(): string | undefined {
        return this['__support_kvm_gpu_type'];
    }
    public withSupportKvmInfiniband(supportKvmInfiniband: string): GlanceShowImageListResponseBody {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
        return this;
    }
    public set supportKvmInfiniband(supportKvmInfiniband: string  | undefined) {
        this['__support_kvm_infiniband'] = supportKvmInfiniband;
    }
    public get supportKvmInfiniband(): string | undefined {
        return this['__support_kvm_infiniband'];
    }
    public withSupportLargememory(supportLargememory: string): GlanceShowImageListResponseBody {
        this['__support_largememory'] = supportLargememory;
        return this;
    }
    public set supportLargememory(supportLargememory: string  | undefined) {
        this['__support_largememory'] = supportLargememory;
    }
    public get supportLargememory(): string | undefined {
        return this['__support_largememory'];
    }
    public withSupportXen(supportXen: string): GlanceShowImageListResponseBody {
        this['__support_xen'] = supportXen;
        return this;
    }
    public set supportXen(supportXen: string  | undefined) {
        this['__support_xen'] = supportXen;
    }
    public get supportXen(): string | undefined {
        return this['__support_xen'];
    }
    public withSupportXenGpuType(supportXenGpuType: string): GlanceShowImageListResponseBody {
        this['__support_xen_gpu_type'] = supportXenGpuType;
        return this;
    }
    public set supportXenGpuType(supportXenGpuType: string  | undefined) {
        this['__support_xen_gpu_type'] = supportXenGpuType;
    }
    public get supportXenGpuType(): string | undefined {
        return this['__support_xen_gpu_type'];
    }
    public withSupportXenHana(supportXenHana: string): GlanceShowImageListResponseBody {
        this['__support_xen_hana'] = supportXenHana;
        return this;
    }
    public set supportXenHana(supportXenHana: string  | undefined) {
        this['__support_xen_hana'] = supportXenHana;
    }
    public get supportXenHana(): string | undefined {
        return this['__support_xen_hana'];
    }
    public withChecksum(checksum: string): GlanceShowImageListResponseBody {
        this['checksum'] = checksum;
        return this;
    }
    public withContainerFormat(containerFormat: string): GlanceShowImageListResponseBody {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string  | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat(): string | undefined {
        return this['container_format'];
    }
    public withCreatedAt(createdAt: string): GlanceShowImageListResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDiskFormat(diskFormat: GlanceShowImageListResponseBodyDiskFormatEnum | string): GlanceShowImageListResponseBody {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: GlanceShowImageListResponseBodyDiskFormatEnum | string  | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat(): GlanceShowImageListResponseBodyDiskFormatEnum | string | undefined {
        return this['disk_format'];
    }
    public withFile(file: string): GlanceShowImageListResponseBody {
        this['file'] = file;
        return this;
    }
    public withId(id: string): GlanceShowImageListResponseBody {
        this['id'] = id;
        return this;
    }
    public withMinDisk(minDisk: number): GlanceShowImageListResponseBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): GlanceShowImageListResponseBody {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withName(name: string): GlanceShowImageListResponseBody {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): GlanceShowImageListResponseBody {
        this['owner'] = owner;
        return this;
    }
    public withProtected(_protected: boolean): GlanceShowImageListResponseBody {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
    public withSchema(schema: string): GlanceShowImageListResponseBody {
        this['schema'] = schema;
        return this;
    }
    public withSelf(self: string): GlanceShowImageListResponseBody {
        this['self'] = self;
        return this;
    }
    public withSize(size: number): GlanceShowImageListResponseBody {
        this['size'] = size;
        return this;
    }
    public withStatus(status: GlanceShowImageListResponseBodyStatusEnum | string): GlanceShowImageListResponseBody {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<string>): GlanceShowImageListResponseBody {
        this['tags'] = tags;
        return this;
    }
    public withUpdatedAt(updatedAt: string): GlanceShowImageListResponseBody {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVirtualEnvType(virtualEnvType: GlanceShowImageListResponseBodyVirtualEnvTypeEnum | string): GlanceShowImageListResponseBody {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: GlanceShowImageListResponseBodyVirtualEnvTypeEnum | string  | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType(): GlanceShowImageListResponseBodyVirtualEnvTypeEnum | string | undefined {
        return this['virtual_env_type'];
    }
    public withVirtualSize(virtualSize: number): GlanceShowImageListResponseBody {
        this['virtual_size'] = virtualSize;
        return this;
    }
    public set virtualSize(virtualSize: number  | undefined) {
        this['virtual_size'] = virtualSize;
    }
    public get virtualSize(): number | undefined {
        return this['virtual_size'];
    }
    public withVisibility(visibility: GlanceShowImageListResponseBodyVisibilityEnum | string): GlanceShowImageListResponseBody {
        this['visibility'] = visibility;
        return this;
    }
    public withSupportFcInject(supportFcInject: GlanceShowImageListResponseBodySupportFcInjectEnum | string): GlanceShowImageListResponseBody {
        this['__support_fc_inject'] = supportFcInject;
        return this;
    }
    public set supportFcInject(supportFcInject: GlanceShowImageListResponseBodySupportFcInjectEnum | string  | undefined) {
        this['__support_fc_inject'] = supportFcInject;
    }
    public get supportFcInject(): GlanceShowImageListResponseBodySupportFcInjectEnum | string | undefined {
        return this['__support_fc_inject'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GlanceShowImageListResponseBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSysEnterpriseProjectId(sysEnterpriseProjectId: string): GlanceShowImageListResponseBody {
        this['_sys_enterprise_project_id'] = sysEnterpriseProjectId;
        return this;
    }
    public set sysEnterpriseProjectId(sysEnterpriseProjectId: string  | undefined) {
        this['_sys_enterprise_project_id'] = sysEnterpriseProjectId;
    }
    public get sysEnterpriseProjectId(): string | undefined {
        return this['_sys_enterprise_project_id'];
    }
    public withHwFirmwareType(hwFirmwareType: GlanceShowImageListResponseBodyHwFirmwareTypeEnum | string): GlanceShowImageListResponseBody {
        this['hw_firmware_type'] = hwFirmwareType;
        return this;
    }
    public set hwFirmwareType(hwFirmwareType: GlanceShowImageListResponseBodyHwFirmwareTypeEnum | string  | undefined) {
        this['hw_firmware_type'] = hwFirmwareType;
    }
    public get hwFirmwareType(): GlanceShowImageListResponseBodyHwFirmwareTypeEnum | string | undefined {
        return this['hw_firmware_type'];
    }
    public withSupportArm(supportArm: GlanceShowImageListResponseBodySupportArmEnum | string): GlanceShowImageListResponseBody {
        this['__support_arm'] = supportArm;
        return this;
    }
    public set supportArm(supportArm: GlanceShowImageListResponseBodySupportArmEnum | string  | undefined) {
        this['__support_arm'] = supportArm;
    }
    public get supportArm(): GlanceShowImageListResponseBodySupportArmEnum | string | undefined {
        return this['__support_arm'];
    }
    public withIsOffshelved(isOffshelved: GlanceShowImageListResponseBodyIsOffshelvedEnum | string): GlanceShowImageListResponseBody {
        this['__is_offshelved'] = isOffshelved;
        return this;
    }
    public set isOffshelved(isOffshelved: GlanceShowImageListResponseBodyIsOffshelvedEnum | string  | undefined) {
        this['__is_offshelved'] = isOffshelved;
    }
    public get isOffshelved(): GlanceShowImageListResponseBodyIsOffshelvedEnum | string | undefined {
        return this['__is_offshelved'];
    }
    public withLazyloading(lazyloading: string): GlanceShowImageListResponseBody {
        this['__lazyloading'] = lazyloading;
        return this;
    }
    public set lazyloading(lazyloading: string  | undefined) {
        this['__lazyloading'] = lazyloading;
    }
    public get lazyloading(): string | undefined {
        return this['__lazyloading'];
    }
    public withOsFeatureList(osFeatureList: string): GlanceShowImageListResponseBody {
        this['__os_feature_list'] = osFeatureList;
        return this;
    }
    public set osFeatureList(osFeatureList: string  | undefined) {
        this['__os_feature_list'] = osFeatureList;
    }
    public get osFeatureList(): string | undefined {
        return this['__os_feature_list'];
    }
    public withRootOrigin(rootOrigin: string): GlanceShowImageListResponseBody {
        this['__root_origin'] = rootOrigin;
        return this;
    }
    public set rootOrigin(rootOrigin: string  | undefined) {
        this['__root_origin'] = rootOrigin;
    }
    public get rootOrigin(): string | undefined {
        return this['__root_origin'];
    }
    public withSequenceNum(sequenceNum: string): GlanceShowImageListResponseBody {
        this['__sequence_num'] = sequenceNum;
        return this;
    }
    public set sequenceNum(sequenceNum: string  | undefined) {
        this['__sequence_num'] = sequenceNum;
    }
    public get sequenceNum(): string | undefined {
        return this['__sequence_num'];
    }
    public withSupportAgentList(supportAgentList: string): GlanceShowImageListResponseBody {
        this['__support_agent_list'] = supportAgentList;
        return this;
    }
    public set supportAgentList(supportAgentList: string  | undefined) {
        this['__support_agent_list'] = supportAgentList;
    }
    public get supportAgentList(): string | undefined {
        return this['__support_agent_list'];
    }
    public withSystemCmkid(systemCmkid: string): GlanceShowImageListResponseBody {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string  | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid(): string | undefined {
        return this['__system__cmkid'];
    }
    public withActiveAt(activeAt: string): GlanceShowImageListResponseBody {
        this['active_at'] = activeAt;
        return this;
    }
    public set activeAt(activeAt: string  | undefined) {
        this['active_at'] = activeAt;
    }
    public get activeAt(): string | undefined {
        return this['active_at'];
    }
    public withHwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string): GlanceShowImageListResponseBody {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
        return this;
    }
    public set hwVifMultiqueueEnabled(hwVifMultiqueueEnabled: string  | undefined) {
        this['hw_vif_multiqueue_enabled'] = hwVifMultiqueueEnabled;
    }
    public get hwVifMultiqueueEnabled(): string | undefined {
        return this['hw_vif_multiqueue_enabled'];
    }
    public withMaxRam(maxRam: string): GlanceShowImageListResponseBody {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: string  | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam(): string | undefined {
        return this['max_ram'];
    }
    public withImageLocation(imageLocation: string): GlanceShowImageListResponseBody {
        this['__image_location'] = imageLocation;
        return this;
    }
    public set imageLocation(imageLocation: string  | undefined) {
        this['__image_location'] = imageLocation;
    }
    public get imageLocation(): string | undefined {
        return this['__image_location'];
    }
    public withIsConfigInit(isConfigInit: string): GlanceShowImageListResponseBody {
        this['__is_config_init'] = isConfigInit;
        return this;
    }
    public set isConfigInit(isConfigInit: string  | undefined) {
        this['__is_config_init'] = isConfigInit;
    }
    public get isConfigInit(): string | undefined {
        return this['__is_config_init'];
    }
    public withAccountCode(accountCode: string): GlanceShowImageListResponseBody {
        this['__account_code'] = accountCode;
        return this;
    }
    public set accountCode(accountCode: string  | undefined) {
        this['__account_code'] = accountCode;
    }
    public get accountCode(): string | undefined {
        return this['__account_code'];
    }
    public withSupportAmd(supportAmd: string): GlanceShowImageListResponseBody {
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
export enum GlanceShowImageListResponseBodyImageSourceTypeEnum {
    UDS = 'uds',
    SWIFT = 'swift'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared',
    MARKET = 'market'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyIsregisteredEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows',
    OTHER = 'Other'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyPlatformEnum {
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
export enum GlanceShowImageListResponseBodyDiskFormatEnum {
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
export enum GlanceShowImageListResponseBodyStatusEnum {
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
export enum GlanceShowImageListResponseBodyVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyVisibilityEnum {
    PRIVATE = 'private',
    PUBLIC = 'public',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodySupportFcInjectEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyHwFirmwareTypeEnum {
    BIOS = 'bios',
    UEFI = 'uefi'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodySupportArmEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceShowImageListResponseBodyIsOffshelvedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
