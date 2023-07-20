import { NeutronPageLink } from './NeutronPageLink';
import { NeutronSecurityGroup } from './NeutronSecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListSecurityGroupsResponse extends SdkResponse {
    private 'security_groups'?: Array<NeutronSecurityGroup>;
    private 'security_groups_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withSecurityGroups(securityGroups: Array<NeutronSecurityGroup>): NeutronListSecurityGroupsResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<NeutronSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<NeutronSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withSecurityGroupsLinks(securityGroupsLinks: Array<NeutronPageLink>): NeutronListSecurityGroupsResponse {
        this['security_groups_links'] = securityGroupsLinks;
        return this;
    }
    public set securityGroupsLinks(securityGroupsLinks: Array<NeutronPageLink>  | undefined) {
        this['security_groups_links'] = securityGroupsLinks;
    }
    public get securityGroupsLinks(): Array<NeutronPageLink> | undefined {
        return this['security_groups_links'];
    }
}