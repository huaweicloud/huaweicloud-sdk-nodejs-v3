import { ExTimeTrendItem } from './ExTimeTrendItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExecutionTimeTemplateTrendResponse extends SdkResponse {
    private 'interval_millis'?: number;
    private 'item_list'?: Array<ExTimeTrendItem>;
    public constructor() { 
        super();
    }
    public withIntervalMillis(intervalMillis: number): ShowExecutionTimeTemplateTrendResponse {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
    public withItemList(itemList: Array<ExTimeTrendItem>): ShowExecutionTimeTemplateTrendResponse {
        this['item_list'] = itemList;
        return this;
    }
    public set itemList(itemList: Array<ExTimeTrendItem>  | undefined) {
        this['item_list'] = itemList;
    }
    public get itemList(): Array<ExTimeTrendItem> | undefined {
        return this['item_list'];
    }
}