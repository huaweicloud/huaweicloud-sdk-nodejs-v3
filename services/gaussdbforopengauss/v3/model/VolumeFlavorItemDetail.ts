

export class VolumeFlavorItemDetail {
    private 'io_type'?: VolumeFlavorItemDetailIoTypeEnum | string;
    private 'media_type'?: VolumeFlavorItemDetailMediaTypeEnum | string;
    private 'az_status'?: { [key: string]: string; };
    private 'support_compute_group_type'?: Array<string>;
    public constructor() { 
    }
    public withIoType(ioType: VolumeFlavorItemDetailIoTypeEnum | string): VolumeFlavorItemDetail {
        this['io_type'] = ioType;
        return this;
    }
    public set ioType(ioType: VolumeFlavorItemDetailIoTypeEnum | string  | undefined) {
        this['io_type'] = ioType;
    }
    public get ioType(): VolumeFlavorItemDetailIoTypeEnum | string | undefined {
        return this['io_type'];
    }
    public withMediaType(mediaType: VolumeFlavorItemDetailMediaTypeEnum | string): VolumeFlavorItemDetail {
        this['media_type'] = mediaType;
        return this;
    }
    public set mediaType(mediaType: VolumeFlavorItemDetailMediaTypeEnum | string  | undefined) {
        this['media_type'] = mediaType;
    }
    public get mediaType(): VolumeFlavorItemDetailMediaTypeEnum | string | undefined {
        return this['media_type'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): VolumeFlavorItemDetail {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withSupportComputeGroupType(supportComputeGroupType: Array<string>): VolumeFlavorItemDetail {
        this['support_compute_group_type'] = supportComputeGroupType;
        return this;
    }
    public set supportComputeGroupType(supportComputeGroupType: Array<string>  | undefined) {
        this['support_compute_group_type'] = supportComputeGroupType;
    }
    public get supportComputeGroupType(): Array<string> | undefined {
        return this['support_compute_group_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeFlavorItemDetailIoTypeEnum {
    ULTRAHIGH = 'ULTRAHIGH',
    ESSD = 'ESSD'
}
/**
    * @export
    * @enum {string}
    */
export enum VolumeFlavorItemDetailMediaTypeEnum {
    SAS = 'SAS',
    SSD = 'SSD',
    ESSD = 'ESSD'
}
