

export class ListMarketImagesRequest {
    private 'image_ids'?: Array<string>;
    public constructor(imageIds?: Array<string>) { 
        this['image_ids'] = imageIds;
    }
    public withImageIds(imageIds: Array<string>): ListMarketImagesRequest {
        this['image_ids'] = imageIds;
        return this;
    }
    public set imageIds(imageIds: Array<string>  | undefined) {
        this['image_ids'] = imageIds;
    }
    public get imageIds(): Array<string> | undefined {
        return this['image_ids'];
    }
}