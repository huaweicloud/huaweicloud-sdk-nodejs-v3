import { AccountAssignmentOperationStatusMetadataDto } from './AccountAssignmentOperationStatusMetadataDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountAssignmentCreationStatusResponse extends SdkResponse {
    private 'account_assignments_creation_status'?: Array<AccountAssignmentOperationStatusMetadataDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAccountAssignmentsCreationStatus(accountAssignmentsCreationStatus: Array<AccountAssignmentOperationStatusMetadataDto>): ListAccountAssignmentCreationStatusResponse {
        this['account_assignments_creation_status'] = accountAssignmentsCreationStatus;
        return this;
    }
    public set accountAssignmentsCreationStatus(accountAssignmentsCreationStatus: Array<AccountAssignmentOperationStatusMetadataDto>  | undefined) {
        this['account_assignments_creation_status'] = accountAssignmentsCreationStatus;
    }
    public get accountAssignmentsCreationStatus(): Array<AccountAssignmentOperationStatusMetadataDto> | undefined {
        return this['account_assignments_creation_status'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListAccountAssignmentCreationStatusResponse {
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