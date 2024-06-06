
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePipelineInfoResponse extends SdkResponse {
    private 'pipeline_id'?: string;
    public constructor() { 
        super();
    }
    public withPipelineId(pipelineId: string): UpdatePipelineInfoResponse {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
}