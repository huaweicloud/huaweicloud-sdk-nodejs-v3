

export class GlanceCreateImageMetadataRequestBody {
    private '__os_version'?: string | undefined;
    private 'container_format'?: string | undefined;
    private 'disk_format'?: GlanceCreateImageMetadataRequestBodyDiskFormatEnum | undefined;
    private 'min_disk'?: number | undefined;
    private 'min_ram'?: number | undefined;
    public name?: string;
    private 'protected'?: boolean | undefined;
    public tags?: Array<string>;
    public visibility?: string;
    public constructor() { 
    }
    public withOsVersion(osVersion: string): GlanceCreateImageMetadataRequestBody {
        this['__os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['__os_version'] = osVersion;
    }
    public get osVersion() {
        return this['__os_version'];
    }
    public withContainerFormat(containerFormat: string): GlanceCreateImageMetadataRequestBody {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withDiskFormat(diskFormat: GlanceCreateImageMetadataRequestBodyDiskFormatEnum): GlanceCreateImageMetadataRequestBody {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: GlanceCreateImageMetadataRequestBodyDiskFormatEnum | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withMinDisk(minDisk: number): GlanceCreateImageMetadataRequestBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withMinRam(minRam: number): GlanceCreateImageMetadataRequestBody {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam() {
        return this['min_ram'];
    }
    public withName(name: string): GlanceCreateImageMetadataRequestBody {
        this['name'] = name;
        return this;
    }
    public withProtected(_protected: boolean): GlanceCreateImageMetadataRequestBody {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean | undefined) {
        this['protected'] = _protected;
    }
    public get _protected() {
        return this['protected'];
    }
    public withTags(tags: Array<string>): GlanceCreateImageMetadataRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withVisibility(visibility: string): GlanceCreateImageMetadataRequestBody {
        this['visibility'] = visibility;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlanceCreateImageMetadataRequestBodyDiskFormatEnum {
    VHD = 'vhd',
    ZVHD = 'zvhd',
    ZVHD2 = 'zvhd2',
    RAW = 'raw',
    QCOW2 = 'qcow2'
}
