import { NovaServerBlockDeviceMapping } from './NovaServerBlockDeviceMapping';
import { NovaServerNetwork } from './NovaServerNetwork';
import { NovaServerSecurityGroup } from './NovaServerSecurityGroup';


export class NovaCreateServersOption {
    private 'auto_terminate_time'?: string | undefined;
    public imageRef?: string;
    public flavorRef: string;
    public name: string;
    public metadata?: { [key: string]: string; };
    public adminPass?: string;
    private 'block_device_mapping_v2'?: Array<NovaServerBlockDeviceMapping> | undefined;
    private 'config_drive'?: string | undefined;
    private 'security_groups'?: Array<NovaServerSecurityGroup> | undefined;
    public networks: Array<NovaServerNetwork>;
    private 'key_name'?: string | undefined;
    private 'user_data'?: string | undefined;
    private 'availability_zone'?: string | undefined;
    private 'return_reservation_id'?: boolean | undefined;
    private 'min_count'?: number | undefined;
    private 'max_count'?: number | undefined;
    private 'OS-DCF:diskConfig'?: NovaCreateServersOptionOSDCFDiskConfigEnum | undefined;
    public description?: string;
    public constructor(flavorRef?: any, name?: any, networks?: any) { 
        this['flavorRef'] = flavorRef;
        this['name'] = name;
        this['networks'] = networks;
    }
    public withAutoTerminateTime(autoTerminateTime: string): NovaCreateServersOption {
        this['auto_terminate_time'] = autoTerminateTime;
        return this;
    }
    public set autoTerminateTime(autoTerminateTime: string | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime() {
        return this['auto_terminate_time'];
    }
    public withImageRef(imageRef: string): NovaCreateServersOption {
        this['imageRef'] = imageRef;
        return this;
    }
    public withFlavorRef(flavorRef: string): NovaCreateServersOption {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withName(name: string): NovaCreateServersOption {
        this['name'] = name;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): NovaCreateServersOption {
        this['metadata'] = metadata;
        return this;
    }
    public withAdminPass(adminPass: string): NovaCreateServersOption {
        this['adminPass'] = adminPass;
        return this;
    }
    public withBlockDeviceMappingV2(blockDeviceMappingV2: Array<NovaServerBlockDeviceMapping>): NovaCreateServersOption {
        this['block_device_mapping_v2'] = blockDeviceMappingV2;
        return this;
    }
    public set blockDeviceMappingV2(blockDeviceMappingV2: Array<NovaServerBlockDeviceMapping> | undefined) {
        this['block_device_mapping_v2'] = blockDeviceMappingV2;
    }
    public get blockDeviceMappingV2() {
        return this['block_device_mapping_v2'];
    }
    public withConfigDrive(configDrive: string): NovaCreateServersOption {
        this['config_drive'] = configDrive;
        return this;
    }
    public set configDrive(configDrive: string | undefined) {
        this['config_drive'] = configDrive;
    }
    public get configDrive() {
        return this['config_drive'];
    }
    public withSecurityGroups(securityGroups: Array<NovaServerSecurityGroup>): NovaCreateServersOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<NovaServerSecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withNetworks(networks: Array<NovaServerNetwork>): NovaCreateServersOption {
        this['networks'] = networks;
        return this;
    }
    public withKeyName(keyName: string): NovaCreateServersOption {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName() {
        return this['key_name'];
    }
    public withUserData(userData: string): NovaCreateServersOption {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withAvailabilityZone(availabilityZone: string): NovaCreateServersOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withReturnReservationId(returnReservationId: boolean): NovaCreateServersOption {
        this['return_reservation_id'] = returnReservationId;
        return this;
    }
    public set returnReservationId(returnReservationId: boolean | undefined) {
        this['return_reservation_id'] = returnReservationId;
    }
    public get returnReservationId() {
        return this['return_reservation_id'];
    }
    public withMinCount(minCount: number): NovaCreateServersOption {
        this['min_count'] = minCount;
        return this;
    }
    public set minCount(minCount: number | undefined) {
        this['min_count'] = minCount;
    }
    public get minCount() {
        return this['min_count'];
    }
    public withMaxCount(maxCount: number): NovaCreateServersOption {
        this['max_count'] = maxCount;
        return this;
    }
    public set maxCount(maxCount: number | undefined) {
        this['max_count'] = maxCount;
    }
    public get maxCount() {
        return this['max_count'];
    }
    public withOSDCFDiskConfig(oSDCFDiskConfig: NovaCreateServersOptionOSDCFDiskConfigEnum): NovaCreateServersOption {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
        return this;
    }
    public set oSDCFDiskConfig(oSDCFDiskConfig: NovaCreateServersOptionOSDCFDiskConfigEnum | undefined) {
        this['OS-DCF:diskConfig'] = oSDCFDiskConfig;
    }
    public get oSDCFDiskConfig() {
        return this['OS-DCF:diskConfig'];
    }
    public withDescription(description: string): NovaCreateServersOption {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaCreateServersOptionOSDCFDiskConfigEnum {
    AUTO = 'AUTO',
    MANUAL = 'MANUAL'
}
