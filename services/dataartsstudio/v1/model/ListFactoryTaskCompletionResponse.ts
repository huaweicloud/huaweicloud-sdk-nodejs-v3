import { ListFactoryTaskCompletionResAverage } from './ListFactoryTaskCompletionResAverage';
import { ListFactoryTaskCompletionResToday } from './ListFactoryTaskCompletionResToday';
import { ListFactoryTaskCompletionResYesterday } from './ListFactoryTaskCompletionResYesterday';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryTaskCompletionResponse extends SdkResponse {
    public yesterday?: Array<ListFactoryTaskCompletionResYesterday>;
    public average?: Array<ListFactoryTaskCompletionResAverage>;
    public today?: Array<ListFactoryTaskCompletionResToday>;
    public constructor() { 
        super();
    }
    public withYesterday(yesterday: Array<ListFactoryTaskCompletionResYesterday>): ListFactoryTaskCompletionResponse {
        this['yesterday'] = yesterday;
        return this;
    }
    public withAverage(average: Array<ListFactoryTaskCompletionResAverage>): ListFactoryTaskCompletionResponse {
        this['average'] = average;
        return this;
    }
    public withToday(today: Array<ListFactoryTaskCompletionResToday>): ListFactoryTaskCompletionResponse {
        this['today'] = today;
        return this;
    }
}