
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePictureModelingByUrlJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'model_asset_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreatePictureModelingByUrlJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withModelAssetId(modelAssetId: string): CreatePictureModelingByUrlJobResponse {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
}