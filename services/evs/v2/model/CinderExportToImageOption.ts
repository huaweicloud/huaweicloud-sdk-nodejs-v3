

export class CinderExportToImageOption {
    private 'container_format'?: CinderExportToImageOptionContainerFormatEnum | undefined;
    private 'disk_format'?: CinderExportToImageOptionDiskFormatEnum | undefined;
    public force?: boolean;
    private 'image_name': string | undefined;
    private '__os_type'?: CinderExportToImageOptionOsTypeEnum | undefined;
    public constructor(imageName?: any) { 
        this['image_name'] = imageName;
    }
    public withContainerFormat(containerFormat: CinderExportToImageOptionContainerFormatEnum): CinderExportToImageOption {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: CinderExportToImageOptionContainerFormatEnum | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withDiskFormat(diskFormat: CinderExportToImageOptionDiskFormatEnum): CinderExportToImageOption {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: CinderExportToImageOptionDiskFormatEnum | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withForce(force: boolean): CinderExportToImageOption {
        this['force'] = force;
        return this;
    }
    public withImageName(imageName: string): CinderExportToImageOption {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
    public withOsType(osType: CinderExportToImageOptionOsTypeEnum): CinderExportToImageOption {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: CinderExportToImageOptionOsTypeEnum | undefined) {
        this['__os_type'] = osType;
    }
    public get osType() {
        return this['__os_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CinderExportToImageOptionContainerFormatEnum {
    AMI = 'ami',
    ARI = 'ari',
    AKI = 'aki',
    OVF = 'ovf',
    BARE = 'bare'
}
/**
    * @export
    * @enum {string}
    */
export enum CinderExportToImageOptionDiskFormatEnum {
    VHD = 'vhd',
    ZVHD = 'zvhd',
    ZVHD2 = 'zvhd2',
    RAW = 'raw',
    QCOW2 = 'qcow2'
}
/**
    * @export
    * @enum {string}
    */
export enum CinderExportToImageOptionOsTypeEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
