import { AccountAssignmentOperationStatusDto } from './AccountAssignmentOperationStatusDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeAccountAssignmentCreationStatusResponse extends SdkResponse {
    private 'account_assignment_creation_status'?: AccountAssignmentOperationStatusDto;
    public constructor() { 
        super();
    }
    public withAccountAssignmentCreationStatus(accountAssignmentCreationStatus: AccountAssignmentOperationStatusDto): DescribeAccountAssignmentCreationStatusResponse {
        this['account_assignment_creation_status'] = accountAssignmentCreationStatus;
        return this;
    }
    public set accountAssignmentCreationStatus(accountAssignmentCreationStatus: AccountAssignmentOperationStatusDto  | undefined) {
        this['account_assignment_creation_status'] = accountAssignmentCreationStatus;
    }
    public get accountAssignmentCreationStatus(): AccountAssignmentOperationStatusDto | undefined {
        return this['account_assignment_creation_status'];
    }
}