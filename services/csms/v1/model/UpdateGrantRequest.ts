import { GrantSecretReqBody } from './GrantSecretReqBody';


export class UpdateGrantRequest {
    private 'resource_id'?: string;
    public body?: GrantSecretReqBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): UpdateGrantRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: GrantSecretReqBody): UpdateGrantRequest {
        this['body'] = body;
        return this;
    }
}