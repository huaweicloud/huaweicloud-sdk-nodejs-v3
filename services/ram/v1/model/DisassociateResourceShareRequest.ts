import { ResourceShareAssociationReqBody } from './ResourceShareAssociationReqBody';


export class DisassociateResourceShareRequest {
    private 'resource_share_id'?: string;
    public body?: ResourceShareAssociationReqBody;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withResourceShareId(resourceShareId: string): DisassociateResourceShareRequest {
        this['resource_share_id'] = resourceShareId;
        return this;
    }
    public set resourceShareId(resourceShareId: string  | undefined) {
        this['resource_share_id'] = resourceShareId;
    }
    public get resourceShareId(): string | undefined {
        return this['resource_share_id'];
    }
    public withBody(body: ResourceShareAssociationReqBody): DisassociateResourceShareRequest {
        this['body'] = body;
        return this;
    }
}