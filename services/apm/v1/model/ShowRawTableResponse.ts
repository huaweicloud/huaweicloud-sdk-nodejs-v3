import { FrontRow } from './FrontRow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRawTableResponse extends SdkResponse {
    private 'row_list'?: Array<FrontRow>;
    private 'latest_data_Time'?: string;
    private 'table_direction'?: ShowRawTableResponseTableDirectionEnum | string;
    private 'result_id'?: string;
    private 'real_start_time'?: number;
    private 'real_end_time'?: number;
    public constructor() { 
        super();
    }
    public withRowList(rowList: Array<FrontRow>): ShowRawTableResponse {
        this['row_list'] = rowList;
        return this;
    }
    public set rowList(rowList: Array<FrontRow>  | undefined) {
        this['row_list'] = rowList;
    }
    public get rowList(): Array<FrontRow> | undefined {
        return this['row_list'];
    }
    public withLatestDataTime(latestDataTime: string): ShowRawTableResponse {
        this['latest_data_Time'] = latestDataTime;
        return this;
    }
    public set latestDataTime(latestDataTime: string  | undefined) {
        this['latest_data_Time'] = latestDataTime;
    }
    public get latestDataTime(): string | undefined {
        return this['latest_data_Time'];
    }
    public withTableDirection(tableDirection: ShowRawTableResponseTableDirectionEnum | string): ShowRawTableResponse {
        this['table_direction'] = tableDirection;
        return this;
    }
    public set tableDirection(tableDirection: ShowRawTableResponseTableDirectionEnum | string  | undefined) {
        this['table_direction'] = tableDirection;
    }
    public get tableDirection(): ShowRawTableResponseTableDirectionEnum | string | undefined {
        return this['table_direction'];
    }
    public withResultId(resultId: string): ShowRawTableResponse {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withRealStartTime(realStartTime: number): ShowRawTableResponse {
        this['real_start_time'] = realStartTime;
        return this;
    }
    public set realStartTime(realStartTime: number  | undefined) {
        this['real_start_time'] = realStartTime;
    }
    public get realStartTime(): number | undefined {
        return this['real_start_time'];
    }
    public withRealEndTime(realEndTime: number): ShowRawTableResponse {
        this['real_end_time'] = realEndTime;
        return this;
    }
    public set realEndTime(realEndTime: number  | undefined) {
        this['real_end_time'] = realEndTime;
    }
    public get realEndTime(): number | undefined {
        return this['real_end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRawTableResponseTableDirectionEnum {
    H = 'H',
    V = 'V'
}
