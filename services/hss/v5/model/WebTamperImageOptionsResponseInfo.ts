

export class WebTamperImageOptionsResponseInfo {
    private 'image_name'?: string;
    private 'image_full_name'?: string;
    private 'image_id'?: string;
    private 'image_version_list'?: Array<string>;
    private 'image_namespace'?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    public constructor() { 
    }
    public withImageName(imageName: string): WebTamperImageOptionsResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageFullName(imageFullName: string): WebTamperImageOptionsResponseInfo {
        this['image_full_name'] = imageFullName;
        return this;
    }
    public set imageFullName(imageFullName: string  | undefined) {
        this['image_full_name'] = imageFullName;
    }
    public get imageFullName(): string | undefined {
        return this['image_full_name'];
    }
    public withImageId(imageId: string): WebTamperImageOptionsResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageVersionList(imageVersionList: Array<string>): WebTamperImageOptionsResponseInfo {
        this['image_version_list'] = imageVersionList;
        return this;
    }
    public set imageVersionList(imageVersionList: Array<string>  | undefined) {
        this['image_version_list'] = imageVersionList;
    }
    public get imageVersionList(): Array<string> | undefined {
        return this['image_version_list'];
    }
    public withImageNamespace(imageNamespace: string): WebTamperImageOptionsResponseInfo {
        this['image_namespace'] = imageNamespace;
        return this;
    }
    public set imageNamespace(imageNamespace: string  | undefined) {
        this['image_namespace'] = imageNamespace;
    }
    public get imageNamespace(): string | undefined {
        return this['image_namespace'];
    }
    public withRegistryName(registryName: string): WebTamperImageOptionsResponseInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): WebTamperImageOptionsResponseInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
}