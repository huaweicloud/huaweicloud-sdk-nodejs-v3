
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBatchLogResponse extends SdkResponse {
    public id?: string;
    public from?: string;
    public total?: number;
    public log?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBatchLogResponse {
        this['id'] = id;
        return this;
    }
    public withFrom(from: string): ShowBatchLogResponse {
        this['from'] = from;
        return this;
    }
    public withTotal(total: number): ShowBatchLogResponse {
        this['total'] = total;
        return this;
    }
    public withLog(log: Array<string>): ShowBatchLogResponse {
        this['log'] = log;
        return this;
    }
}