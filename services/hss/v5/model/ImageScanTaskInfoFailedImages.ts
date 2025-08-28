

export class ImageScanTaskInfoFailedImages {
    public id?: number;
    private 'registry_id'?: string;
    private 'registry_name'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    public namespace?: string;
    private 'registry_type'?: string;
    private 'failed_reason'?: string;
    public constructor() { 
    }
    public withId(id: number): ImageScanTaskInfoFailedImages {
        this['id'] = id;
        return this;
    }
    public withRegistryId(registryId: string): ImageScanTaskInfoFailedImages {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryName(registryName: string): ImageScanTaskInfoFailedImages {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withImageName(imageName: string): ImageScanTaskInfoFailedImages {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ImageScanTaskInfoFailedImages {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withNamespace(namespace: string): ImageScanTaskInfoFailedImages {
        this['namespace'] = namespace;
        return this;
    }
    public withRegistryType(registryType: string): ImageScanTaskInfoFailedImages {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withFailedReason(failedReason: string): ImageScanTaskInfoFailedImages {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}