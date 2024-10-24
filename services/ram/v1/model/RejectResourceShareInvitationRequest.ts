

export class RejectResourceShareInvitationRequest {
    private 'X-Security-Token'?: string;
    private 'resource_share_invitation_id'?: string;
    public constructor(resourceShareInvitationId?: string) { 
        this['resource_share_invitation_id'] = resourceShareInvitationId;
    }
    public withXSecurityToken(xSecurityToken: string): RejectResourceShareInvitationRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withResourceShareInvitationId(resourceShareInvitationId: string): RejectResourceShareInvitationRequest {
        this['resource_share_invitation_id'] = resourceShareInvitationId;
        return this;
    }
    public set resourceShareInvitationId(resourceShareInvitationId: string  | undefined) {
        this['resource_share_invitation_id'] = resourceShareInvitationId;
    }
    public get resourceShareInvitationId(): string | undefined {
        return this['resource_share_invitation_id'];
    }
}