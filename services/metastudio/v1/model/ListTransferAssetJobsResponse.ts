import { TransferAssetJobInfo } from './TransferAssetJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransferAssetJobsResponse extends SdkResponse {
    public count?: number;
    public jobs?: Array<TransferAssetJobInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTransferAssetJobsResponse {
        this['count'] = count;
        return this;
    }
    public withJobs(jobs: Array<TransferAssetJobInfo>): ListTransferAssetJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withXRequestId(xRequestId: string): ListTransferAssetJobsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}