import { NeutronSecurityGroup } from './NeutronSecurityGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreateSecurityGroupResponse extends SdkResponse {
    private 'security_group'?: NeutronSecurityGroup;
    public constructor() { 
        super();
    }
    public withSecurityGroup(securityGroup: NeutronSecurityGroup): NeutronCreateSecurityGroupResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: NeutronSecurityGroup  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): NeutronSecurityGroup | undefined {
        return this['security_group'];
    }
}