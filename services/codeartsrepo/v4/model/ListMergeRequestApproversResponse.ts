import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestApproversResponse extends SdkResponse {
    private 'required_approvers_list'?: Array<UserBasicDto>;
    private 'optional_approvers_list'?: Array<UserBasicDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withRequiredApproversList(requiredApproversList: Array<UserBasicDto>): ListMergeRequestApproversResponse {
        this['required_approvers_list'] = requiredApproversList;
        return this;
    }
    public set requiredApproversList(requiredApproversList: Array<UserBasicDto>  | undefined) {
        this['required_approvers_list'] = requiredApproversList;
    }
    public get requiredApproversList(): Array<UserBasicDto> | undefined {
        return this['required_approvers_list'];
    }
    public withOptionalApproversList(optionalApproversList: Array<UserBasicDto>): ListMergeRequestApproversResponse {
        this['optional_approvers_list'] = optionalApproversList;
        return this;
    }
    public set optionalApproversList(optionalApproversList: Array<UserBasicDto>  | undefined) {
        this['optional_approvers_list'] = optionalApproversList;
    }
    public get optionalApproversList(): Array<UserBasicDto> | undefined {
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