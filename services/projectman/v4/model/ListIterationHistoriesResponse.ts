import { IterationHistory } from './IterationHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIterationHistoriesResponse extends SdkResponse {
    public total?: number;
    public histories?: Array<IterationHistory>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIterationHistoriesResponse {
        this['total'] = total;
        return this;
    }
    public withHistories(histories: Array<IterationHistory>): ListIterationHistoriesResponse {
        this['histories'] = histories;
        return this;
    }
}