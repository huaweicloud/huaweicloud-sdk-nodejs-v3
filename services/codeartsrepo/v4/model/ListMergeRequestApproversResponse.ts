import { MergeRequestApprovalUserDto } from './MergeRequestApprovalUserDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestApproversResponse extends SdkResponse {
    private 'required_approvers_list'?: Array<MergeRequestApprovalUserDto>;
    private 'optional_approvers_list'?: Array<MergeRequestApprovalUserDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withRequiredApproversList(requiredApproversList: Array<MergeRequestApprovalUserDto>): ListMergeRequestApproversResponse {
        this['required_approvers_list'] = requiredApproversList;
        return this;
    }
    public set requiredApproversList(requiredApproversList: Array<MergeRequestApprovalUserDto>  | undefined) {
        this['required_approvers_list'] = requiredApproversList;
    }
    public get requiredApproversList(): Array<MergeRequestApprovalUserDto> | undefined {
        return this['required_approvers_list'];
    }
    public withOptionalApproversList(optionalApproversList: Array<MergeRequestApprovalUserDto>): ListMergeRequestApproversResponse {
        this['optional_approvers_list'] = optionalApproversList;
        return this;
    }
    public set optionalApproversList(optionalApproversList: Array<MergeRequestApprovalUserDto>  | undefined) {
        this['optional_approvers_list'] = optionalApproversList;
    }
    public get optionalApproversList(): Array<MergeRequestApprovalUserDto> | undefined {
        return this['optional_approvers_list'];
    }
    public withXTotal(xTotal: string): ListMergeRequestApproversResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}