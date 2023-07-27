import { Addresses } from './Addresses';
import { Fault } from './Fault';
import { FlavorInfo } from './FlavorInfo';
import { Image } from './Image';
import { Links } from './Links';
import { MetadataInfos } from './MetadataInfos';
import { OsExtendedVolumes } from './OsExtendedVolumes';
import { SecurityGroups } from './SecurityGroups';
import { ServerOsSchedulerHints } from './ServerOsSchedulerHints';
import { SystemTags } from './SystemTags';


export class ChangeBaremetalNameResponsesServers {
    public name?: string;
    public id?: string;
    public status?: ChangeBaremetalNameResponsesServersStatusEnum | string;
    public created?: Date;
    public updated?: Date;
    public flavor?: FlavorInfo;
    public image?: Image;
    private 'tenant_id'?: string;
    private 'key_name'?: string;
    private 'user_id'?: string;
    public metadata?: MetadataInfos;
    public hostId?: string;
    public addresses?: Addresses;
    private 'security_groups'?: Array<SecurityGroups>;
    public links?: Array<Links>;
    private 'OS-DCF:diskConfig'?: ChangeBaremetalNameResponsesServersOSDCFDiskConfigEnum | string;
    private 'OS-EXT-AZ:availability_zone'?: string;
    private 'OS-EXT-SRV-ATTR:host'?: string;
    private 'OS-EXT-SRV-ATTR:hypervisor_hostname'?: string;
    private 'OS-EXT-SRV-ATTR:instance_name'?: string;
    private 'OS-EXT-STS:power_state'?: number;
    private 'OS-EXT-STS:task_state'?: ChangeBaremetalNameResponsesServersOSEXTSTSTaskStateEnum | string;
    private 'OS-EXT-STS:vm_state'?: ChangeBaremetalNameResponsesServersOSEXTSTSVmStateEnum | string;
    private 'OS-SRV-USG:launched_at'?: Date;
    private 'OS-SRV-USG:terminated_at'?: Date;
    private 'os-extended-volumes:volumes_attached'?: Array<OsExtendedVolumes>;
    public accessIPv4?: string;
    public accessIPv6?: string;
    public fault?: Fault;
    private 'config_drive'?: string;
    public progress?: number;
    public description?: string;
    private 'host_status'?: ChangeBaremetalNameResponsesServersHostStatusEnum | string;
    private 'OS-EXT-SRV-ATTR:hostname'?: string;
    private 'OS-EXT-SRV-ATTR:reservation_id'?: string;
    private 'OS-EXT-SRV-ATTR:launch_index'?: number;
    private 'OS-EXT-SRV-ATTR:kernel_id'?: string;
    private 'OS-EXT-SRV-ATTR:ramdisk_id'?: string;
    private 'OS-EXT-SRV-ATTR:root_device_name'?: string;
    private 'OS-EXT-SRV-ATTR:user_data'?: string;
    public locked?: boolean;
    public tags?: Array<string>;
    private 'sys_tags'?: Array<SystemTags>;
    private 'enterprise_project_id'?: string;
    private 'os:scheduler_hints'?: ServerOsSchedulerHints;
    public constructor() { 
    }
    public withName(name: string): ChangeBaremetalNameResponsesServers {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ChangeBaremetalNameResponsesServers {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ChangeBaremetalNameResponsesServersStatusEnum | string): ChangeBaremetalNameResponsesServers {
        this['status'] = status;
        return this;
    }
    public withCreated(created: Date): ChangeBaremetalNameResponsesServers {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: Date): ChangeBaremetalNameResponsesServers {
        this['updated'] = updated;
        return this;
    }
    public withFlavor(flavor: FlavorInfo): ChangeBaremetalNameResponsesServers {
        this['flavor'] = flavor;
        return this;
    }
    public withImage(image: Image): ChangeBaremetalNameResponsesServers {
        this['image'] = image;
        return this;
    }
    public withTenantId(tenantId: string): ChangeBaremetalNameResponsesServers {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withKeyName(keyName: string): ChangeBaremetalNameResponsesServers {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withUserId(userId: string): ChangeBaremetalNameResponsesServers {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withMetadata(metadata: MetadataInfos): ChangeBaremetalNameResponsesServers {
        this['metadata'] = metadata;
        return this;
    }
    public withHostId(hostId: string): ChangeBaremetalNameResponsesServers {
        this['hostId'] = hostId;
        return this;
    }
    public withAddresses(addresses: Addresses): ChangeBaremetalNameResponsesServers {
        this['addresses'] = addresses;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroups>): ChangeBaremetalNameResponsesServers {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroups>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroups> | undefined {
        return this['security_groups'];
    }
    public withLinks(links: Array<Links>): ChangeBaremetalNameResponsesServers {
        this['links'] = links;
        return this;
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: ChangeBaremetalNameResponsesServersOSDCFDiskConfigEnum | string): ChangeBaremetalNameResponsesServers {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: ChangeBaremetalNameResponsesServersOSDCFDiskConfigEnum | string  | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig(): ChangeBaremetalNameResponsesServersOSDCFDiskConfigEnum | string | undefined {
        return this['OS-DCF:diskConfig'];
    }
    public withOSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
        return this;
    }
    public set oSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string  | undefined) {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
    }
    public get oSEXTAZAvailabilityZone(): string | undefined {
        return this['OS-EXT-AZ:availability_zone'];
    }
    public withOSEXTSRVATTRHost(oSEXTSRVATTRHost: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
        return this;
    }
    public set oSEXTSRVATTRHost(oSEXTSRVATTRHost: string  | undefined) {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
    }
    public get oSEXTSRVATTRHost(): string | undefined {
        return this['OS-EXT-SRV-ATTR:host'];
    }
    public withOSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
        return this;
    }
    public set oSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
    }
    public get oSEXTSRVATTRHypervisorHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hypervisor_hostname'];
    }
    public withOSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
        return this;
    }
    public set oSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string  | undefined) {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
    }
    public get oSEXTSRVATTRInstanceName(): string | undefined {
        return this['OS-EXT-SRV-ATTR:instance_name'];
    }
    public withOSEXTSTSPowerState(oSEXTSTSPowerState: number): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
        return this;
    }
    public set oSEXTSTSPowerState(oSEXTSTSPowerState: number  | undefined) {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
    }
    public get oSEXTSTSPowerState(): number | undefined {
        return this['OS-EXT-STS:power_state'];
    }
    public withOSEXTSTSTaskState(oSEXTSTSTaskState: ChangeBaremetalNameResponsesServersOSEXTSTSTaskStateEnum | string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
        return this;
    }
    public set oSEXTSTSTaskState(oSEXTSTSTaskState: ChangeBaremetalNameResponsesServersOSEXTSTSTaskStateEnum | string  | undefined) {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
    }
    public get oSEXTSTSTaskState(): ChangeBaremetalNameResponsesServersOSEXTSTSTaskStateEnum | string | undefined {
        return this['OS-EXT-STS:task_state'];
    }
    public withOSEXTSTSVmState(oSEXTSTSVmState: ChangeBaremetalNameResponsesServersOSEXTSTSVmStateEnum | string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
        return this;
    }
    public set oSEXTSTSVmState(oSEXTSTSVmState: ChangeBaremetalNameResponsesServersOSEXTSTSVmStateEnum | string  | undefined) {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
    }
    public get oSEXTSTSVmState(): ChangeBaremetalNameResponsesServersOSEXTSTSVmStateEnum | string | undefined {
        return this['OS-EXT-STS:vm_state'];
    }
    public withOSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: Date): ChangeBaremetalNameResponsesServers {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
        return this;
    }
    public set oSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: Date  | undefined) {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
    }
    public get oSSRVUSGLaunchedAt(): Date | undefined {
        return this['OS-SRV-USG:launched_at'];
    }
    public withOSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: Date): ChangeBaremetalNameResponsesServers {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
        return this;
    }
    public set oSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: Date  | undefined) {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
    }
    public get oSSRVUSGTerminatedAt(): Date | undefined {
        return this['OS-SRV-USG:terminated_at'];
    }
    public withOsExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<OsExtendedVolumes>): ChangeBaremetalNameResponsesServers {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
        return this;
    }
    public set osExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<OsExtendedVolumes>  | undefined) {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
    }
    public get osExtendedVolumesVolumesAttached(): Array<OsExtendedVolumes> | undefined {
        return this['os-extended-volumes:volumes_attached'];
    }
    public withAccessIPv4(accessIPv4: string): ChangeBaremetalNameResponsesServers {
        this['accessIPv4'] = accessIPv4;
        return this;
    }
    public withAccessIPv6(accessIPv6: string): ChangeBaremetalNameResponsesServers {
        this['accessIPv6'] = accessIPv6;
        return this;
    }
    public withFault(fault: Fault): ChangeBaremetalNameResponsesServers {
        this['fault'] = fault;
        return this;
    }
    public withConfigDrive(configDrive: string): ChangeBaremetalNameResponsesServers {
        this['config_drive'] = configDrive;
        return this;
    }
    public set configDrive(configDrive: string  | undefined) {
        this['config_drive'] = configDrive;
    }
    public get configDrive(): string | undefined {
        return this['config_drive'];
    }
    public withProgress(progress: number): ChangeBaremetalNameResponsesServers {
        this['progress'] = progress;
        return this;
    }
    public withDescription(description: string): ChangeBaremetalNameResponsesServers {
        this['description'] = description;
        return this;
    }
    public withHostStatus(hostStatus: ChangeBaremetalNameResponsesServersHostStatusEnum | string): ChangeBaremetalNameResponsesServers {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: ChangeBaremetalNameResponsesServersHostStatusEnum | string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): ChangeBaremetalNameResponsesServersHostStatusEnum | string | undefined {
        return this['host_status'];
    }
    public withOSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        return this;
    }
    public set oSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public get oSEXTSRVATTRHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hostname'];
    }
    public withOSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
        return this;
    }
    public set oSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
    }
    public get oSEXTSRVATTRReservationId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:reservation_id'];
    }
    public withOSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
        return this;
    }
    public set oSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number  | undefined) {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
    }
    public get oSEXTSRVATTRLaunchIndex(): number | undefined {
        return this['OS-EXT-SRV-ATTR:launch_index'];
    }
    public withOSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
        return this;
    }
    public set oSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
    }
    public get oSEXTSRVATTRKernelId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:kernel_id'];
    }
    public withOSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
        return this;
    }
    public set oSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
    }
    public get oSEXTSRVATTRRamdiskId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:ramdisk_id'];
    }
    public withOSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
        return this;
    }
    public set oSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string  | undefined) {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
    }
    public get oSEXTSRVATTRRootDeviceName(): string | undefined {
        return this['OS-EXT-SRV-ATTR:root_device_name'];
    }
    public withOSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string): ChangeBaremetalNameResponsesServers {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
        return this;
    }
    public set oSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string  | undefined) {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
    }
    public get oSEXTSRVATTRUserData(): string | undefined {
        return this['OS-EXT-SRV-ATTR:user_data'];
    }
    public withLocked(locked: boolean): ChangeBaremetalNameResponsesServers {
        this['locked'] = locked;
        return this;
    }
    public withTags(tags: Array<string>): ChangeBaremetalNameResponsesServers {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<SystemTags>): ChangeBaremetalNameResponsesServers {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SystemTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SystemTags> | undefined {
        return this['sys_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeBaremetalNameResponsesServers {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOsSchedulerHints(osSchedulerHints: ServerOsSchedulerHints): ChangeBaremetalNameResponsesServers {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: ServerOsSchedulerHints  | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints(): ServerOsSchedulerHints | undefined {
        return this['os:scheduler_hints'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeBaremetalNameResponsesServersStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    DELETED = 'DELETED',
    ERROR = 'ERROR',
    HARD_REBOOT = 'HARD_REBOOT',
    REBOOT = 'REBOOT',
    REBUILD = 'REBUILD',
    SHUTOFF = 'SHUTOFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ChangeBaremetalNameResponsesServersOSDCFDiskConfigEnum {
    MANUAL = 'MANUAL',
    AUTO = 'AUTO'
}
/**
    * @export
    * @enum {string}
    */
export enum ChangeBaremetalNameResponsesServersOSEXTSTSTaskStateEnum {
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
export enum ChangeBaremetalNameResponsesServersOSEXTSTSVmStateEnum {
    RUNNING = 'RUNNING',
    SHUTOFF = 'SHUTOFF',
    REBOOT = 'REBOOT'
}
/**
    * @export
    * @enum {string}
    */
export enum ChangeBaremetalNameResponsesServersHostStatusEnum {
    UP = 'UP',
    UNKNOWN = 'UNKNOWN',
    DOWN = 'DOWN',
    MAINTENANCE = 'MAINTENANCE'
}
