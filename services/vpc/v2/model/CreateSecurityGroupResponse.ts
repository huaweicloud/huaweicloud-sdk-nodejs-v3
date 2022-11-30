import { SecurityGroup } from './SecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityGroupResponse extends SdkResponse {
    private 'security_group'?: SecurityGroup | undefined;
    public constructor() { 
        super();
    }
    public withSecurityGroup(securityGroup: SecurityGroup): CreateSecurityGroupResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: SecurityGroup | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}