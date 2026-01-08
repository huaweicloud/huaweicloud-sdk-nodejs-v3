

export class ImageInfo {
    public id?: string;
    private 'image_type'?: string;
    private 'os_type'?: string;
    public architecture?: string;
    private 'os_version'?: string;
    private 'disk_format'?: string;
    public name?: string;
    private 'min_ram'?: number;
    private 'min_disk'?: number;
    private 'product_code'?: string;
    private 'created_at'?: string;
    private 'kms_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ImageInfo {
        this['id'] = id;
        return this;
    }
    public withImageType(imageType: string): ImageInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withOsType(osType: string): ImageInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withArchitecture(architecture: string): ImageInfo {
        this['architecture'] = architecture;
        return this;
    }
    public withOsVersion(osVersion: string): ImageInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withDiskFormat(diskFormat: string): ImageInfo {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: string  | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat(): string | undefined {
        return this['disk_format'];
    }
    public withName(name: string): ImageInfo {
        this['name'] = name;
        return this;
    }
    public withMinRam(minRam: number): ImageInfo {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withMinDisk(minDisk: number): ImageInfo {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withProductCode(productCode: string): ImageInfo {
        this['product_code'] = productCode;
        return this;
    }
    public set productCode(productCode: string  | undefined) {
        this['product_code'] = productCode;
    }
    public get productCode(): string | undefined {
        return this['product_code'];
    }
    public withCreatedAt(createdAt: string): ImageInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withKmsId(kmsId: string): ImageInfo {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
}