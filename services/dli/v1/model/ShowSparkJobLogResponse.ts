
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSparkJobLogResponse extends SdkResponse {
    public id?: string;
    public from?: number;
    public total?: number;
    public log?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSparkJobLogResponse {
        this['id'] = id;
        return this;
    }
    public withFrom(from: number): ShowSparkJobLogResponse {
        this['from'] = from;
        return this;
    }
    public withTotal(total: number): ShowSparkJobLogResponse {
        this['total'] = total;
        return this;
    }
    public withLog(log: Array<string>): ShowSparkJobLogResponse {
        this['log'] = log;
        return this;
    }
}