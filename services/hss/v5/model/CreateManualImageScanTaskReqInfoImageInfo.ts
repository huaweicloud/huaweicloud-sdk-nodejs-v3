

export class CreateManualImageScanTaskReqInfoImageInfo {
    public id?: number;
    private 'image_id'?: string;
    private 'image_digest'?: string;
    private 'registry_id'?: string;
    private 'registry_name'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    public namespace?: string;
    private 'instance_id'?: string;
    private 'instance_url'?: string;
    private 'registry_type'?: string;
    public constructor() { 
    }
    public withId(id: number): CreateManualImageScanTaskReqInfoImageInfo {
        this['id'] = id;
        return this;
    }
    public withImageId(imageId: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageDigest(imageDigest: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withRegistryId(registryId: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryName(registryName: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withImageName(imageName: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withNamespace(namespace: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withInstanceId(instanceId: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceUrl(instanceUrl: string): CreateManualImageScanTaskReqInfoImageInfo {
        this['instance_url'] = instanceUrl;
        return this;
    }
    public set instanceUrl(instanceUrl: string  | undefined) {
        this['instance_url'] = instanceUrl;
    }
    public get instanceUrl(): string | undefined {
        return this['instance_url'];
    }
    public withRegistryType(registryType: string): CreateManualImageScanTaskReqInfoImageInfo {
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