import { QueryImageByTagsResourceDetail } from './QueryImageByTagsResourceDetail';
import { TagKeyValue } from './TagKeyValue';


export class ShowImageByTagsResource {
    private 'resource_id': string | undefined;
    private 'resource_detail': QueryImageByTagsResourceDetail | undefined;
    public tags: Array<TagKeyValue>;
    private 'resource_name': string | undefined;
    public constructor(resourceId?: any, resourceDetail?: any, tags?: any, resourceName?: any) { 
        this['resource_id'] = resourceId;
        this['resource_detail'] = resourceDetail;
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
    public withResourceDetail(resourceDetail: QueryImageByTagsResourceDetail): ShowImageByTagsResource {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: QueryImageByTagsResourceDetail | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
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