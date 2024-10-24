import { ResourceShareAssociationReqBody } from './ResourceShareAssociationReqBody';


export class DisassociateResourceShareRequest {
    private 'X-Security-Token'?: string;
    private 'resource_share_id'?: string;
    public body?: ResourceShareAssociationReqBody;
    public constructor(resourceShareId?: string) { 
        this['resource_share_id'] = resourceShareId;
    }
    public withXSecurityToken(xSecurityToken: string): DisassociateResourceShareRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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