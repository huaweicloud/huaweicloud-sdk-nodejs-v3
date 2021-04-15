import { QueryImageByTagsResourceDetail } from './QueryImageByTagsResourceDetail';
import { TagKeyValue } from './TagKeyValue';


export class ShowImageByTagsResource {
    private 'resource_id': string | undefined;
    private 'resouce_detail': QueryImageByTagsResourceDetail | undefined;
    public tags: Array<TagKeyValue>;
    private 'resource_name': string | undefined;
    public constructor(resourceId?: any, resouceDetail?: any, tags?: any, resourceName?: any) { 
        this['resource_id'] = resourceId;
        this['resouce_detail'] = resouceDetail;
        this['tags'] = tags;
        this['resource_name'] = resourceName;
    }
    public withResourceId(resourceId: string): ShowImageByTagsResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResouceDetail(resouceDetail: QueryImageByTagsResourceDetail): ShowImageByTagsResource {
        this['resouce_detail'] = resouceDetail;
        return this;
    }
    public set resouceDetail(resouceDetail: QueryImageByTagsResourceDetail | undefined) {
        this['resouce_detail'] = resouceDetail;
    }
    public get resouceDetail() {
        return this['resouce_detail'];
    }
    public withTags(tags: Array<TagKeyValue>): ShowImageByTagsResource {
        this['tags'] = tags;
        return this;
    }
    public withResourceName(resourceName: string): ShowImageByTagsResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
}