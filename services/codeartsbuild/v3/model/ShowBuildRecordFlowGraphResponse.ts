import { FlowGraph2Result } from './FlowGraph2Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBuildRecordFlowGraphResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: FlowGraph2Result;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowBuildRecordFlowGraphResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowBuildRecordFlowGraphResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FlowGraph2Result): ShowBuildRecordFlowGraphResponse {
        this['result'] = result;
        return this;
    }
}