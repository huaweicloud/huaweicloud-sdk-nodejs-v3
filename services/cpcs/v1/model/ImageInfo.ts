

export class ImageInfo {
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'service_type'?: string;
    private 'arch_type'?: string;
    private 'specification_id'?: string;
    private 'create_time'?: string;
    private 'version_type'?: string;
    private 'trust_domain'?: string;
    private 'vendor_name'?: string;
    private 'vendor_image_version'?: string;
    private 'ccsp_version_need'?: string;
    private 'hw_image_version'?: string;
    public description?: string;
    public constructor(imageId?: string, imageName?: string, serviceType?: string, archType?: string, specificationId?: string, createTime?: string, versionType?: string, trustDomain?: string, vendorName?: string, vendorImageVersion?: string, ccspVersionNeed?: string, hwImageVersion?: string, description?: string) { 
        this['image_id'] = imageId;
        this['image_name'] = imageName;
        this['service_type'] = serviceType;
        this['arch_type'] = archType;
        this['specification_id'] = specificationId;
        this['create_time'] = createTime;
        this['version_type'] = versionType;
        this['trust_domain'] = trustDomain;
        this['vendor_name'] = vendorName;
        this['vendor_image_version'] = vendorImageVersion;
        this['ccsp_version_need'] = ccspVersionNeed;
        this['hw_image_version'] = hwImageVersion;
        this['description'] = description;
    }
    public withImageId(imageId: string): ImageInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withServiceType(serviceType: string): ImageInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withArchType(archType: string): ImageInfo {
        this['arch_type'] = archType;
        return this;
    }
    public set archType(archType: string  | undefined) {
        this['arch_type'] = archType;
    }
    public get archType(): string | undefined {
        return this['arch_type'];
    }
    public withSpecificationId(specificationId: string): ImageInfo {
        this['specification_id'] = specificationId;
        return this;
    }
    public set specificationId(specificationId: string  | undefined) {
        this['specification_id'] = specificationId;
    }
    public get specificationId(): string | undefined {
        return this['specification_id'];
    }
    public withCreateTime(createTime: string): ImageInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withVersionType(versionType: string): ImageInfo {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: string  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): string | undefined {
        return this['version_type'];
    }
    public withTrustDomain(trustDomain: string): ImageInfo {
        this['trust_domain'] = trustDomain;
        return this;
    }
    public set trustDomain(trustDomain: string  | undefined) {
        this['trust_domain'] = trustDomain;
    }
    public get trustDomain(): string | undefined {
        return this['trust_domain'];
    }
    public withVendorName(vendorName: string): ImageInfo {
        this['vendor_name'] = vendorName;
        return this;
    }
    public set vendorName(vendorName: string  | undefined) {
        this['vendor_name'] = vendorName;
    }
    public get vendorName(): string | undefined {
        return this['vendor_name'];
    }
    public withVendorImageVersion(vendorImageVersion: string): ImageInfo {
        this['vendor_image_version'] = vendorImageVersion;
        return this;
    }
    public set vendorImageVersion(vendorImageVersion: string  | undefined) {
        this['vendor_image_version'] = vendorImageVersion;
    }
    public get vendorImageVersion(): string | undefined {
        return this['vendor_image_version'];
    }
    public withCcspVersionNeed(ccspVersionNeed: string): ImageInfo {
        this['ccsp_version_need'] = ccspVersionNeed;
        return this;
    }
    public set ccspVersionNeed(ccspVersionNeed: string  | undefined) {
        this['ccsp_version_need'] = ccspVersionNeed;
    }
    public get ccspVersionNeed(): string | undefined {
        return this['ccsp_version_need'];
    }
    public withHwImageVersion(hwImageVersion: string): ImageInfo {
        this['hw_image_version'] = hwImageVersion;
        return this;
    }
    public set hwImageVersion(hwImageVersion: string  | undefined) {
        this['hw_image_version'] = hwImageVersion;
    }
    public get hwImageVersion(): string | undefined {
        return this['hw_image_version'];
    }
    public withDescription(description: string): ImageInfo {
        this['description'] = description;
        return this;
    }
}