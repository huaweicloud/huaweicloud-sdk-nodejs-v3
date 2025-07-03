import { CollectorCategoryInfo } from './CollectorCategoryInfo';
import { MonitorItemEntity } from './MonitorItemEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnvMonitorItemsResponse extends SdkResponse {
    private 'category_info_list'?: Array<CollectorCategoryInfo>;
    private 'monitor_item_info_list'?: Array<MonitorItemEntity>;
    public constructor() { 
        super();
    }
    public withCategoryInfoList(categoryInfoList: Array<CollectorCategoryInfo>): ShowEnvMonitorItemsResponse {
        this['category_info_list'] = categoryInfoList;
        return this;
    }
    public set categoryInfoList(categoryInfoList: Array<CollectorCategoryInfo>  | undefined) {
        this['category_info_list'] = categoryInfoList;
    }
    public get categoryInfoList(): Array<CollectorCategoryInfo> | undefined {
        return this['category_info_list'];
    }
    public withMonitorItemInfoList(monitorItemInfoList: Array<MonitorItemEntity>): ShowEnvMonitorItemsResponse {
        this['monitor_item_info_list'] = monitorItemInfoList;
        return this;
    }
    public set monitorItemInfoList(monitorItemInfoList: Array<MonitorItemEntity>  | undefined) {
        this['monitor_item_info_list'] = monitorItemInfoList;
    }
    public get monitorItemInfoList(): Array<MonitorItemEntity> | undefined {
        return this['monitor_item_info_list'];
    }
}