import { BtrfsFileSystem } from './BtrfsFileSystem';
import { NetWork } from './NetWork';
import { ServerDisk } from './ServerDisk';
import { VolumeGroups } from './VolumeGroups';


export class PostSourceServerBody {
    public id?: string;
    public ip: string;
    public name: string;
    public hostname?: string;
    private 'os_type': PostSourceServerBodyOsTypeEnum | undefined;
    private 'os_version'?: string | undefined;
    private 'virtualization_type'?: string | undefined;
    private 'linux_block_check'?: string | undefined;
    public firmware?: PostSourceServerBodyFirmwareEnum;
    private 'cpu_quantity'?: number | undefined;
    public memory?: number;
    public disks?: Array<ServerDisk>;
    private 'btrfs_list'?: Array<BtrfsFileSystem> | undefined;
    public networks?: Array<NetWork>;
    private 'domain_id'?: string | undefined;
    private 'has_rsync'?: boolean | undefined;
    public paravirtualization?: boolean;
    private 'raw_devices'?: string | undefined;
    private 'driver_files'?: boolean | undefined;
    private 'system_services'?: boolean | undefined;
    private 'account_rights'?: boolean | undefined;
    private 'boot_loader'?: PostSourceServerBodyBootLoaderEnum | undefined;
    private 'system_dir'?: string | undefined;
    private 'volume_groups'?: Array<VolumeGroups> | undefined;
    private 'agent_version': string | undefined;
    private 'kernel_version'?: string | undefined;
    private 'migration_cycle'?: PostSourceServerBodyMigrationCycleEnum | undefined;
    public state?: PostSourceServerBodyStateEnum;
    private 'oem_system'?: boolean | undefined;
    public constructor(ip?: any, name?: any, osType?: any, agentVersion?: any) { 
        this['ip'] = ip;
        this['name'] = name;
        this['os_type'] = osType;
        this['agent_version'] = agentVersion;
    }
    public withId(id: string): PostSourceServerBody {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): PostSourceServerBody {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): PostSourceServerBody {
        this['name'] = name;
        return this;
    }
    public withHostname(hostname: string): PostSourceServerBody {
        this['hostname'] = hostname;
        return this;
    }
    public withOsType(osType: PostSourceServerBodyOsTypeEnum): PostSourceServerBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: PostSourceServerBodyOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): PostSourceServerBody {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
    public withVirtualizationType(virtualizationType: string): PostSourceServerBody {
        this['virtualization_type'] = virtualizationType;
        return this;
    }
    public set virtualizationType(virtualizationType: string | undefined) {
        this['virtualization_type'] = virtualizationType;
    }
    public get virtualizationType() {
        return this['virtualization_type'];
    }
    public withLinuxBlockCheck(linuxBlockCheck: string): PostSourceServerBody {
        this['linux_block_check'] = linuxBlockCheck;
        return this;
    }
    public set linuxBlockCheck(linuxBlockCheck: string | undefined) {
        this['linux_block_check'] = linuxBlockCheck;
    }
    public get linuxBlockCheck() {
        return this['linux_block_check'];
    }
    public withFirmware(firmware: PostSourceServerBodyFirmwareEnum): PostSourceServerBody {
        this['firmware'] = firmware;
        return this;
    }
    public withCpuQuantity(cpuQuantity: number): PostSourceServerBody {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity() {
        return this['cpu_quantity'];
    }
    public withMemory(memory: number): PostSourceServerBody {
        this['memory'] = memory;
        return this;
    }
    public withDisks(disks: Array<ServerDisk>): PostSourceServerBody {
        this['disks'] = disks;
        return this;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): PostSourceServerBody {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem> | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList() {
        return this['btrfs_list'];
    }
    public withNetworks(networks: Array<NetWork>): PostSourceServerBody {
        this['networks'] = networks;
        return this;
    }
    public withDomainId(domainId: string): PostSourceServerBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withHasRsync(hasRsync: boolean): PostSourceServerBody {
        this['has_rsync'] = hasRsync;
        return this;
    }
    public set hasRsync(hasRsync: boolean | undefined) {
        this['has_rsync'] = hasRsync;
    }
    public get hasRsync() {
        return this['has_rsync'];
    }
    public withParavirtualization(paravirtualization: boolean): PostSourceServerBody {
        this['paravirtualization'] = paravirtualization;
        return this;
    }
    public withRawDevices(rawDevices: string): PostSourceServerBody {
        this['raw_devices'] = rawDevices;
        return this;
    }
    public set rawDevices(rawDevices: string | undefined) {
        this['raw_devices'] = rawDevices;
    }
    public get rawDevices() {
        return this['raw_devices'];
    }
    public withDriverFiles(driverFiles: boolean): PostSourceServerBody {
        this['driver_files'] = driverFiles;
        return this;
    }
    public set driverFiles(driverFiles: boolean | undefined) {
        this['driver_files'] = driverFiles;
    }
    public get driverFiles() {
        return this['driver_files'];
    }
    public withSystemServices(systemServices: boolean): PostSourceServerBody {
        this['system_services'] = systemServices;
        return this;
    }
    public set systemServices(systemServices: boolean | undefined) {
        this['system_services'] = systemServices;
    }
    public get systemServices() {
        return this['system_services'];
    }
    public withAccountRights(accountRights: boolean): PostSourceServerBody {
        this['account_rights'] = accountRights;
        return this;
    }
    public set accountRights(accountRights: boolean | undefined) {
        this['account_rights'] = accountRights;
    }
    public get accountRights() {
        return this['account_rights'];
    }
    public withBootLoader(bootLoader: PostSourceServerBodyBootLoaderEnum): PostSourceServerBody {
        this['boot_loader'] = bootLoader;
        return this;
    }
    public set bootLoader(bootLoader: PostSourceServerBodyBootLoaderEnum | undefined) {
        this['boot_loader'] = bootLoader;
    }
    public get bootLoader() {
        return this['boot_loader'];
    }
    public withSystemDir(systemDir: string): PostSourceServerBody {
        this['system_dir'] = systemDir;
        return this;
    }
    public set systemDir(systemDir: string | undefined) {
        this['system_dir'] = systemDir;
    }
    public get systemDir() {
        return this['system_dir'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): PostSourceServerBody {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups> | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups() {
        return this['volume_groups'];
    }
    public withAgentVersion(agentVersion: string): PostSourceServerBody {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion() {
        return this['agent_version'];
    }
    public withKernelVersion(kernelVersion: string): PostSourceServerBody {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion() {
        return this['kernel_version'];
    }
    public withMigrationCycle(migrationCycle: PostSourceServerBodyMigrationCycleEnum): PostSourceServerBody {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: PostSourceServerBodyMigrationCycleEnum | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle() {
        return this['migration_cycle'];
    }
    public withState(state: PostSourceServerBodyStateEnum): PostSourceServerBody {
        this['state'] = state;
        return this;
    }
    public withOemSystem(oemSystem: boolean): PostSourceServerBody {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem() {
        return this['oem_system'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostSourceServerBodyOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum PostSourceServerBodyFirmwareEnum {
    BIOS = 'BIOS',
    UEFI = 'UEFI'
}
/**
    * @export
    * @enum {string}
    */
export enum PostSourceServerBodyBootLoaderEnum {
    GRUB = 'GRUB',
    LILO = 'LILO'
}
/**
    * @export
    * @enum {string}
    */
export enum PostSourceServerBodyMigrationCycleEnum {
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered',
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing'
}
/**
    * @export
    * @enum {string}
    */
export enum PostSourceServerBodyStateEnum {
    UNAVAILABLE = 'unavailable',
    WAITING = 'waiting',
    INITIALIZE = 'initialize',
    REPLICATE = 'replicate',
    SYNCING = 'syncing',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    DELETING = 'deleting',
    ERROR = 'error',
    CLONING = 'cloning',
    CUTOVERING = 'cutovering',
    FINISHED = 'finished'
}
