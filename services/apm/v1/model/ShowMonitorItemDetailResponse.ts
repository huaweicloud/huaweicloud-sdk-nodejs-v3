import { ConfigItemValue } from './ConfigItemValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonitorItemDetailResponse extends SdkResponse {
    public interval?: number;
    private 'collector_id'?: number;
    private 'config_item_list'?: Array<ConfigItemValue>;
    public constructor() { 
        super();
    }
    public withInterval(interval: number): ShowMonitorItemDetailResponse {
        this['interval'] = interval;
        return this;
    }
    public withCollectorId(collectorId: number): ShowMonitorItemDetailResponse {
        this['collector_id'] = collectorId;
        return this;
    }
    public set collectorId(collectorId: number  | undefined) {
        this['collector_id'] = collectorId;
    }
    public get collectorId(): number | undefined {
        return this['collector_id'];
    }
    public withConfigItemList(configItemList: Array<ConfigItemValue>): ShowMonitorItemDetailResponse {
        this['config_item_list'] = configItemList;
        return this;
    }
    public set configItemList(configItemList: Array<ConfigItemValue>  | undefined) {
        this['config_item_list'] = configItemList;
    }
    public get configItemList(): Array<ConfigItemValue> | undefined {
        return this['config_item_list'];
    }
}