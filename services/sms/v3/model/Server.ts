import { BtrfsFileSystem } from './BtrfsFileSystem';
import { Disk } from './Disk';
import { NetWork } from './NetWork';
import { VolumeGroups } from './VolumeGroups';


export class Server {
    public id?: string;
    public ip: string;
    public name: string;
    public hostname?: string;
    private 'os_type': ServerOsTypeEnum | undefined;
    private 'os_version'?: string | undefined;
    public firmware?: ServerFirmwareEnum;
    private 'cpu_quantity'?: number | undefined;
    public memory?: number;
    public disks?: Array<Disk>;
    private 'btrfs_list'?: Array<BtrfsFileSystem> | undefined;
    public networks?: Array<NetWork>;
    private 'domain_id'?: string | undefined;
    private 'has_rsync'?: boolean | undefined;
    public paravirtualization?: boolean;
    private 'raw_devices'?: string | undefined;
    private 'driver_files'?: boolean | undefined;
    private 'system_services'?: boolean | undefined;
    private 'account_rights'?: boolean | undefined;
    private 'boot_loader'?: ServerBootLoaderEnum | undefined;
    private 'system_dir'?: string | undefined;
    private 'volume_groups'?: Array<VolumeGroups> | undefined;
    public constructor(ip?: any, name?: any, osType?: any) { 
        this['ip'] = ip;
        this['name'] = name;
        this['os_type'] = osType;
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
    public withOsType(osType: ServerOsTypeEnum): Server {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ServerOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): Server {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
    public withFirmware(firmware: ServerFirmwareEnum): Server {
        this['firmware'] = firmware;
        return this;
    }
    public withCpuQuantity(cpuQuantity: number): Server {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity() {
        return this['cpu_quantity'];
    }
    public withMemory(memory: number): Server {
        this['memory'] = memory;
        return this;
    }
    public withDisks(disks: Array<Disk>): Server {
        this['disks'] = disks;
        return this;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): Server {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem> | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList() {
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
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withHasRsync(hasRsync: boolean): Server {
        this['has_rsync'] = hasRsync;
        return this;
    }
    public set hasRsync(hasRsync: boolean | undefined) {
        this['has_rsync'] = hasRsync;
    }
    public get hasRsync() {
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
    public set rawDevices(rawDevices: string | undefined) {
        this['raw_devices'] = rawDevices;
    }
    public get rawDevices() {
        return this['raw_devices'];
    }
    public withDriverFiles(driverFiles: boolean): Server {
        this['driver_files'] = driverFiles;
        return this;
    }
    public set driverFiles(driverFiles: boolean | undefined) {
        this['driver_files'] = driverFiles;
    }
    public get driverFiles() {
        return this['driver_files'];
    }
    public withSystemServices(systemServices: boolean): Server {
        this['system_services'] = systemServices;
        return this;
    }
    public set systemServices(systemServices: boolean | undefined) {
        this['system_services'] = systemServices;
    }
    public get systemServices() {
        return this['system_services'];
    }
    public withAccountRights(accountRights: boolean): Server {
        this['account_rights'] = accountRights;
        return this;
    }
    public set accountRights(accountRights: boolean | undefined) {
        this['account_rights'] = accountRights;
    }
    public get accountRights() {
        return this['account_rights'];
    }
    public withBootLoader(bootLoader: ServerBootLoaderEnum): Server {
        this['boot_loader'] = bootLoader;
        return this;
    }
    public set bootLoader(bootLoader: ServerBootLoaderEnum | undefined) {
        this['boot_loader'] = bootLoader;
    }
    public get bootLoader() {
        return this['boot_loader'];
    }
    public withSystemDir(systemDir: string): Server {
        this['system_dir'] = systemDir;
        return this;
    }
    public set systemDir(systemDir: string | undefined) {
        this['system_dir'] = systemDir;
    }
    public get systemDir() {
        return this['system_dir'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): Server {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups> | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups() {
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
