import { SecurityGroup } from './SecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupsResponse extends SdkResponse {
    private 'security_groups'?: Array<SecurityGroup> | undefined;
    public constructor() { 
        super();
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): ListSecurityGroupsResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
}