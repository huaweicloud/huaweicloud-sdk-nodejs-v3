import { NovaLink } from './NovaLink';
import { NovaNetwork } from './NovaNetwork';
import { NovaServerFault } from './NovaServerFault';
import { NovaServerFlavor } from './NovaServerFlavor';
import { NovaServerImage } from './NovaServerImage';
import { NovaServerSchedulerHints } from './NovaServerSchedulerHints';
import { NovaServerSecurityGroup } from './NovaServerSecurityGroup';
import { NovaServerVolume } from './NovaServerVolume';


export class NovaServer {
    public name?: string;
    public id?: string;
    public status?: NovaServerStatusEnum | string;
    public created?: string;
    public updated?: string;
    public flavor?: NovaServerFlavor;
    public image?: NovaServerImage;
    private 'tenant_id'?: string;
    private 'key_name'?: string;
    private 'user_id'?: string;
    public metadata?: { [key: string]: string; };
    public hostId?: string;
    public addresses?: { [key: string]: Array<NovaNetwork>; };
    private 'security_groups'?: Array<NovaServerSecurityGroup>;
    public links?: Array<NovaLink>;
    private 'OS-DCF:diskConfig'?: NovaServerOSDCFDiskConfigEnum | string;
    private 'OS-EXT-AZ:availability_zone'?: string;
    private 'OS-EXT-SRV-ATTR:host'?: string;
    private 'OS-EXT-SRV-ATTR:hypervisor_hostname'?: string;
    private 'OS-EXT-SRV-ATTR:instance_name'?: string;
    private 'OS-EXT-STS:power_state'?: number;
    private 'OS-EXT-STS:task_state'?: NovaServerOSEXTSTSTaskStateEnum | string;
    private 'OS-EXT-STS:vm_state'?: NovaServerOSEXTSTSVmStateEnum | string;
    private 'OS-SRV-USG:launched_at'?: string;
    private 'OS-SRV-USG:terminated_at'?: string;
    private 'os-extended-volumes:volumes_attached'?: Array<NovaServerVolume>;
    public fault?: NovaServerFault;
    public description?: string;
    private 'host_status'?: NovaServerHostStatusEnum | string;
    private 'OS-EXT-SRV-ATTR:hostname'?: string;
    private 'OS-EXT-SRV-ATTR:reservation_id'?: string;
    private 'OS-EXT-SRV-ATTR:launch_index'?: number;
    private 'OS-EXT-SRV-ATTR:kernel_id'?: string;
    private 'OS-EXT-SRV-ATTR:ramdisk_id'?: string;
    private 'OS-EXT-SRV-ATTR:root_device_name'?: string;
    private 'OS-EXT-SRV-ATTR:user_data'?: string;
    public tags?: Array<string>;
    public locked?: boolean;
    public accessIPv4?: string;
    public accessIPv6?: string;
    private 'config_drive'?: string;
    public progress?: number;
    private 'os:scheduler_hints'?: NovaServerSchedulerHints;
    public constructor(name?: string, id?: string, status?: string, created?: string, updated?: string, flavor?: NovaServerFlavor, image?: NovaServerImage, tenantId?: string, keyName?: string, userId?: string, metadata?: { [key: string]: string; }, hostId?: string, addresses?: { [key: string]: Array<NovaNetwork>; }, securityGroups?: Array<NovaServerSecurityGroup>, links?: Array<NovaLink>, oSDCFDiskConfig?: string, oSEXTAZAvailabilityZone?: string, oSEXTSRVATTRHost?: string, oSEXTSRVATTRHypervisorHostname?: string, oSEXTSRVATTRInstanceName?: string, oSEXTSTSPowerState?: number, oSEXTSTSTaskState?: string, oSEXTSTSVmState?: string, oSSRVUSGLaunchedAt?: string, oSSRVUSGTerminatedAt?: string, osExtendedVolumesVolumesAttached?: Array<NovaServerVolume>, hostStatus?: string, tags?: Array<string>, accessIPv4?: string, accessIPv6?: string, configDrive?: string, progress?: number) { 
        this['name'] = name;
        this['id'] = id;
        this['status'] = status;
        this['created'] = created;
        this['updated'] = updated;
        this['flavor'] = flavor;
        this['image'] = image;
        this['tenant_id'] = tenantId;
        this['key_name'] = keyName;
        this['user_id'] = userId;
        this['metadata'] = metadata;
        this['hostId'] = hostId;
        this['addresses'] = addresses;
        this['security_groups'] = securityGroups;
        this['links'] = links;
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
        this['host_status'] = hostStatus;
        this['tags'] = tags;
        this['accessIPv4'] = accessIPv4;
        this['accessIPv6'] = accessIPv6;
        this['config_drive'] = configDrive;
        this['progress'] = progress;
    }
    public withName(name: string): NovaServer {
        this['name'] = name;
        return this;
    }
    public withId(id: string): NovaServer {
        this['id'] = id;
        return this;
    }
    public withStatus(status: NovaServerStatusEnum | string): NovaServer {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): NovaServer {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): NovaServer {
        this['updated'] = updated;
        return this;
    }
    public withFlavor(flavor: NovaServerFlavor): NovaServer {
        this['flavor'] = flavor;
        return this;
    }
    public withImage(image: NovaServerImage): NovaServer {
        this['image'] = image;
        return this;
    }
    public withTenantId(tenantId: string): NovaServer {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withKeyName(keyName: string): NovaServer {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withUserId(userId: string): NovaServer {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withMetadata(metadata: { [key: string]: string; }): NovaServer {
        this['metadata'] = metadata;
        return this;
    }
    public withHostId(hostId: string): NovaServer {
        this['hostId'] = hostId;
        return this;
    }
    public withAddresses(addresses: { [key: string]: Array<NovaNetwork>; }): NovaServer {
        this['addresses'] = addresses;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<NovaServerSecurityGroup>): NovaServer {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<NovaServerSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<NovaServerSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withLinks(links: Array<NovaLink>): NovaServer {
        this['links'] = links;
        return this;
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: NovaServerOSDCFDiskConfigEnum | string): NovaServer {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: NovaServerOSDCFDiskConfigEnum | string  | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig(): NovaServerOSDCFDiskConfigEnum | string | undefined {
        return this['OS-DCF:diskConfig'];
    }
    public withOSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string): NovaServer {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
        return this;
    }
    public set oSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string  | undefined) {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
    }
    public get oSEXTAZAvailabilityZone(): string | undefined {
        return this['OS-EXT-AZ:availability_zone'];
    }
    public withOSEXTSRVATTRHost(oSEXTSRVATTRHost: string): NovaServer {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
        return this;
    }
    public set oSEXTSRVATTRHost(oSEXTSRVATTRHost: string  | undefined) {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
    }
    public get oSEXTSRVATTRHost(): string | undefined {
        return this['OS-EXT-SRV-ATTR:host'];
    }
    public withOSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string): NovaServer {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
        return this;
    }
    public set oSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
    }
    public get oSEXTSRVATTRHypervisorHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hypervisor_hostname'];
    }
    public withOSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string): NovaServer {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
        return this;
    }
    public set oSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string  | undefined) {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
    }
    public get oSEXTSRVATTRInstanceName(): string | undefined {
        return this['OS-EXT-SRV-ATTR:instance_name'];
    }
    public withOSEXTSTSPowerState(oSEXTSTSPowerState: number): NovaServer {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
        return this;
    }
    public set oSEXTSTSPowerState(oSEXTSTSPowerState: number  | undefined) {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
    }
    public get oSEXTSTSPowerState(): number | undefined {
        return this['OS-EXT-STS:power_state'];
    }
    public withOSEXTSTSTaskState(oSEXTSTSTaskState: NovaServerOSEXTSTSTaskStateEnum | string): NovaServer {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
        return this;
    }
    public set oSEXTSTSTaskState(oSEXTSTSTaskState: NovaServerOSEXTSTSTaskStateEnum | string  | undefined) {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
    }
    public get oSEXTSTSTaskState(): NovaServerOSEXTSTSTaskStateEnum | string | undefined {
        return this['OS-EXT-STS:task_state'];
    }
    public withOSEXTSTSVmState(oSEXTSTSVmState: NovaServerOSEXTSTSVmStateEnum | string): NovaServer {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
        return this;
    }
    public set oSEXTSTSVmState(oSEXTSTSVmState: NovaServerOSEXTSTSVmStateEnum | string  | undefined) {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
    }
    public get oSEXTSTSVmState(): NovaServerOSEXTSTSVmStateEnum | string | undefined {
        return this['OS-EXT-STS:vm_state'];
    }
    public withOSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: string): NovaServer {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
        return this;
    }
    public set oSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: string  | undefined) {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
    }
    public get oSSRVUSGLaunchedAt(): string | undefined {
        return this['OS-SRV-USG:launched_at'];
    }
    public withOSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: string): NovaServer {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
        return this;
    }
    public set oSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: string  | undefined) {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
    }
    public get oSSRVUSGTerminatedAt(): string | undefined {
        return this['OS-SRV-USG:terminated_at'];
    }
    public withOsExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<NovaServerVolume>): NovaServer {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
        return this;
    }
    public set osExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<NovaServerVolume>  | undefined) {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
    }
    public get osExtendedVolumesVolumesAttached(): Array<NovaServerVolume> | undefined {
        return this['os-extended-volumes:volumes_attached'];
    }
    public withFault(fault: NovaServerFault): NovaServer {
        this['fault'] = fault;
        return this;
    }
    public withDescription(description: string): NovaServer {
        this['description'] = description;
        return this;
    }
    public withHostStatus(hostStatus: NovaServerHostStatusEnum | string): NovaServer {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: NovaServerHostStatusEnum | string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): NovaServerHostStatusEnum | string | undefined {
        return this['host_status'];
    }
    public withOSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string): NovaServer {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        return this;
    }
    public set oSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string  | undefined) {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public get oSEXTSRVATTRHostname(): string | undefined {
        return this['OS-EXT-SRV-ATTR:hostname'];
    }
    public withOSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string): NovaServer {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
        return this;
    }
    public set oSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
    }
    public get oSEXTSRVATTRReservationId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:reservation_id'];
    }
    public withOSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number): NovaServer {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
        return this;
    }
    public set oSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number  | undefined) {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
    }
    public get oSEXTSRVATTRLaunchIndex(): number | undefined {
        return this['OS-EXT-SRV-ATTR:launch_index'];
    }
    public withOSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string): NovaServer {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
        return this;
    }
    public set oSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
    }
    public get oSEXTSRVATTRKernelId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:kernel_id'];
    }
    public withOSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string): NovaServer {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
        return this;
    }
    public set oSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string  | undefined) {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
    }
    public get oSEXTSRVATTRRamdiskId(): string | undefined {
        return this['OS-EXT-SRV-ATTR:ramdisk_id'];
    }
    public withOSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string): NovaServer {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
        return this;
    }
    public set oSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string  | undefined) {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
    }
    public get oSEXTSRVATTRRootDeviceName(): string | undefined {
        return this['OS-EXT-SRV-ATTR:root_device_name'];
    }
    public withOSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string): NovaServer {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
        return this;
    }
    public set oSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string  | undefined) {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
    }
    public get oSEXTSRVATTRUserData(): string | undefined {
        return this['OS-EXT-SRV-ATTR:user_data'];
    }
    public withTags(tags: Array<string>): NovaServer {
        this['tags'] = tags;
        return this;
    }
    public withLocked(locked: boolean): NovaServer {
        this['locked'] = locked;
        return this;
    }
    public withAccessIPv4(accessIPv4: string): NovaServer {
        this['accessIPv4'] = accessIPv4;
        return this;
    }
    public withAccessIPv6(accessIPv6: string): NovaServer {
        this['accessIPv6'] = accessIPv6;
        return this;
    }
    public withConfigDrive(configDrive: string): NovaServer {
        this['config_drive'] = configDrive;
        return this;
    }
    public set configDrive(configDrive: string  | undefined) {
        this['config_drive'] = configDrive;
    }
    public get configDrive(): string | undefined {
        return this['config_drive'];
    }
    public withProgress(progress: number): NovaServer {
        this['progress'] = progress;
        return this;
    }
    public withOsSchedulerHints(osSchedulerHints: NovaServerSchedulerHints): NovaServer {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: NovaServerSchedulerHints  | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints(): NovaServerSchedulerHints | undefined {
        return this['os:scheduler_hints'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaServerStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = ' BUILD',
    DELETED = 'DELETED',
    ERROR = 'ERROR',
    HARD_REBOOT = 'HARD_REBOOT',
    MIGRATING = 'MIGRATING',
    REBOOT = 'REBOOT',
    RESIZE = 'RESIZE',
    REVERT_RESIZE = 'REVERT_RESIZE',
    SHELVED = 'SHELVED',
    SHELVED_OFFLOADED = 'SHELVED_OFFLOADED',
    SHUTOFF = 'SHUTOFF',
    UNKNOWN = 'UNKNOWN',
    VERIFY_RESIZE = 'VERIFY_RESIZE'
}
/**
    * @export
    * @enum {string}
    */
export enum NovaServerOSDCFDiskConfigEnum {
    AUTO = 'AUTO',
    MANUAL = 'MANUAL'
}
/**
    * @export
    * @enum {string}
    */
export enum NovaServerOSEXTSTSTaskStateEnum {
    SHOUTOFF = 'SHOUTOFF',
    RESIZE = ' RESIZE',
    REBUILD = ' REBUILD',
    VERIFY_RESIZE = ' VERIFY_RESIZE',
    REVERT_RESIZE = ' REVERT_RESIZE',
    PAUSED = ' PAUSED',
    MIGRATING = ' MIGRATING',
    SUSPENDED = ' SUSPENDED',
    RESCUE = ' RESCUE',
    ERROR = ' ERROR',
    DELETED = ' DELETED',
    SOFT_DELETED = 'SOFT_DELETED',
    SHELVED = 'SHELVED',
    SHELVED_OFFLOADED = 'SHELVED_OFFLOADED'
}
/**
    * @export
    * @enum {string}
    */
export enum NovaServerOSEXTSTSVmStateEnum {
    ACTIVE = 'ACTIVE',
    BUILDING = 'BUILDING',
    STOPPED = 'STOPPED',
    RESIZED = 'RESIZED',
    PAUSED = 'PAUSED',
    SUSPENDED = 'SUSPENDED',
    RESCUED = 'RESCUED',
    ERROR = 'ERROR',
    DELETED = 'DELETED',
    SOFT_DELETED = 'SOFT_DELETED',
    SHELVED = 'SHELVED',
    SHELVED_OFFLOADED = 'SHELVED_OFFLOADED'
}
/**
    * @export
    * @enum {string}
    */
export enum NovaServerHostStatusEnum {
    UP = 'UP',
    UNKNOWN = 'UNKNOWN',
    DOWN = 'DOWN',
    MAINTENANCE = 'MAINTENANCE'
}
