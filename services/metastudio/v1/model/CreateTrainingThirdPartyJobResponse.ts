import { CreateTrainingJobRspSegmentUploadingUrl } from './CreateTrainingJobRspSegmentUploadingUrl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrainingThirdPartyJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'training_data_uploading_url'?: string;
    private 'segment_uploading_url'?: CreateTrainingJobRspSegmentUploadingUrl;
    private 'authorization_letter_uploading_url'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateTrainingThirdPartyJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTrainingDataUploadingUrl(trainingDataUploadingUrl: string): CreateTrainingThirdPartyJobResponse {
        this['training_data_uploading_url'] = trainingDataUploadingUrl;
        return this;
    }
    public set trainingDataUploadingUrl(trainingDataUploadingUrl: string  | undefined) {
        this['training_data_uploading_url'] = trainingDataUploadingUrl;
    }
    public get trainingDataUploadingUrl(): string | undefined {
        return this['training_data_uploading_url'];
    }
    public withSegmentUploadingUrl(segmentUploadingUrl: CreateTrainingJobRspSegmentUploadingUrl): CreateTrainingThirdPartyJobResponse {
        this['segment_uploading_url'] = segmentUploadingUrl;
        return this;
    }
    public set segmentUploadingUrl(segmentUploadingUrl: CreateTrainingJobRspSegmentUploadingUrl  | undefined) {
        this['segment_uploading_url'] = segmentUploadingUrl;
    }
    public get segmentUploadingUrl(): CreateTrainingJobRspSegmentUploadingUrl | undefined {
        return this['segment_uploading_url'];
    }
    public withAuthorizationLetterUploadingUrl(authorizationLetterUploadingUrl: string): CreateTrainingThirdPartyJobResponse {
        this['authorization_letter_uploading_url'] = authorizationLetterUploadingUrl;
        return this;
    }
    public set authorizationLetterUploadingUrl(authorizationLetterUploadingUrl: string  | undefined) {
        this['authorization_letter_uploading_url'] = authorizationLetterUploadingUrl;
    }
    public get authorizationLetterUploadingUrl(): string | undefined {
        return this['authorization_letter_uploading_url'];
    }
}