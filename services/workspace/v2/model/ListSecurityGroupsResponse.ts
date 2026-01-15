import { SimpleSecurityGroupsInfo } from './SimpleSecurityGroupsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupsResponse extends SdkResponse {
    private 'security_groups'?: Array<SimpleSecurityGroupsInfo>;
    public constructor() { 
        super();
    }
    public withSecurityGroups(securityGroups: Array<SimpleSecurityGroupsInfo>): ListSecurityGroupsResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SimpleSecurityGroupsInfo>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SimpleSecurityGroupsInfo> | undefined {
        return this['security_groups'];
    }
}