import { BtrfsFileSystem } from './BtrfsFileSystem';
import { NetWork } from './NetWork';
import { Server } from './Server';
import { TargetDisk } from './TargetDisk';
import { VolumeGroups } from './VolumeGroups';


export class TargetServer {
    public id?: string;
    public ip?: string;
    public name?: string;
    public hostname?: string;
    private 'os_type'?: TargetServerOsTypeEnum | string;
    private 'os_version'?: string;
    public firmware?: TargetServerFirmwareEnum | string;
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
    private 'boot_loader'?: TargetServerBootLoaderEnum | string;
    private 'system_dir'?: string;
    private 'volume_groups'?: Array<VolumeGroups>;
    private 'vm_id'?: string;
    public flavor?: string;
    public disks?: Array<TargetDisk>;
    private 'image_disk_id'?: string;
    private 'snapshot_ids'?: string;
    private 'cutovered_snapshot_ids'?: string;
    public constructor(ip?: string, name?: string, osType?: string, disks?: Array<TargetDisk>) { 
        this['ip'] = ip;
        this['name'] = name;
        this['os_type'] = osType;
        this['disks'] = disks;
    }
    public withId(id: string): TargetServer {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): TargetServer {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): TargetServer {
        this['name'] = name;
        return this;
    }
    public withHostname(hostname: string): TargetServer {
        this['hostname'] = hostname;
        return this;
    }
    public withOsType(osType: TargetServerOsTypeEnum | string): TargetServer {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: TargetServerOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): TargetServerOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): TargetServer {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withFirmware(firmware: TargetServerFirmwareEnum | string): TargetServer {
        this['firmware'] = firmware;
        return this;
    }
    public withCpuQuantity(cpuQuantity: number): TargetServer {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number  | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity(): number | undefined {
        return this['cpu_quantity'];
    }
    public withMemory(memory: number): TargetServer {
        this['memory'] = memory;
        return this;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): TargetServer {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem>  | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList(): Array<BtrfsFileSystem> | undefined {
        return this['btrfs_list'];
    }
    public withNetworks(networks: Array<NetWork>): TargetServer {
        this['networks'] = networks;
        return this;
    }
    public withDomainId(domainId: string): TargetServer {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withHasRsync(hasRsync: boolean): TargetServer {
        this['has_rsync'] = hasRsync;
        return this;
    }
    public set hasRsync(hasRsync: boolean  | undefined) {
        this['has_rsync'] = hasRsync;
    }
    public get hasRsync(): boolean | undefined {
        return this['has_rsync'];
    }
    public withParavirtualization(paravirtualization: boolean): TargetServer {
        this['paravirtualization'] = paravirtualization;
        return this;
    }
    public withRawDevices(rawDevices: string): TargetServer {
        this['raw_devices'] = rawDevices;
        return this;
    }
    public set rawDevices(rawDevices: string  | undefined) {
        this['raw_devices'] = rawDevices;
    }
    public get rawDevices(): string | undefined {
        return this['raw_devices'];
    }
    public withDriverFiles(driverFiles: boolean): TargetServer {
        this['driver_files'] = driverFiles;
        return this;
    }
    public set driverFiles(driverFiles: boolean  | undefined) {
        this['driver_files'] = driverFiles;
    }
    public get driverFiles(): boolean | undefined {
        return this['driver_files'];
    }
    public withSystemServices(systemServices: boolean): TargetServer {
        this['system_services'] = systemServices;
        return this;
    }
    public set systemServices(systemServices: boolean  | undefined) {
        this['system_services'] = systemServices;
    }
    public get systemServices(): boolean | undefined {
        return this['system_services'];
    }
    public withAccountRights(accountRights: boolean): TargetServer {
        this['account_rights'] = accountRights;
        return this;
    }
    public set accountRights(accountRights: boolean  | undefined) {
        this['account_rights'] = accountRights;
    }
    public get accountRights(): boolean | undefined {
        return this['account_rights'];
    }
    public withBootLoader(bootLoader: TargetServerBootLoaderEnum | string): TargetServer {
        this['boot_loader'] = bootLoader;
        return this;
    }
    public set bootLoader(bootLoader: TargetServerBootLoaderEnum | string  | undefined) {
        this['boot_loader'] = bootLoader;
    }
    public get bootLoader(): TargetServerBootLoaderEnum | string | undefined {
        return this['boot_loader'];
    }
    public withSystemDir(systemDir: string): TargetServer {
        this['system_dir'] = systemDir;
        return this;
    }
    public set systemDir(systemDir: string  | undefined) {
        this['system_dir'] = systemDir;
    }
    public get systemDir(): string | undefined {
        return this['system_dir'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): TargetServer {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<VolumeGroups> | undefined {
        return this['volume_groups'];
    }
    public withVmId(vmId: string): TargetServer {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
    public withFlavor(flavor: string): TargetServer {
        this['flavor'] = flavor;
        return this;
    }
    public withDisks(disks: Array<TargetDisk>): TargetServer {
        this['disks'] = disks;
        return this;
    }
    public withImageDiskId(imageDiskId: string): TargetServer {
        this['image_disk_id'] = imageDiskId;
        return this;
    }
    public set imageDiskId(imageDiskId: string  | undefined) {
        this['image_disk_id'] = imageDiskId;
    }
    public get imageDiskId(): string | undefined {
        return this['image_disk_id'];
    }
    public withSnapshotIds(snapshotIds: string): TargetServer {
        this['snapshot_ids'] = snapshotIds;
        return this;
    }
    public set snapshotIds(snapshotIds: string  | undefined) {
        this['snapshot_ids'] = snapshotIds;
    }
    public get snapshotIds(): string | undefined {
        return this['snapshot_ids'];
    }
    public withCutoveredSnapshotIds(cutoveredSnapshotIds: string): TargetServer {
        this['cutovered_snapshot_ids'] = cutoveredSnapshotIds;
        return this;
    }
    public set cutoveredSnapshotIds(cutoveredSnapshotIds: string  | undefined) {
        this['cutovered_snapshot_ids'] = cutoveredSnapshotIds;
    }
    public get cutoveredSnapshotIds(): string | undefined {
        return this['cutovered_snapshot_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TargetServerOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum TargetServerFirmwareEnum {
    BIOS = 'BIOS',
    UEFI = 'UEFI'
}
/**
    * @export
    * @enum {string}
    */
export enum TargetServerBootLoaderEnum {
    GRUB = 'GRUB',
    LILO = 'LILO'
}
