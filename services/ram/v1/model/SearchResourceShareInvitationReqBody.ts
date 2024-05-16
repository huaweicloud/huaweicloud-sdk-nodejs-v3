

export class SearchResourceShareInvitationReqBody {
    private 'resource_share_ids'?: Array<string>;
    private 'resource_share_invitation_ids'?: Array<string>;
    public status?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withResourceShareIds(resourceShareIds: Array<string>): SearchResourceShareInvitationReqBody {
        this['resource_share_ids'] = resourceShareIds;
        return this;
    }
    public set resourceShareIds(resourceShareIds: Array<string>  | undefined) {
        this['resource_share_ids'] = resourceShareIds;
    }
    public get resourceShareIds(): Array<string> | undefined {
        return this['resource_share_ids'];
    }
    public withResourceShareInvitationIds(resourceShareInvitationIds: Array<string>): SearchResourceShareInvitationReqBody {
        this['resource_share_invitation_ids'] = resourceShareInvitationIds;
        return this;
    }
    public set resourceShareInvitationIds(resourceShareInvitationIds: Array<string>  | undefined) {
        this['resource_share_invitation_ids'] = resourceShareInvitationIds;
    }
    public get resourceShareInvitationIds(): Array<string> | undefined {
        return this['resource_share_invitation_ids'];
    }
    public withStatus(status: string): SearchResourceShareInvitationReqBody {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): SearchResourceShareInvitationReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): SearchResourceShareInvitationReqBody {
        this['marker'] = marker;
        return this;
    }
}