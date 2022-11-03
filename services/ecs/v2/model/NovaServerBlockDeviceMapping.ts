

export class NovaServerBlockDeviceMapping {
    private 'source_type': NovaServerBlockDeviceMappingSourceTypeEnum | undefined;
    private 'destination_type'?: NovaServerBlockDeviceMappingDestinationTypeEnum | undefined;
    private 'guest_format'?: string | undefined;
    private 'device_name'?: string | undefined;
    private 'delete_on_termination'?: boolean | undefined;
    private 'boot_index'?: string | undefined;
    public uuid?: string;
    private 'volume_size'?: number | undefined;
    private 'volume_type'?: string | undefined;
    public constructor(sourceType?: any) { 
        this['source_type'] = sourceType;
    }
    public withSourceType(sourceType: NovaServerBlockDeviceMappingSourceTypeEnum): NovaServerBlockDeviceMapping {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: NovaServerBlockDeviceMappingSourceTypeEnum | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType() {
        return this['source_type'];
    }
    public withDestinationType(destinationType: NovaServerBlockDeviceMappingDestinationTypeEnum): NovaServerBlockDeviceMapping {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: NovaServerBlockDeviceMappingDestinationTypeEnum | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType() {
        return this['destination_type'];
    }
    public withGuestFormat(guestFormat: string): NovaServerBlockDeviceMapping {
        this['guest_format'] = guestFormat;
        return this;
    }
    public set guestFormat(guestFormat: string | undefined) {
        this['guest_format'] = guestFormat;
    }
    public get guestFormat() {
        return this['guest_format'];
    }
    public withDeviceName(deviceName: string): NovaServerBlockDeviceMapping {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): NovaServerBlockDeviceMapping {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination() {
        return this['delete_on_termination'];
    }
    public withBootIndex(bootIndex: string): NovaServerBlockDeviceMapping {
        this['boot_index'] = bootIndex;
        return this;
    }
    public set bootIndex(bootIndex: string | undefined) {
        this['boot_index'] = bootIndex;
    }
    public get bootIndex() {
        return this['boot_index'];
    }
    public withUuid(uuid: string): NovaServerBlockDeviceMapping {
        this['uuid'] = uuid;
        return this;
    }
    public withVolumeSize(volumeSize: number): NovaServerBlockDeviceMapping {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize() {
        return this['volume_size'];
    }
    public withVolumeType(volumeType: string): NovaServerBlockDeviceMapping {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaServerBlockDeviceMappingSourceTypeEnum {
    BLANK = 'blank',
    SNAPSHOT = 'snapshot',
    VOLUME = 'volume',
    IMAGE = 'image'
}
/**
    * @export
    * @enum {string}
    */
export enum NovaServerBlockDeviceMappingDestinationTypeEnum {
    VOLUME = 'volume'
}
