import { TrainingJobBasicInfo } from './TrainingJobBasicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class List2dModelTrainingJobResponse extends SdkResponse {
    public count?: number;
    public jobs?: Array<TrainingJobBasicInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): List2dModelTrainingJobResponse {
        this['count'] = count;
        return this;
    }
    public withJobs(jobs: Array<TrainingJobBasicInfo>): List2dModelTrainingJobResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withXRequestId(xRequestId: string): List2dModelTrainingJobResponse {
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