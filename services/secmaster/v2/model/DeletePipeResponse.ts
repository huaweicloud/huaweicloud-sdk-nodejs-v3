
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePipeResponse extends SdkResponse {
    private 'pipe_id'?: string;
    private 'delete_time'?: number;
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
    public withDeleteTime(deleteTime: number): DeletePipeResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}