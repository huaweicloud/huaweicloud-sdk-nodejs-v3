import { AccountAssignmentOperationStatusDto } from './AccountAssignmentOperationStatusDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAccountAssignmentResponse extends SdkResponse {
    private 'account_assignment_deletion_status'?: AccountAssignmentOperationStatusDto;
    public constructor() { 
        super();
    }
    public withAccountAssignmentDeletionStatus(accountAssignmentDeletionStatus: AccountAssignmentOperationStatusDto): DeleteAccountAssignmentResponse {
        this['account_assignment_deletion_status'] = accountAssignmentDeletionStatus;
        return this;
    }
    public set accountAssignmentDeletionStatus(accountAssignmentDeletionStatus: AccountAssignmentOperationStatusDto  | undefined) {
        this['account_assignment_deletion_status'] = accountAssignmentDeletionStatus;
    }
    public get accountAssignmentDeletionStatus(): AccountAssignmentOperationStatusDto | undefined {
        return this['account_assignment_deletion_status'];
    }
}