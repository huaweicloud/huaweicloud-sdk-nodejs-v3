import { FailureDetail } from './FailureDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateSnapshotDeletableFlagResponse extends SdkResponse {
    public message?: string;
    public code?: string;
    private 'total_count'?: number;
    private 'success_count'?: number;
    private 'failure_count'?: number;
    private 'failure_details'?: Array<FailureDetail>;
    public constructor() { 
        super();
    }
    public withMessage(message: string): BatchUpdateSnapshotDeletableFlagResponse {
        this['message'] = message;
        return this;
    }
    public withCode(code: string): BatchUpdateSnapshotDeletableFlagResponse {
        this['code'] = code;
        return this;
    }
    public withTotalCount(totalCount: number): BatchUpdateSnapshotDeletableFlagResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSuccessCount(successCount: number): BatchUpdateSnapshotDeletableFlagResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailureCount(failureCount: number): BatchUpdateSnapshotDeletableFlagResponse {
        this['failure_count'] = failureCount;
        return this;
    }
    public set failureCount(failureCount: number  | undefined) {
        this['failure_count'] = failureCount;
    }
    public get failureCount(): number | undefined {
        return this['failure_count'];
    }
    public withFailureDetails(failureDetails: Array<FailureDetail>): BatchUpdateSnapshotDeletableFlagResponse {
        this['failure_details'] = failureDetails;
        return this;
    }
    public set failureDetails(failureDetails: Array<FailureDetail>  | undefined) {
        this['failure_details'] = failureDetails;
    }
    public get failureDetails(): Array<FailureDetail> | undefined {
        return this['failure_details'];
    }
}