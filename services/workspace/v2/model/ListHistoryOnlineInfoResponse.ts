
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryOnlineInfoResponse extends SdkResponse {
    private 'time_counts'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTimeCounts(timeCounts: Array<string>): ListHistoryOnlineInfoResponse {
        this['time_counts'] = timeCounts;
        return this;
    }
    public set timeCounts(timeCounts: Array<string>  | undefined) {
        this['time_counts'] = timeCounts;
    }
    public get timeCounts(): Array<string> | undefined {
        return this['time_counts'];
    }
}