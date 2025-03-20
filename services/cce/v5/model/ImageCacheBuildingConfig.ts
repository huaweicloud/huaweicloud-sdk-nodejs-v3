

export class ImageCacheBuildingConfig {
    public cluster?: string;
    private 'image_pull_secrets'?: Array<string>;
    public constructor(cluster?: string) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: string): ImageCacheBuildingConfig {
        this['cluster'] = cluster;
        return this;
    }
    public withImagePullSecrets(imagePullSecrets: Array<string>): ImageCacheBuildingConfig {
        this['image_pull_secrets'] = imagePullSecrets;
        return this;
    }
    public set imagePullSecrets(imagePullSecrets: Array<string>  | undefined) {
        this['image_pull_secrets'] = imagePullSecrets;
    }
    public get imagePullSecrets(): Array<string> | undefined {
        return this['image_pull_secrets'];
    }
}