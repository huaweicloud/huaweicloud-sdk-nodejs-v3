

export class AcceptResourceShareInvitationRequest {
    private 'resource_share_invitation_id'?: string;
    public constructor(resourceShareInvitationId?: string) { 
        this['resource_share_invitation_id'] = resourceShareInvitationId;
    }
    public withResourceShareInvitationId(resourceShareInvitationId: string): AcceptResourceShareInvitationRequest {
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