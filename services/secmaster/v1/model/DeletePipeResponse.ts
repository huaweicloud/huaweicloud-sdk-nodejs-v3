
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePipeResponse extends SdkResponse {
    private 'pipe_id'?: string;
    public constructor() { 
        super();
    }
    public withPipeId(pipeId: string): DeletePipeResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
}