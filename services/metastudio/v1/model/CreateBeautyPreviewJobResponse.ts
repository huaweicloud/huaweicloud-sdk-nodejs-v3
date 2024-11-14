
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBeautyPreviewJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'pre_beauty_image_upload_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateBeautyPreviewJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withPreBeautyImageUploadUrl(preBeautyImageUploadUrl: string): CreateBeautyPreviewJobResponse {
        this['pre_beauty_image_upload_url'] = preBeautyImageUploadUrl;
        return this;
    }
    public set preBeautyImageUploadUrl(preBeautyImageUploadUrl: string  | undefined) {
        this['pre_beauty_image_upload_url'] = preBeautyImageUploadUrl;
    }
    public get preBeautyImageUploadUrl(): string | undefined {
        return this['pre_beauty_image_upload_url'];
    }
    public withXRequestId(xRequestId: string): CreateBeautyPreviewJobResponse {
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