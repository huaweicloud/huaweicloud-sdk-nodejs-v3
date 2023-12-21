import { CbsGetResourceIdTags } from './CbsGetResourceIdTags';


export class BatchCreateInstanceTagRequest {
    private 'resource_id'?: string;
    public body?: CbsGetResourceIdTags;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BatchCreateInstanceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CbsGetResourceIdTags): BatchCreateInstanceTagRequest {
        this['body'] = body;
        return this;
    }
}