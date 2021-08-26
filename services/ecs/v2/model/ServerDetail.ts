import { CpuOptions } from './CpuOptions';
import { Hypervisor } from './Hypervisor';
import { ServerAddress } from './ServerAddress';
import { ServerExtendVolumeAttachment } from './ServerExtendVolumeAttachment';
import { ServerFault } from './ServerFault';
import { ServerFlavor } from './ServerFlavor';
import { ServerImage } from './ServerImage';
import { ServerSchedulerHints } from './ServerSchedulerHints';
import { ServerSecurityGroup } from './ServerSecurityGroup';
import { ServerSystemTag } from './ServerSystemTag';


export class ServerDetail {
    public status: string;
    public updated: string;
    private 'auto_terminate_time': string | undefined;
    public hostId: string;
    private 'OS-EXT-SRV-ATTR:host': string | undefined;
    public addresses: { [key: string]: Array<ServerAddress>; };
    private 'key_name': string | undefined;
    public image: ServerImage;
    private 'OS-EXT-STS:task_state': string | undefined;
    private 'OS-EXT-STS:vm_state': string | undefined;
    private 'OS-EXT-SRV-ATTR:instance_name': string | undefined;
    private 'OS-EXT-SRV-ATTR:hypervisor_hostname': string | undefined;
    public flavor: ServerFlavor;
    public id: string;
    private 'security_groups': Array<ServerSecurityGroup> | undefined;
    private 'OS-EXT-AZ:availability_zone': string | undefined;
    private 'user_id': string | undefined;
    public name: string;
    public created: string;
    private 'tenant_id': string | undefined;
    private 'OS-DCF:diskConfig'?: string | undefined;
    public accessIPv4: string;
    public accessIPv6: string;
    public fault?: ServerFault;
    public progress?: number;
    private 'OS-EXT-STS:power_state': number | undefined;
    private 'config_drive': string | undefined;
    public metadata: { [key: string]: string; };
    private 'OS-SRV-USG:launched_at': string | undefined;
    private 'OS-SRV-USG:terminated_at': string | undefined;
    private 'os-extended-volumes:volumes_attached': Array<ServerExtendVolumeAttachment> | undefined;
    public description?: string;
    private 'host_status': string | undefined;
    private 'OS-EXT-SRV-ATTR:hostname': string | undefined;
    private 'OS-EXT-SRV-ATTR:reservation_id'?: string | undefined;
    private 'OS-EXT-SRV-ATTR:launch_index': number | undefined;
    private 'OS-EXT-SRV-ATTR:kernel_id': string | undefined;
    private 'OS-EXT-SRV-ATTR:ramdisk_id': string | undefined;
    private 'OS-EXT-SRV-ATTR:root_device_name': string | undefined;
    private 'OS-EXT-SRV-ATTR:user_data'?: string | undefined;
    public locked: boolean;
    public tags?: Array<string>;
    private 'os:scheduler_hints'?: ServerSchedulerHints | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'sys_tags'?: Array<ServerSystemTag> | undefined;
    private 'cpu_options'?: CpuOptions | undefined;
    public hypervisor?: Hypervisor;
    public constructor(status?: any, updated?: any, autoTerminateTime?: any, hostId?: any, oSEXTSRVATTRHost?: any, addresses?: any, keyName?: any, image?: any, oSEXTSTSTaskState?: any, oSEXTSTSVmState?: any, oSEXTSRVATTRInstanceName?: any, oSEXTSRVATTRHypervisorHostname?: any, flavor?: any, id?: any, securityGroups?: any, oSEXTAZAvailabilityZone?: any, userId?: any, name?: any, created?: any, tenantId?: any, accessIPv4?: any, accessIPv6?: any, oSEXTSTSPowerState?: any, configDrive?: any, metadata?: any, oSSRVUSGLaunchedAt?: any, oSSRVUSGTerminatedAt?: any, osExtendedVolumesVolumesAttached?: any, hostStatus?: any, oSEXTSRVATTRHostname?: any, oSEXTSRVATTRLaunchIndex?: any, oSEXTSRVATTRKernelId?: any, oSEXTSRVATTRRamdiskId?: any, oSEXTSRVATTRRootDeviceName?: any, locked?: any) { 
        this['status'] = status;
        this['updated'] = updated;
        this['auto_terminate_time'] = autoTerminateTime;
        this['hostId'] = hostId;
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
        this['addresses'] = addresses;
        this['key_name'] = keyName;
        this['image'] = image;
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
        this['flavor'] = flavor;
        this['id'] = id;
        this['security_groups'] = securityGroups;
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
        this['user_id'] = userId;
        this['name'] = name;
        this['created'] = created;
        this['tenant_id'] = tenantId;
        this['accessIPv4'] = accessIPv4;
        this['accessIPv6'] = accessIPv6;
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
        this['config_drive'] = configDrive;
        this['metadata'] = metadata;
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
        this['host_status'] = hostStatus;
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
        this['locked'] = locked;
    }
    public withStatus(status: string): ServerDetail {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ServerDetail {
        this['updated'] = updated;
        return this;
    }
    public withAutoTerminateTime(autoTerminateTime: string): ServerDetail {
        this['auto_terminate_time'] = autoTerminateTime;
        return this;
    }
    public set autoTerminateTime(autoTerminateTime: string | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime() {
        return this['auto_terminate_time'];
    }
    public withHostId(hostId: string): ServerDetail {
        this['hostId'] = hostId;
        return this;
    }
    public withOSEXTSRVATTRHost(oSEXTSRVATTRHost: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
        return this;
    }
    public set oSEXTSRVATTRHost(oSEXTSRVATTRHost: string | undefined) {
        this['OS-EXT-SRV-ATTR:host'] = oSEXTSRVATTRHost;
    }
    public get oSEXTSRVATTRHost() {
        return this['OS-EXT-SRV-ATTR:host'];
    }
    public withAddresses(addresses: { [key: string]: Array<ServerAddress>; }): ServerDetail {
        this['addresses'] = addresses;
        return this;
    }
    public withKeyName(keyName: string): ServerDetail {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName() {
        return this['key_name'];
    }
    public withImage(image: ServerImage): ServerDetail {
        this['image'] = image;
        return this;
    }
    public withOSEXTSTSTaskState(oSEXTSTSTaskState: string): ServerDetail {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
        return this;
    }
    public set oSEXTSTSTaskState(oSEXTSTSTaskState: string | undefined) {
        this['OS-EXT-STS:task_state'] = oSEXTSTSTaskState;
    }
    public get oSEXTSTSTaskState() {
        return this['OS-EXT-STS:task_state'];
    }
    public withOSEXTSTSVmState(oSEXTSTSVmState: string): ServerDetail {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
        return this;
    }
    public set oSEXTSTSVmState(oSEXTSTSVmState: string | undefined) {
        this['OS-EXT-STS:vm_state'] = oSEXTSTSVmState;
    }
    public get oSEXTSTSVmState() {
        return this['OS-EXT-STS:vm_state'];
    }
    public withOSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
        return this;
    }
    public set oSEXTSRVATTRInstanceName(oSEXTSRVATTRInstanceName: string | undefined) {
        this['OS-EXT-SRV-ATTR:instance_name'] = oSEXTSRVATTRInstanceName;
    }
    public get oSEXTSRVATTRInstanceName() {
        return this['OS-EXT-SRV-ATTR:instance_name'];
    }
    public withOSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
        return this;
    }
    public set oSEXTSRVATTRHypervisorHostname(oSEXTSRVATTRHypervisorHostname: string | undefined) {
        this['OS-EXT-SRV-ATTR:hypervisor_hostname'] = oSEXTSRVATTRHypervisorHostname;
    }
    public get oSEXTSRVATTRHypervisorHostname() {
        return this['OS-EXT-SRV-ATTR:hypervisor_hostname'];
    }
    public withFlavor(flavor: ServerFlavor): ServerDetail {
        this['flavor'] = flavor;
        return this;
    }
    public withId(id: string): ServerDetail {
        this['id'] = id;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<ServerSecurityGroup>): ServerDetail {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<ServerSecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withOSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string): ServerDetail {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
        return this;
    }
    public set oSEXTAZAvailabilityZone(oSEXTAZAvailabilityZone: string | undefined) {
        this['OS-EXT-AZ:availability_zone'] = oSEXTAZAvailabilityZone;
    }
    public get oSEXTAZAvailabilityZone() {
        return this['OS-EXT-AZ:availability_zone'];
    }
    public withUserId(userId: string): ServerDetail {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withName(name: string): ServerDetail {
        this['name'] = name;
        return this;
    }
    public withCreated(created: string): ServerDetail {
        this['created'] = created;
        return this;
    }
    public withTenantId(tenantId: string): ServerDetail {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: string): ServerDetail {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: string | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig() {
        return this['OS-DCF:diskConfig'];
    }
    public withAccessIPv4(accessIPv4: string): ServerDetail {
        this['accessIPv4'] = accessIPv4;
        return this;
    }
    public withAccessIPv6(accessIPv6: string): ServerDetail {
        this['accessIPv6'] = accessIPv6;
        return this;
    }
    public withFault(fault: ServerFault): ServerDetail {
        this['fault'] = fault;
        return this;
    }
    public withProgress(progress: number): ServerDetail {
        this['progress'] = progress;
        return this;
    }
    public withOSEXTSTSPowerState(oSEXTSTSPowerState: number): ServerDetail {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
        return this;
    }
    public set oSEXTSTSPowerState(oSEXTSTSPowerState: number | undefined) {
        this['OS-EXT-STS:power_state'] = oSEXTSTSPowerState;
    }
    public get oSEXTSTSPowerState() {
        return this['OS-EXT-STS:power_state'];
    }
    public withConfigDrive(configDrive: string): ServerDetail {
        this['config_drive'] = configDrive;
        return this;
    }
    public set configDrive(configDrive: string | undefined) {
        this['config_drive'] = configDrive;
    }
    public get configDrive() {
        return this['config_drive'];
    }
    public withMetadata(metadata: { [key: string]: string; }): ServerDetail {
        this['metadata'] = metadata;
        return this;
    }
    public withOSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: string): ServerDetail {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
        return this;
    }
    public set oSSRVUSGLaunchedAt(oSSRVUSGLaunchedAt: string | undefined) {
        this['OS-SRV-USG:launched_at'] = oSSRVUSGLaunchedAt;
    }
    public get oSSRVUSGLaunchedAt() {
        return this['OS-SRV-USG:launched_at'];
    }
    public withOSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: string): ServerDetail {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
        return this;
    }
    public set oSSRVUSGTerminatedAt(oSSRVUSGTerminatedAt: string | undefined) {
        this['OS-SRV-USG:terminated_at'] = oSSRVUSGTerminatedAt;
    }
    public get oSSRVUSGTerminatedAt() {
        return this['OS-SRV-USG:terminated_at'];
    }
    public withOsExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<ServerExtendVolumeAttachment>): ServerDetail {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
        return this;
    }
    public set osExtendedVolumesVolumesAttached(osExtendedVolumesVolumesAttached: Array<ServerExtendVolumeAttachment> | undefined) {
        this['os-extended-volumes:volumes_attached'] = osExtendedVolumesVolumesAttached;
    }
    public get osExtendedVolumesVolumesAttached() {
        return this['os-extended-volumes:volumes_attached'];
    }
    public withDescription(description: string): ServerDetail {
        this['description'] = description;
        return this;
    }
    public withHostStatus(hostStatus: string): ServerDetail {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus() {
        return this['host_status'];
    }
    public withOSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
        return this;
    }
    public set oSEXTSRVATTRHostname(oSEXTSRVATTRHostname: string | undefined) {
        this['OS-EXT-SRV-ATTR:hostname'] = oSEXTSRVATTRHostname;
    }
    public get oSEXTSRVATTRHostname() {
        return this['OS-EXT-SRV-ATTR:hostname'];
    }
    public withOSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
        return this;
    }
    public set oSEXTSRVATTRReservationId(oSEXTSRVATTRReservationId: string | undefined) {
        this['OS-EXT-SRV-ATTR:reservation_id'] = oSEXTSRVATTRReservationId;
    }
    public get oSEXTSRVATTRReservationId() {
        return this['OS-EXT-SRV-ATTR:reservation_id'];
    }
    public withOSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number): ServerDetail {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
        return this;
    }
    public set oSEXTSRVATTRLaunchIndex(oSEXTSRVATTRLaunchIndex: number | undefined) {
        this['OS-EXT-SRV-ATTR:launch_index'] = oSEXTSRVATTRLaunchIndex;
    }
    public get oSEXTSRVATTRLaunchIndex() {
        return this['OS-EXT-SRV-ATTR:launch_index'];
    }
    public withOSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
        return this;
    }
    public set oSEXTSRVATTRKernelId(oSEXTSRVATTRKernelId: string | undefined) {
        this['OS-EXT-SRV-ATTR:kernel_id'] = oSEXTSRVATTRKernelId;
    }
    public get oSEXTSRVATTRKernelId() {
        return this['OS-EXT-SRV-ATTR:kernel_id'];
    }
    public withOSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
        return this;
    }
    public set oSEXTSRVATTRRamdiskId(oSEXTSRVATTRRamdiskId: string | undefined) {
        this['OS-EXT-SRV-ATTR:ramdisk_id'] = oSEXTSRVATTRRamdiskId;
    }
    public get oSEXTSRVATTRRamdiskId() {
        return this['OS-EXT-SRV-ATTR:ramdisk_id'];
    }
    public withOSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
        return this;
    }
    public set oSEXTSRVATTRRootDeviceName(oSEXTSRVATTRRootDeviceName: string | undefined) {
        this['OS-EXT-SRV-ATTR:root_device_name'] = oSEXTSRVATTRRootDeviceName;
    }
    public get oSEXTSRVATTRRootDeviceName() {
        return this['OS-EXT-SRV-ATTR:root_device_name'];
    }
    public withOSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string): ServerDetail {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
        return this;
    }
    public set oSEXTSRVATTRUserData(oSEXTSRVATTRUserData: string | undefined) {
        this['OS-EXT-SRV-ATTR:user_data'] = oSEXTSRVATTRUserData;
    }
    public get oSEXTSRVATTRUserData() {
        return this['OS-EXT-SRV-ATTR:user_data'];
    }
    public withLocked(locked: boolean): ServerDetail {
        this['locked'] = locked;
        return this;
    }
    public withTags(tags: Array<string>): ServerDetail {
        this['tags'] = tags;
        return this;
    }
    public withOsSchedulerHints(osSchedulerHints: ServerSchedulerHints): ServerDetail {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: ServerSchedulerHints | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints() {
        return this['os:scheduler_hints'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ServerDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withSysTags(sysTags: Array<ServerSystemTag>): ServerDetail {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ServerSystemTag> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
    public withCpuOptions(cpuOptions: CpuOptions): ServerDetail {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions() {
        return this['cpu_options'];
    }
    public withHypervisor(hypervisor: Hypervisor): ServerDetail {
        this['hypervisor'] = hypervisor;
        return this;
    }
}