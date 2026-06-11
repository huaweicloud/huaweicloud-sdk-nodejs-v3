import { TopObject } from './TopObject';
import { TopObjectOverview } from './TopObjectOverview';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopObjectsResponse extends SdkResponse {
    private 'cur_time'?: number;
    private 'top_object_list'?: Array<TopObject>;
    private 'top_object_overview_list'?: Array<TopObjectOverview>;
    public constructor() { 
        super();
    }
    public withCurTime(curTime: number): ShowTopObjectsResponse {
        this['cur_time'] = curTime;
        return this;
    }
    public set curTime(curTime: number  | undefined) {
        this['cur_time'] = curTime;
    }
    public get curTime(): number | undefined {
        return this['cur_time'];
    }
    public withTopObjectList(topObjectList: Array<TopObject>): ShowTopObjectsResponse {
        this['top_object_list'] = topObjectList;
        return this;
    }
    public set topObjectList(topObjectList: Array<TopObject>  | undefined) {
        this['top_object_list'] = topObjectList;
    }
    public get topObjectList(): Array<TopObject> | undefined {
        return this['top_object_list'];
    }
    public withTopObjectOverviewList(topObjectOverviewList: Array<TopObjectOverview>): ShowTopObjectsResponse {
        this['top_object_overview_list'] = topObjectOverviewList;
        return this;
    }
    public set topObjectOverviewList(topObjectOverviewList: Array<TopObjectOverview>  | undefined) {
        this['top_object_overview_list'] = topObjectOverviewList;
    }
    public get topObjectOverviewList(): Array<TopObjectOverview> | undefined {
        return this['top_object_overview_list'];
    }
}