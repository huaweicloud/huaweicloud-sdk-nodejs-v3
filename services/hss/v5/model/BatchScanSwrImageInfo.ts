

export class BatchScanSwrImageInfo {
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
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
}