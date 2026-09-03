import { SqlTplTrendItem } from './SqlTplTrendItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlTemplateTrendResponse extends SdkResponse {
    private 'interval_millis'?: number;
    private 'item_list'?: Array<SqlTplTrendItem>;
    public constructor() { 
        super();
    }
    public withIntervalMillis(intervalMillis: number): ShowSqlTemplateTrendResponse {
        this['interval_millis'] = intervalMillis;
        return this;
    }
    public set intervalMillis(intervalMillis: number  | undefined) {
        this['interval_millis'] = intervalMillis;
    }
    public get intervalMillis(): number | undefined {
        return this['interval_millis'];
    }
    public withItemList(itemList: Array<SqlTplTrendItem>): ShowSqlTemplateTrendResponse {
        this['item_list'] = itemList;
        return this;
    }
    public set itemList(itemList: Array<SqlTplTrendItem>  | undefined) {
        this['item_list'] = itemList;
    }
    public get itemList(): Array<SqlTplTrendItem> | undefined {
        return this['item_list'];
    }
}