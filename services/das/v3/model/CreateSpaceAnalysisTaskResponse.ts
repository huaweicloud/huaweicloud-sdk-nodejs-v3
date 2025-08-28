
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSpaceAnalysisTaskResponse extends SdkResponse {
    private 'execution_time'?: number;
    public constructor() { 
        super();
    }
    public withExecutionTime(executionTime: number): CreateSpaceAnalysisTaskResponse {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
}