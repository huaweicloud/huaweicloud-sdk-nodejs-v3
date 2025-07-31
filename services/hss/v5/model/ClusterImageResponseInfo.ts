

export class ClusterImageResponseInfo {
    private 'image_name'?: string;
    private 'image_version'?: string;
    public id?: string;
    public constructor() { 
    }
    public withImageName(imageName: string): ClusterImageResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ClusterImageResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withId(id: string): ClusterImageResponseInfo {
        this['id'] = id;
        return this;
    }
}