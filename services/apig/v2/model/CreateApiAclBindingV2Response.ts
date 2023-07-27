import { AclApiBindingInfo } from './AclApiBindingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApiAclBindingV2Response extends SdkResponse {
    private 'acl_bindings'?: Array<AclApiBindingInfo>;
    public constructor() { 
        super();
    }
    public withAclBindings(aclBindings: Array<AclApiBindingInfo>): CreateApiAclBindingV2Response {
        this['acl_bindings'] = aclBindings;
        return this;
    }
    public set aclBindings(aclBindings: Array<AclApiBindingInfo>  | undefined) {
        this['acl_bindings'] = aclBindings;
    }
    public get aclBindings(): Array<AclApiBindingInfo> | undefined {
        return this['acl_bindings'];
    }
}