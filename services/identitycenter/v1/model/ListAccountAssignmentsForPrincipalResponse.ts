import { AccountAssignmentDto } from './AccountAssignmentDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountAssignmentsForPrincipalResponse extends SdkResponse {
    private 'account_assignments'?: Array<AccountAssignmentDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAccountAssignments(accountAssignments: Array<AccountAssignmentDto>): ListAccountAssignmentsForPrincipalResponse {
        this['account_assignments'] = accountAssignments;
        return this;
    }
    public set accountAssignments(accountAssignments: Array<AccountAssignmentDto>  | undefined) {
        this['account_assignments'] = accountAssignments;
    }
    public get accountAssignments(): Array<AccountAssignmentDto> | undefined {
        return this['account_assignments'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListAccountAssignmentsForPrincipalResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}