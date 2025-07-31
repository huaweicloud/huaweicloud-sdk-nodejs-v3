

export class WhiteImageInfo {
    private 'cluster_id'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    public constructor(clusterId?: string, imageName?: string, imageVersion?: string) { 
        this['cluster_id'] = clusterId;
        this['image_name'] = imageName;
        this['image_version'] = imageVersion;
    }
    public withClusterId(clusterId: string): WhiteImageInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withImageName(imageName: string): WhiteImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): WhiteImageInfo {
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