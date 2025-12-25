

export class HwcEcsMetadata {
    private 'image_id'?: string;
    private 'image_type'?: string;
    private 'image_name'?: string;
    private 'os_bit'?: string;
    private 'os_type'?: string;
    private 'vpc_id'?: string;
    private 'resource_spec_code'?: string;
    private 'resource_type'?: string;
    private 'agency_name'?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): HwcEcsMetadata {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageType(imageType: string): HwcEcsMetadata {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageName(imageName: string): HwcEcsMetadata {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsBit(osBit: string): HwcEcsMetadata {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): string | undefined {
        return this['os_bit'];
    }
    public withOsType(osType: string): HwcEcsMetadata {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withVpcId(vpcId: string): HwcEcsMetadata {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): HwcEcsMetadata {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceType(resourceType: string): HwcEcsMetadata {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withAgencyName(agencyName: string): HwcEcsMetadata {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}