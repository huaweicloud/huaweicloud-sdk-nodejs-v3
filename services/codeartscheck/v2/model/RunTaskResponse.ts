
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunTaskResponse extends SdkResponse {
    private 'exec_id'?: string;
    public constructor() { 
        super();
    }
    public withExecId(execId: string): RunTaskResponse {
        this['exec_id'] = execId;
        return this;
    }
    public set execId(execId: string  | undefined) {
        this['exec_id'] = execId;
    }
    public get execId(): string | undefined {
        return this['exec_id'];
    }
}