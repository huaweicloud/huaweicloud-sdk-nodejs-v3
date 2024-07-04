import { BtrfsFileSystem } from './BtrfsFileSystem';
import { NetWork } from './NetWork';
import { ServerDisk } from './ServerDisk';
import { VolumeGroups } from './VolumeGroups';


export class PostSourceServerBody {
    public id?: string;
    public ip?: string;
    public name?: string;
    public hostname?: string;
    private 'os_type'?: PostSourceServerBodyOsTypeEnum | string;
    private 'os_version'?: string;
    private 'virtualization_type'?: string;
    private 'linux_block_check'?: string;
    public firmware?: PostSourceServerBodyFirmwareEnum | string;
    private 'cpu_quantity'?: number;
    public memory?: number;
    public disks?: Array<ServerDisk>;
    private 'btrfs_list'?: Array<BtrfsFileSystem>;
    public networks?: Array<NetWork>;
    private 'domain_id'?: string;
    private 'has_rsync'?: boolean;
    public paravirtualization?: boolean;
    private 'raw_devices'?: string;
    private 'driver_files'?: boolean;
    private 'system_services'?: boolean;
    private 'account_rights'?: boolean;
    private 'boot_loader'?: PostSourceServerBodyBootLoaderEnum | string;
    private 'system_dir'?: string;
    private 'volume_groups'?: Array<VolumeGroups>;
    private 'agent_version'?: string;
    private 'kernel_version'?: string;
    private 'migration_cycle'?: PostSourceServerBodyMigrationCycleEnum | string;
    public state?: PostSourceServerBodyStateEnum | string;
    private 'oem_system'?: boolean;
    private 'start_type'?: PostSourceServerBodyStartTypeEnum | string;
    private 'io_read_wait'?: number;
    public constructor() { 
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
    public withOsType(osType: PostSourceServerBodyOsTypeEnum | string): PostSourceServerBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: PostSourceServerBodyOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): PostSourceServerBodyOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): PostSourceServerBody {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withVirtualizationType(virtualizationType: string): PostSourceServerBody {
        this['virtualization_type'] = virtualizationType;
        return this;
    }
    public set virtualizationType(virtualizationType: string  | undefined) {
        this['virtualization_type'] = virtualizationType;
    }
    public get virtualizationType(): string | undefined {
        return this['virtualization_type'];
    }
    public withLinuxBlockCheck(linuxBlockCheck: string): PostSourceServerBody {
        this['linux_block_check'] = linuxBlockCheck;
        return this;
    }
    public set linuxBlockCheck(linuxBlockCheck: string  | undefined) {
        this['linux_block_check'] = linuxBlockCheck;
    }
    public get linuxBlockCheck(): string | undefined {
        return this['linux_block_check'];
    }
    public withFirmware(firmware: PostSourceServerBodyFirmwareEnum | string): PostSourceServerBody {
        this['firmware'] = firmware;
        return this;
    }
    public withCpuQuantity(cpuQuantity: number): PostSourceServerBody {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number  | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity(): number | undefined {
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
    public set btrfsList(btrfsList: Array<BtrfsFileSystem>  | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList(): Array<BtrfsFileSystem> | undefined {
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
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withHasRsync(hasRsync: boolean): PostSourceServerBody {
        this['has_rsync'] = hasRsync;
        return this;
    }
    public set hasRsync(hasRsync: boolean  | undefined) {
        this['has_rsync'] = hasRsync;
    }
    public get hasRsync(): boolean | undefined {
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
    public set rawDevices(rawDevices: string  | undefined) {
        this['raw_devices'] = rawDevices;
    }
    public get rawDevices(): string | undefined {
        return this['raw_devices'];
    }
    public withDriverFiles(driverFiles: boolean): PostSourceServerBody {
        this['driver_files'] = driverFiles;
        return this;
    }
    public set driverFiles(driverFiles: boolean  | undefined) {
        this['driver_files'] = driverFiles;
    }
    public get driverFiles(): boolean | undefined {
        return this['driver_files'];
    }
    public withSystemServices(systemServices: boolean): PostSourceServerBody {
        this['system_services'] = systemServices;
        return this;
    }
    public set systemServices(systemServices: boolean  | undefined) {
        this['system_services'] = systemServices;
    }
    public get systemServices(): boolean | undefined {
        return this['system_services'];
    }
    public withAccountRights(accountRights: boolean): PostSourceServerBody {
        this['account_rights'] = accountRights;
        return this;
    }
    public set accountRights(accountRights: boolean  | undefined) {
        this['account_rights'] = accountRights;
    }
    public get accountRights(): boolean | undefined {
        return this['account_rights'];
    }
    public withBootLoader(bootLoader: PostSourceServerBodyBootLoaderEnum | string): PostSourceServerBody {
        this['boot_loader'] = bootLoader;
        return this;
    }
    public set bootLoader(bootLoader: PostSourceServerBodyBootLoaderEnum | string  | undefined) {
        this['boot_loader'] = bootLoader;
    }
    public get bootLoader(): PostSourceServerBodyBootLoaderEnum | string | undefined {
        return this['boot_loader'];
    }
    public withSystemDir(systemDir: string): PostSourceServerBody {
        this['system_dir'] = systemDir;
        return this;
    }
    public set systemDir(systemDir: string  | undefined) {
        this['system_dir'] = systemDir;
    }
    public get systemDir(): string | undefined {
        return this['system_dir'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): PostSourceServerBody {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<VolumeGroups> | undefined {
        return this['volume_groups'];
    }
    public withAgentVersion(agentVersion: string): PostSourceServerBody {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withKernelVersion(kernelVersion: string): PostSourceServerBody {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withMigrationCycle(migrationCycle: PostSourceServerBodyMigrationCycleEnum | string): PostSourceServerBody {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: PostSourceServerBodyMigrationCycleEnum | string  | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle(): PostSourceServerBodyMigrationCycleEnum | string | undefined {
        return this['migration_cycle'];
    }
    public withState(state: PostSourceServerBodyStateEnum | string): PostSourceServerBody {
        this['state'] = state;
        return this;
    }
    public withOemSystem(oemSystem: boolean): PostSourceServerBody {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean  | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem(): boolean | undefined {
        return this['oem_system'];
    }
    public withStartType(startType: PostSourceServerBodyStartTypeEnum | string): PostSourceServerBody {
        this['start_type'] = startType;
        return this;
    }
    public set startType(startType: PostSourceServerBodyStartTypeEnum | string  | undefined) {
        this['start_type'] = startType;
    }
    public get startType(): PostSourceServerBodyStartTypeEnum | string | undefined {
        return this['start_type'];
    }
    public withIoReadWait(ioReadWait: number): PostSourceServerBody {
        this['io_read_wait'] = ioReadWait;
        return this;
    }
    public set ioReadWait(ioReadWait: number  | undefined) {
        this['io_read_wait'] = ioReadWait;
    }
    public get ioReadWait(): number | undefined {
        return this['io_read_wait'];
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
/**
    * @export
    * @enum {string}
    */
export enum PostSourceServerBodyStartTypeEnum {
    MANUAL = 'MANUAL',
    MGC = 'MGC',
    Empty = ''
}
