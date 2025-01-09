
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFutureExecutionsResponse extends SdkResponse {
    private 'future_executions'?: Array<string>;
    public constructor() { 
        super();
    }
    public withFutureExecutions(futureExecutions: Array<string>): ListFutureExecutionsResponse {
        this['future_executions'] = futureExecutions;
        return this;
    }
    public set futureExecutions(futureExecutions: Array<string>  | undefined) {
        this['future_executions'] = futureExecutions;
    }
    public get futureExecutions(): Array<string> | undefined {
        return this['future_executions'];
    }
}