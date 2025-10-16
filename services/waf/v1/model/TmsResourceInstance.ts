import { TmsResourceTag } from './TmsResourceTag';


export class TmsResourceInstance {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_detail'?: object;
    public tags?: Array<TmsResourceTag>;
    public sysTags?: Array<TmsResourceTag>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): TmsResourceInstance {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): TmsResourceInstance {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceDetail(resourceDetail: object): TmsResourceInstance {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object  | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail(): object | undefined {
        return this['resource_detail'];
    }
    public withTags(tags: Array<TmsResourceTag>): TmsResourceInstance {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<TmsResourceTag>): TmsResourceInstance {
        this['sysTags'] = sysTags;
        return this;
    }
}