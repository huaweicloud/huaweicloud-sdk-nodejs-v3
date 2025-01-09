

export class Image {
    private 'image_id'?: string;
    private 'min_disk'?: number;
    private 'created_at'?: string;
    private 'image_size'?: string;
    private 'updated_at'?: string;
    private 'product_code'?: string;
    private 'max_ram'?: string;
    private 'market_resource_type_code'?: string;
    private 'min_ram'?: number;
    private 'os_type'?: string;
    private 'image_type'?: string;
    public tags?: Array<string>;
    public platform?: string;
    private 'os_bit'?: string;
    private 'os_version'?: string;
    public name?: string;
    private 'market_service_type_code'?: string;
    public status?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): Image {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withMinDisk(minDisk: number): Image {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withCreatedAt(createdAt: string): Image {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withImageSize(imageSize: string): Image {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): string | undefined {
        return this['image_size'];
    }
    public withUpdatedAt(updatedAt: string): Image {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProductCode(productCode: string): Image {
        this['product_code'] = productCode;
        return this;
    }
    public set productCode(productCode: string  | undefined) {
        this['product_code'] = productCode;
    }
    public get productCode(): string | undefined {
        return this['product_code'];
    }
    public withMaxRam(maxRam: string): Image {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: string  | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam(): string | undefined {
        return this['max_ram'];
    }
    public withMarketResourceTypeCode(marketResourceTypeCode: string): Image {
        this['market_resource_type_code'] = marketResourceTypeCode;
        return this;
    }
    public set marketResourceTypeCode(marketResourceTypeCode: string  | undefined) {
        this['market_resource_type_code'] = marketResourceTypeCode;
    }
    public get marketResourceTypeCode(): string | undefined {
        return this['market_resource_type_code'];
    }
    public withMinRam(minRam: number): Image {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): number | undefined {
        return this['min_ram'];
    }
    public withOsType(osType: string): Image {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withImageType(imageType: string): Image {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withTags(tags: Array<string>): Image {
        this['tags'] = tags;
        return this;
    }
    public withPlatform(platform: string): Image {
        this['platform'] = platform;
        return this;
    }
    public withOsBit(osBit: string): Image {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withOsVersion(osVersion: string): Image {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withName(name: string): Image {
        this['name'] = name;
        return this;
    }
    public withMarketServiceTypeCode(marketServiceTypeCode: string): Image {
        this['market_service_type_code'] = marketServiceTypeCode;
        return this;
    }
    public set marketServiceTypeCode(marketServiceTypeCode: string  | undefined) {
        this['market_service_type_code'] = marketServiceTypeCode;
    }
    public get marketServiceTypeCode(): string | undefined {
        return this['market_service_type_code'];
    }
    public withStatus(status: string): Image {
        this['status'] = status;
        return this;
    }
}