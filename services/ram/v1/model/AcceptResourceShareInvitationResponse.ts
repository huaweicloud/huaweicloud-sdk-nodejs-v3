import { ResourceShareInvitation } from './ResourceShareInvitation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptResourceShareInvitationResponse extends SdkResponse {
    private 'resource_share_invitation'?: ResourceShareInvitation;
    public constructor() { 
        super();
    }
    public withResourceShareInvitation(resourceShareInvitation: ResourceShareInvitation): AcceptResourceShareInvitationResponse {
        this['resource_share_invitation'] = resourceShareInvitation;
        return this;
    }
    public set resourceShareInvitation(resourceShareInvitation: ResourceShareInvitation  | undefined) {
        this['resource_share_invitation'] = resourceShareInvitation;
    }
    public get resourceShareInvitation(): ResourceShareInvitation | undefined {
        return this['resource_share_invitation'];
    }
}