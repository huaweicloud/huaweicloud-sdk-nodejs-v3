import { FrontLine } from './FrontLine';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrendResponse extends SdkResponse {
    private 'line_list'?: Array<FrontLine>;
    private 'latest_data_Time'?: number;
    public constructor() { 
        super();
    }
    public withLineList(lineList: Array<FrontLine>): ShowTrendResponse {
        this['line_list'] = lineList;
        return this;
    }
    public set lineList(lineList: Array<FrontLine>  | undefined) {
        this['line_list'] = lineList;
    }
    public get lineList(): Array<FrontLine> | undefined {
        return this['line_list'];
    }
    public withLatestDataTime(latestDataTime: number): ShowTrendResponse {
        this['latest_data_Time'] = latestDataTime;
        return this;
    }
    public set latestDataTime(latestDataTime: number  | undefined) {
        this['latest_data_Time'] = latestDataTime;
    }
    public get latestDataTime(): number | undefined {
        return this['latest_data_Time'];
    }
}