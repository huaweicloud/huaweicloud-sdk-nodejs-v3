import { TmsKeyValue } from './TmsKeyValue';


export class TmsResourceResp {
    private 'resource_id'?: string;
    private 'resouce_detail'?: string;
    private 'resource_name'?: string;
    public tags?: Array<TmsKeyValue>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): TmsResourceResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResouceDetail(resouceDetail: string): TmsResourceResp {
        this['resouce_detail'] = resouceDetail;
        return this;
    }
    public set resouceDetail(resouceDetail: string  | undefined) {
        this['resouce_detail'] = resouceDetail;
    }
    public get resouceDetail(): string | undefined {
        return this['resouce_detail'];
    }
    public withResourceName(resourceName: string): TmsResourceResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<TmsKeyValue>): TmsResourceResp {
        this['tags'] = tags;
        return this;
    }
}