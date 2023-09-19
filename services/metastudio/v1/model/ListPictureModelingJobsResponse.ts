import { PictureModelingInfo } from './PictureModelingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPictureModelingJobsResponse extends SdkResponse {
    public count?: number;
    private 'picture_modeling_jobs'?: Array<PictureModelingInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPictureModelingJobsResponse {
        this['count'] = count;
        return this;
    }
    public withPictureModelingJobs(pictureModelingJobs: Array<PictureModelingInfo>): ListPictureModelingJobsResponse {
        this['picture_modeling_jobs'] = pictureModelingJobs;
        return this;
    }
    public set pictureModelingJobs(pictureModelingJobs: Array<PictureModelingInfo>  | undefined) {
        this['picture_modeling_jobs'] = pictureModelingJobs;
    }
    public get pictureModelingJobs(): Array<PictureModelingInfo> | undefined {
        return this['picture_modeling_jobs'];
    }
    public withXRequestId(xRequestId: string): ListPictureModelingJobsResponse {
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