import { CreateResourceTagRequestBody } from './CreateResourceTagRequestBody';


export class CreateTransitSubnetTagRequest {
    private 'resource_id'?: string;
    public body?: CreateResourceTagRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): CreateTransitSubnetTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateResourceTagRequestBody): CreateTransitSubnetTagRequest {
        this['body'] = body;
        return this;
    }
}