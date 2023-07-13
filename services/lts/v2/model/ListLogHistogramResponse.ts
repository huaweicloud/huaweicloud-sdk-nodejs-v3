
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogHistogramResponse extends SdkResponse {
    public histogram?: string;
    public count?: number;
    public isQueryComplete?: boolean;
    public constructor() { 
        super();
    }
    public withHistogram(histogram: string): ListLogHistogramResponse {
        this['histogram'] = histogram;
        return this;
    }
    public withCount(count: number): ListLogHistogramResponse {
        this['count'] = count;
        return this;
    }
    public withIsQueryComplete(isQueryComplete: boolean): ListLogHistogramResponse {
        this['isQueryComplete'] = isQueryComplete;
        return this;
    }
}