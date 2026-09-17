import { AssociateNodeRequestBody } from './AssociateNodeRequestBody';


export class BindNodeRequest {
    private 'resource_id'?: string;
    public body?: AssociateNodeRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): BindNodeRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: AssociateNodeRequestBody): BindNodeRequest {
        this['body'] = body;
        return this;
    }
}