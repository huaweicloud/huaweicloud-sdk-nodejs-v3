import { ESDBSlowSqlTemplateItem } from './ESDBSlowSqlTemplateItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogAnalysisResponse extends SdkResponse {
    public total?: number;
    private 'slow_log_list'?: Array<ESDBSlowSqlTemplateItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSlowLogAnalysisResponse {
        this['total'] = total;
        return this;
    }
    public withSlowLogList(slowLogList: Array<ESDBSlowSqlTemplateItem>): ListSlowLogAnalysisResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<ESDBSlowSqlTemplateItem>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<ESDBSlowSqlTemplateItem> | undefined {
        return this['slow_log_list'];
    }
}