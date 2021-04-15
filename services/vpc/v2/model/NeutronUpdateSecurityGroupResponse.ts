import { NeutronSecurityGroup } from './NeutronSecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateSecurityGroupResponse extends SdkResponse {
    private 'security_group'?: NeutronSecurityGroup | undefined;
    public constructor() { 
        super();
    }
    public withSecurityGroup(securityGroup: NeutronSecurityGroup): NeutronUpdateSecurityGroupResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: NeutronSecurityGroup | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
}