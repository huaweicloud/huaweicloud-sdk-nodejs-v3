
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFutureExecutionsResponse extends SdkResponse {
    private 'future_executions'?: Array<string>;
    private 'time_zone'?: string;
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
    public withTimeZone(timeZone: string): ListFutureExecutionsResponse {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}