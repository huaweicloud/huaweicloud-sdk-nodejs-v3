import { ResourceTag } from './ResourceTag';


export class AddOrUpdateTagsRequestBody {
    private 'image_id'?: string;
    public tag?: string;
    private 'image_tag'?: ResourceTag;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): AddOrUpdateTagsRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withTag(tag: string): AddOrUpdateTagsRequestBody {
        this['tag'] = tag;
        return this;
    }
    public withImageTag(imageTag: ResourceTag): AddOrUpdateTagsRequestBody {
        this['image_tag'] = imageTag;
        return this;
    }
    public set imageTag(imageTag: ResourceTag  | undefined) {
        this['image_tag'] = imageTag;
    }
    public get imageTag(): ResourceTag | undefined {
        return this['image_tag'];
    }
}