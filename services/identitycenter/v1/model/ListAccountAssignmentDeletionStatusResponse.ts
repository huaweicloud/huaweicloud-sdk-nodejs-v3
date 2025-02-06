import { AccountAssignmentOperationStatusMetadataDto } from './AccountAssignmentOperationStatusMetadataDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountAssignmentDeletionStatusResponse extends SdkResponse {
    private 'account_assignments_deletion_status'?: Array<AccountAssignmentOperationStatusMetadataDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAccountAssignmentsDeletionStatus(accountAssignmentsDeletionStatus: Array<AccountAssignmentOperationStatusMetadataDto>): ListAccountAssignmentDeletionStatusResponse {
        this['account_assignments_deletion_status'] = accountAssignmentsDeletionStatus;
        return this;
    }
    public set accountAssignmentsDeletionStatus(accountAssignmentsDeletionStatus: Array<AccountAssignmentOperationStatusMetadataDto>  | undefined) {
        this['account_assignments_deletion_status'] = accountAssignmentsDeletionStatus;
    }
    public get accountAssignmentsDeletionStatus(): Array<AccountAssignmentOperationStatusMetadataDto> | undefined {
        return this['account_assignments_deletion_status'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListAccountAssignmentDeletionStatusResponse {
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