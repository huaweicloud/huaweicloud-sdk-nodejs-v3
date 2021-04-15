import { NeutronSecurityGroup } from './NeutronSecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListSecurityGroupsResponse extends SdkResponse {
    private 'security_groups'?: Array<NeutronSecurityGroup> | undefined;
    public constructor() { 
        super();
    }
    public withSecurityGroups(securityGroups: Array<NeutronSecurityGroup>): NeutronListSecurityGroupsResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<NeutronSecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
}