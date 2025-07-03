

export class ListLaunchTemplateVersionsRequest {
    public limit?: number;
    public marker?: string;
    private 'launch_template_id'?: string;
    private 'image_id'?: string;
    private 'flavor_id'?: string;
    public version?: Array<number>;
    public constructor() { 
    }
    public withLimit(limit: number): ListLaunchTemplateVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListLaunchTemplateVersionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLaunchTemplateId(launchTemplateId: string): ListLaunchTemplateVersionsRequest {
        this['launch_template_id'] = launchTemplateId;
        return this;
    }
    public set launchTemplateId(launchTemplateId: string  | undefined) {
        this['launch_template_id'] = launchTemplateId;
    }
    public get launchTemplateId(): string | undefined {
        return this['launch_template_id'];
    }
    public withImageId(imageId: string): ListLaunchTemplateVersionsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withFlavorId(flavorId: string): ListLaunchTemplateVersionsRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withVersion(version: Array<number>): ListLaunchTemplateVersionsRequest {
        this['version'] = version;
        return this;
    }
}