

export class BatchScanSwrImageInfo {
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'instance_id'?: string;
    private 'instance_url'?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): BatchScanSwrImageInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): BatchScanSwrImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): BatchScanSwrImageInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withInstanceId(instanceId: string): BatchScanSwrImageInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceUrl(instanceUrl: string): BatchScanSwrImageInfo {
        this['instance_url'] = instanceUrl;
        return this;
    }
    public set instanceUrl(instanceUrl: string  | undefined) {
        this['instance_url'] = instanceUrl;
    }
    public get instanceUrl(): string | undefined {
        return this['instance_url'];
    }
}