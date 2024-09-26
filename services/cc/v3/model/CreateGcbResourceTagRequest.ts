import { CreateGcbTagRequestBody } from './CreateGcbTagRequestBody';


export class CreateGcbResourceTagRequest {
    private 'resource_id'?: string;
    public body?: CreateGcbTagRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): CreateGcbResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateGcbTagRequestBody): CreateGcbResourceTagRequest {
        this['body'] = body;
        return this;
    }
}