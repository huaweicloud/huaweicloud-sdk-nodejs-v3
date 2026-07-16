import { ListEnginesItems } from './ListEnginesItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobEnginesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ListEnginesItems>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowTrainingJobEnginesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ListEnginesItems>): ShowTrainingJobEnginesResponse {
        this['items'] = items;
        return this;
    }
}