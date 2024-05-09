import { FlinkJobExecutionGraph } from './FlinkJobExecutionGraph';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlinkJobExecutionGraphResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    private 'execute_graph'?: FlinkJobExecutionGraph;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): ShowFlinkJobExecutionGraphResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowFlinkJobExecutionGraphResponse {
        this['message'] = message;
        return this;
    }
    public withExecuteGraph(executeGraph: FlinkJobExecutionGraph): ShowFlinkJobExecutionGraphResponse {
        this['execute_graph'] = executeGraph;
        return this;
    }
    public set executeGraph(executeGraph: FlinkJobExecutionGraph  | undefined) {
        this['execute_graph'] = executeGraph;
    }
    public get executeGraph(): FlinkJobExecutionGraph | undefined {
        return this['execute_graph'];
    }
}