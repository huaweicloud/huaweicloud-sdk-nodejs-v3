

export class NovaServerBlockDeviceMapping {
    private 'source_type'?: NovaServerBlockDeviceMappingSourceTypeEnum | string;
    private 'destination_type'?: NovaServerBlockDeviceMappingDestinationTypeEnum | string;
    private 'guest_format'?: string;
    private 'device_name'?: string;
    private 'delete_on_termination'?: boolean;
    private 'boot_index'?: string;
    public uuid?: string;
    private 'volume_size'?: number;
    private 'volume_type'?: string;
    public constructor(sourceType?: string) { 
        this['source_type'] = sourceType;
    }
    public withSourceType(sourceType: NovaServerBlockDeviceMappingSourceTypeEnum | string): NovaServerBlockDeviceMapping {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: NovaServerBlockDeviceMappingSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): NovaServerBlockDeviceMappingSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withDestinationType(destinationType: NovaServerBlockDeviceMappingDestinationTypeEnum | string): NovaServerBlockDeviceMapping {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: NovaServerBlockDeviceMappingDestinationTypeEnum | string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): NovaServerBlockDeviceMappingDestinationTypeEnum | string | undefined {
        return this['destination_type'];
    }
    public withGuestFormat(guestFormat: string): NovaServerBlockDeviceMapping {
        this['guest_format'] = guestFormat;
        return this;
    }
    public set guestFormat(guestFormat: string  | undefined) {
        this['guest_format'] = guestFormat;
    }
    public get guestFormat(): string | undefined {
        return this['guest_format'];
    }
    public withDeviceName(deviceName: string): NovaServerBlockDeviceMapping {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): NovaServerBlockDeviceMapping {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
    public withBootIndex(bootIndex: string): NovaServerBlockDeviceMapping {
        this['boot_index'] = bootIndex;
        return this;
    }
    public set bootIndex(bootIndex: string  | undefined) {
        this['boot_index'] = bootIndex;
    }
    public get bootIndex(): string | undefined {
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
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withVolumeType(volumeType: string): NovaServerBlockDeviceMapping {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
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
