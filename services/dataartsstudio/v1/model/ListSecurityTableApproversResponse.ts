import { TableApprover } from './TableApprover';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityTableApproversResponse extends SdkResponse {
    public approvers?: Array<TableApprover>;
    private 'has_table_rule'?: boolean;
    public constructor() { 
        super();
    }
    public withApprovers(approvers: Array<TableApprover>): ListSecurityTableApproversResponse {
        this['approvers'] = approvers;
        return this;
    }
    public withHasTableRule(hasTableRule: boolean): ListSecurityTableApproversResponse {
        this['has_table_rule'] = hasTableRule;
        return this;
    }
    public set hasTableRule(hasTableRule: boolean  | undefined) {
        this['has_table_rule'] = hasTableRule;
    }
    public get hasTableRule(): boolean | undefined {
        return this['has_table_rule'];
    }
}