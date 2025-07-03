import { MonitorItem } from './MonitorItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvMonitorItemResponse extends SdkResponse {
    private 'monitor_item_list'?: Array<MonitorItem>;
    private 'total_count'?: number;
    public totalPage?: number;
    public constructor() { 
        super();
    }
    public withMonitorItemList(monitorItemList: Array<MonitorItem>): ListEnvMonitorItemResponse {
        this['monitor_item_list'] = monitorItemList;
        return this;
    }
    public set monitorItemList(monitorItemList: Array<MonitorItem>  | undefined) {
        this['monitor_item_list'] = monitorItemList;
    }
    public get monitorItemList(): Array<MonitorItem> | undefined {
        return this['monitor_item_list'];
    }
    public withTotalCount(totalCount: number): ListEnvMonitorItemResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTotalPage(totalPage: number): ListEnvMonitorItemResponse {
        this['totalPage'] = totalPage;
        return this;
    }
}