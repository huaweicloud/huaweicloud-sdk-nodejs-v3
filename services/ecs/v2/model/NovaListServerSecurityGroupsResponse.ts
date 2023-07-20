import { NovaSecurityGroup } from './NovaSecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaListServerSecurityGroupsResponse extends SdkResponse {
    private 'security_groups'?: Array<NovaSecurityGroup>;
    public constructor() { 
        super();
    }
    public withSecurityGroups(securityGroups: Array<NovaSecurityGroup>): NovaListServerSecurityGroupsResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<NovaSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<NovaSecurityGroup> | undefined {
        return this['security_groups'];
    }
}