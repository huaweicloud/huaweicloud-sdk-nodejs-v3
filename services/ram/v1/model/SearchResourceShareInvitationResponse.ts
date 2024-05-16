import { PageInfo } from './PageInfo';
import { ResourceShareInvitation } from './ResourceShareInvitation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchResourceShareInvitationResponse extends SdkResponse {
    private 'resource_share_invitations'?: Array<ResourceShareInvitation>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResourceShareInvitations(resourceShareInvitations: Array<ResourceShareInvitation>): SearchResourceShareInvitationResponse {
        this['resource_share_invitations'] = resourceShareInvitations;
        return this;
    }
    public set resourceShareInvitations(resourceShareInvitations: Array<ResourceShareInvitation>  | undefined) {
        this['resource_share_invitations'] = resourceShareInvitations;
    }
    public get resourceShareInvitations(): Array<ResourceShareInvitation> | undefined {
        return this['resource_share_invitations'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchResourceShareInvitationResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}