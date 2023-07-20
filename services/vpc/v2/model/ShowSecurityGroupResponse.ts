import { SecurityGroup } from './SecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityGroupResponse extends SdkResponse {
    private 'security_group'?: SecurityGroup;
    public constructor() { 
        super();
    }
    public withSecurityGroup(securityGroup: SecurityGroup): ShowSecurityGroupResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: SecurityGroup  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): SecurityGroup | undefined {
        return this['security_group'];
    }
}