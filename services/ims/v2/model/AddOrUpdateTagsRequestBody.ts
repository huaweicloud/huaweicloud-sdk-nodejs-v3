import { ResourceTag } from './ResourceTag';


export class AddOrUpdateTagsRequestBody {
    private 'image_id': string | undefined;
    public tag?: string;
    private 'image_tag'?: ResourceTag | undefined;
    public constructor(imageId?: any) { 
        this['image_id'] = imageId;
    }
    public withImageId(imageId: string): AddOrUpdateTagsRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
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
    public set imageTag(imageTag: ResourceTag | undefined) {
        this['image_tag'] = imageTag;
    }
    public get imageTag() {
        return this['image_tag'];
    }
}