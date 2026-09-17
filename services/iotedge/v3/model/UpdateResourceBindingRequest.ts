import { UpdateResourceBody } from './UpdateResourceBody';


export class UpdateResourceBindingRequest {
    private 'resource_id'?: string;
    public body?: UpdateResourceBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): UpdateResourceBindingRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: UpdateResourceBody): UpdateResourceBindingRequest {
        this['body'] = body;
        return this;
    }
}