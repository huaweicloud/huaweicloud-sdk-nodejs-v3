import { BtrfsFileSystem } from './BtrfsFileSystem';
import { NetWork } from './NetWork';
import { VolumeGroups } from './VolumeGroups';


export class Server {
    public id?: string;
    public ip?: string;
    public name?: string;
    public hostname?: string;
    private 'os_type'?: ServerOsTypeEnum | string;
    private 'os_version'?: string;
    public firmware?: ServerFirmwareEnum | string;
    private 'cpu_quantity'?: number;
    public memory?: number;
    private 'btrfs_list'?: Array<BtrfsFileSystem>;
    public networks?: Array<NetWork>;
    private 'domain_id'?: string;
    private 'has_rsync'?: boolean;
    public paravirtualization?: boolean;
    private 'raw_devices'?: string;
    private 'driver_files'?: boolean;
    private 'system_services'?: boolean;
    private 'account_rights'?: boolean;
    private 'boot_loader'?: ServerBootLoaderEnum | string;
    private 'system_dir'?: string;
    private 'volume_groups'?: Array<VolumeGroups>;
    public constructor() { 
    }
    public withId(id: string): Server {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): Server {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): Server {
        this['name'] = name;
        return this;
    }
    public withHostname(hostname: string): Server {
        this['hostname'] = hostname;
        return this;
    }
    public withOsType(osType: ServerOsTypeEnum | string): Server {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ServerOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): ServerOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): Server {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withFirmware(firmware: ServerFirmwareEnum | string): Server {
        this['firmware'] = firmware;
        return this;
    }
    public withCpuQuantity(cpuQuantity: number): Server {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number  | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity(): number | undefined {
        return this['cpu_quantity'];
    }
    public withMemory(memory: number): Server {
        this['memory'] = memory;
        return this;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): Server {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem>  | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList(): Array<BtrfsFileSystem> | undefined {
        return this['btrfs_list'];
    }
    public withNetworks(networks: Array<NetWork>): Server {
        this['networks'] = networks;
        return this;
    }
    public withDomainId(domainId: string): Server {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withHasRsync(hasRsync: boolean): Server {
        this['has_rsync'] = hasRsync;
        return this;
    }
    public set hasRsync(hasRsync: boolean  | undefined) {
        this['has_rsync'] = hasRsync;
    }
    public get hasRsync(): boolean | undefined {
        return this['has_rsync'];
    }
    public withParavirtualization(paravirtualization: boolean): Server {
        this['paravirtualization'] = paravirtualization;
        return this;
    }
    public withRawDevices(rawDevices: string): Server {
        this['raw_devices'] = rawDevices;
        return this;
    }
    public set rawDevices(rawDevices: string  | undefined) {
        this['raw_devices'] = rawDevices;
    }
    public get rawDevices(): string | undefined {
        return this['raw_devices'];
    }
    public withDriverFiles(driverFiles: boolean): Server {
        this['driver_files'] = driverFiles;
        return this;
    }
    public set driverFiles(driverFiles: boolean  | undefined) {
        this['driver_files'] = driverFiles;
    }
    public get driverFiles(): boolean | undefined {
        return this['driver_files'];
    }
    public withSystemServices(systemServices: boolean): Server {
        this['system_services'] = systemServices;
        return this;
    }
    public set systemServices(systemServices: boolean  | undefined) {
        this['system_services'] = systemServices;
    }
    public get systemServices(): boolean | undefined {
        return this['system_services'];
    }
    public withAccountRights(accountRights: boolean): Server {
        this['account_rights'] = accountRights;
        return this;
    }
    public set accountRights(accountRights: boolean  | undefined) {
        this['account_rights'] = accountRights;
    }
    public get accountRights(): boolean | undefined {
        return this['account_rights'];
    }
    public withBootLoader(bootLoader: ServerBootLoaderEnum | string): Server {
        this['boot_loader'] = bootLoader;
        return this;
    }
    public set bootLoader(bootLoader: ServerBootLoaderEnum | string  | undefined) {
        this['boot_loader'] = bootLoader;
    }
    public get bootLoader(): ServerBootLoaderEnum | string | undefined {
        return this['boot_loader'];
    }
    public withSystemDir(systemDir: string): Server {
        this['system_dir'] = systemDir;
        return this;
    }
    public set systemDir(systemDir: string  | undefined) {
        this['system_dir'] = systemDir;
    }
    public get systemDir(): string | undefined {
        return this['system_dir'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): Server {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<VolumeGroups> | undefined {
        return this['volume_groups'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerFirmwareEnum {
    BIOS = 'BIOS',
    UEFI = 'UEFI'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerBootLoaderEnum {
    GRUB = 'GRUB',
    LILO = 'LILO'
}
