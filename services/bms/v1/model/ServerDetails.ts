import { AddressInfo } from './AddressInfo';
import { Fault } from './Fault';
import { FlavorInfos } from './FlavorInfos';
import { ImageInfo } from './ImageInfo';
import { MetadataList } from './MetadataList';
import { OsExtendedVolumesInfo } from './OsExtendedVolumesInfo';
import { SchedulerHints } from './SchedulerHints';
import { SecurityGroupsList } from './SecurityGroupsList';
import { SystemTags } from './SystemTags';


export class ServerDetails {
    public id?: string;
    private 'user_id'?: string;
    public name?: string;
    public created?: string;
    public updated?: string;
    private 'tenant_id'?: string;
    public hostId?: string;
    public addresses?: { [key: string]: Array<AddressInfo>; };
    private 'key_name'?: string;
    public image?: ImageInfo;
    public flavor?: FlavorInfos;
    private 'security_groups'?: Array<SecurityGroupsList>;
    public accessIPv4?: string;
    public accessIPv6?: string;
    public status?: ServerDetailsStatusEnum | string;
    public progress?: number;
    private 'config_drive'?: string;
    public metadata?: MetadataList;
    private 'OS-EXT-STS:task_state'?: ServerDetailsOSEXTSTSTaskStateEnum | string;
    private 'OS-EXT-STS:vm_state'?: ServerDetailsOSEXTSTSVmStateEnum | string;
    private 'OS-EXT-SRV-ATTR:host'?: string;
    private 'OS-EXT-SRV-ATTR:instance_name'?: string;
    private 'OS-EXT-STS:power_state'?: number;
    private 'OS-EXT-SRV-ATTR:hypervisor_hostname'?: string;
    private 'OS-EXT-AZ:availability_zone'?: string;
    private 'OS-DCF:diskConfig'?: ServerDetailsOSDCFDiskConfigEnum | string;
    public fault?: Fault;
    private 'OS-SRV-USG:launched_at'?: Date;
    private 'OS-SRV-USG:terminated_at'?: Date;
    private 'os-extended-volumes:volumes_attached'?: Array<OsExtendedVolumesInfo>;
    public description?: string;
    private 'host_status'?: ServerDetailsHostStatusEnum | string;
    private 'OS-EXT-SRV-ATTR:hostname'?: string;
    private 'OS-EXT-SRV-ATTR:reservation_id'?: string;
    private 'OS-EXT-SRV-ATTR:launch_index'?: number;
    private 'OS-EXT-SRV-ATTR:kernel_id'?: string;
    private 'OS-EXT-SRV-ATTR:ramdisk_id'?: string;
    private 'OS-EXT-SRV-ATTR:root_device_name'?: string;
    private 'OS-EXT-SRV-ATTR:user_data'?: string;
    public locked?: boolean;
    public tags?: Array<string>;
    private 'os:scheduler_hints'?: SchedulerHints;
    private 'enterprise_project_id'?: string;
    private 'sys_tags'?: Array<SystemTags>;
    public constructor(id?: string, name?: string, tenantId?: string, status?: string, metadata?: MetadataList) { 
        this['id'] = id;
        this['name'] = name;
        this['tenant_id'] = tenantId;
        this['status'] = status;
        this['metadata'] = metadata;
    }
    public withId(id: string): ServerDetails {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): ServerDetails {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withName(name: string): ServerDetails {
        this['name'] = name;
        return this;
    }
    public withCreated(created: string): ServerDetails {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ServerDetails {
        this['updated'] = updated;
        return this;
    }
    public withTenantId(tenantId: string): ServerDetails {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withHostId(hostId: string): ServerDetails {
        this['hostId'] = hostId;
        return this;
    }
    public withAddresses(addresses: { [key: string]: Array<AddressInfo>; }): ServerDetails {
        this['addresses'] = addresses;
        return this;
    }
    public withKeyName(keyName: string): ServerDetails {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withImage(image: ImageInfo): ServerDetails {
        this['image'] = image;
        return this;
    }
    public withFlavor(flavor: FlavorInfos): ServerDetails {
        this['flavor'] = flavor;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroupsList>): ServerDetails {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroupsList>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroupsList> | undefined {
        return this['security_groups'];
    }
    public withAccessIPv4(accessIPv4: string): ServerDetails {
        this['accessIPv4'] = accessIPv4;
        return this;
    }
    public withAccessIPv6(accessIPv6: string): ServerDetails {
        this['accessIPv6'] = accessIPv6;
        return this;
    }
    public withStatus(status: ServerDetailsStatusEnum | string): ServerDetails {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: number): ServerDetails {
        this['progress'] = progress;
        return this;
    }
    public withConfigDrive(configDrive: string): ServerDetails {
        this['config_drive'] = configDrive;
        return this;
    }
    public set configDrive(configDrive: string  | undefined) {
        this['config_drive'] = configDrive;
    }
    public get configDrive(): string | undefined {
        return this['config_drive'];
    }
    public withMetadata(metadata: MetadataList): ServerDetails {
        this['metadata'] = metadata;
        return this;
    }
    public withOSEXTSTSTaskState(oSEXTSTSTaskState: ServerDetailsOSEXTSTSTaskStateEnum | string): ServerDetails {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
        return this;
    }
    public set oSEXTSTSTaskState(oSEXTSTSTaskState: ServerDetailsOSEXTSTSTaskStateEnum | string  | undefined) {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
    }
    public get oSEXTSTSTaskState(): ServerDetailsOSEXTSTSTaskStateEnum | string | undefined {
        return this['OS-EXT-STS:task_state'];
    }
    public withOSEXTSTSVmState(oSEXTSTSVmState: ServerDetailsOSEXTSTSVmStateEnum | string): ServerDetails {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
        return this;
    }
    public set oSEXTSTSVmState(oSEXTSTSVmState: ServerDetailsOSEXTSTSVmStateEnum | string  | undefined) {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
    }
    public get oSEXTSTSVmState(): ServerDetailsOSEXTSTSVmStateEnum | string | undefined {
        return this['OS-EXT-STS:vm_state'];
    }
    public withOSEXTSRVATTRHost(oSEXTSRVATTRHost: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
        return this;
    }
    public set oSEXTSRVATTRHost(oSEXTSRVATTRHost: string  | undefined) {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
    }
    public get oSEXTSRVATTRHost(): string | undefined {
        return this['OS-EXT-SRV-ATTR:host'];
    }
    public withOSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
        return this;
    }
    public set oSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string  | undefined) {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
    }
    public get oSEXTSRVATTRInstanceName(): string | undefined {
        return this['OS-EXT-SRV-ATTR:instance_name'];
    }
    public withOSEXTSTSPowerState(oSEXTSTSPowerState: number): ServerDetails {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
        return this;
    }
    public set oSEXTSTSPowerState(oSEXTSTSPowerState: number  | undefined) {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
    }
    public get oSEXTSTSPowerState(): number | undefined {
        return this['OS-EXT-STS:power_state'];
    }
    public withOSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
        return this;
    }
    public set oSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
    }
    public get oSEXTSRVATTRHypervisorHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hypervisor_hostname'];
    }
    public withOSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string): ServerDetails {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
        return this;
    }
    public set oSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string  | undefined) {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
    }
    public get oSEXTAZAvailabilityZone(): string | undefined {
        return this['OS-EXT-AZ:availability_zone'];
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: ServerDetailsOSDCFDiskConfigEnum | string): ServerDetails {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: ServerDetailsOSDCFDiskConfigEnum | string  | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig(): ServerDetailsOSDCFDiskConfigEnum | string | undefined {
        return this['OS-DCF:diskConfig'];
    }
    public withFault(fault: Fault): ServerDetails {
        this['fault'] = fault;
        return this;
    }
    public withOSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: Date): ServerDetails {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
        return this;
    }
    public set oSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: Date  | undefined) {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
    }
    public get oSSRVUSGLaunchedAt(): Date | undefined {
        return this['OS-SRV-USG:launched_at'];
    }
    public withOSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: Date): ServerDetails {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
        return this;
    }
    public set oSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: Date  | undefined) {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
    }
    public get oSSRVUSGTerminatedAt(): Date | undefined {
        return this['OS-SRV-USG:terminated_at'];
    }
    public withOsExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<OsExtendedVolumesInfo>): ServerDetails {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
        return this;
    }
    public set osExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<OsExtendedVolumesInfo>  | undefined) {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
    }
    public get osExtendedVolumesVolumesAttached(): Array<OsExtendedVolumesInfo> | undefined {
        return this['os-extended-volumes:volumes_attached'];
    }
    public withDescription(description: string): ServerDetails {
        this['description'] = description;
        return this;
    }
    public withHostStatus(hostStatus: ServerDetailsHostStatusEnum | string): ServerDetails {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: ServerDetailsHostStatusEnum | string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): ServerDetailsHostStatusEnum | string | undefined {
        return this['host_status'];
    }
    public withOSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        return this;
    }
    public set oSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public get oSEXTSRVATTRHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hostname'];
    }
    public withOSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
        return this;
    }
    public set oSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
    }
    public get oSEXTSRVATTRReservationId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:reservation_id'];
    }
    public withOSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number): ServerDetails {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
        return this;
    }
    public set oSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number  | undefined) {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
    }
    public get oSEXTSRVATTRLaunchIndex(): number | undefined {
        return this['OS-EXT-SRV-ATTR:launch_index'];
    }
    public withOSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
        return this;
    }
    public set oSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
    }
    public get oSEXTSRVATTRKernelId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:kernel_id'];
    }
    public withOSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
        return this;
    }
    public set oSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
    }
    public get oSEXTSRVATTRRamdiskId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:ramdisk_id'];
    }
    public withOSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
        return this;
    }
    public set oSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string  | undefined) {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
    }
    public get oSEXTSRVATTRRootDeviceName(): string | undefined {
        return this['OS-EXT-SRV-ATTR:root_device_name'];
    }
    public withOSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string): ServerDetails {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
        return this;
    }
    public set oSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string  | undefined) {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
    }
    public get oSEXTSRVATTRUserData(): string | undefined {
        return this['OS-EXT-SRV-ATTR:user_data'];
    }
    public withLocked(locked: boolean): ServerDetails {
        this['locked'] = locked;
        return this;
    }
    public withTags(tags: Array<string>): ServerDetails {
        this['tags'] = tags;
        return this;
    }
    public withOsSchedulerHints(osSchedulerHints: SchedulerHints): ServerDetails {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: SchedulerHints  | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints(): SchedulerHints | undefined {
        return this['os:scheduler_hints'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ServerDetails {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSysTags(sysTags: Array<SystemTags>): ServerDetails {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SystemTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SystemTags> | undefined {
        return this['sys_tags'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerDetailsStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    ERROR = 'ERROR',
    HARD_REBOOT = 'HARD_REBOOT',
    REBOOT = 'REBOOT',
    DELETED = 'DELETED',
    SHUTOFF = 'SHUTOFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerDetailsOSEXTSTSTaskStateEnum {
    REBOOTING = 'rebooting',
    REBOOT_STARTED = 'reboot_started',
    REBOOT_STARTED_HARD = 'reboot_started_hard',
    POWERING_OFF = 'powering-off',
    POWERING_ON = 'powering-on',
    REBUILDING = 'rebuilding',
    SCHEDULING = 'scheduling',
    DELETING = 'deleting'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerDetailsOSEXTSTSVmStateEnum {
    ACTIVE = 'active',
    SHUTOFF = 'shutoff',
    REBOOT = 'reboot'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerDetailsOSDCFDiskConfigEnum {
    MANUAL = 'MANUAL',
    AUTO = 'AUTO'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerDetailsHostStatusEnum {
    UP = 'UP',
    UNKNOWN = 'UNKNOWN',
    DOWN = 'DOWN',
    MAINTENANCE = 'MAINTENANCE'
}
