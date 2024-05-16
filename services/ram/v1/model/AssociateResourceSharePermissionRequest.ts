import { AssociatePermissionReqBody } from './AssociatePermissionReqBody';


export class AssociateResourceSharePermissionRequest {
    private 'resource_share_id'?: string;
    public body?: AssociatePermissionReqBody;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): AssociateResourceSharePermissionRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withBody(body: AssociatePermissionReqBody): AssociateResourceSharePermissionRequest {
        this['body'] = body;
        return this;
    }
}