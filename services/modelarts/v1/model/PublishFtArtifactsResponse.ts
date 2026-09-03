
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishFtArtifactsResponse extends SdkResponse {
    private 'model_id'?: string;
    public constructor() { 
        super();
    }
    public withModelId(modelId: string): PublishFtArtifactsResponse {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}