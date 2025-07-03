import { FrontRow } from './FrontRow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSumTableResponse extends SdkResponse {
    private 'result_id'?: string;
    private 'row_list'?: Array<FrontRow>;
    private 'latest_data_Time'?: number;
    private 'table_direction'?: ShowSumTableResponseTableDirectionEnum | string;
    private 'real_start_time'?: number;
    private 'real_end_time'?: number;
    private 'notice_msg'?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResultId(resultId: string): ShowSumTableResponse {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withRowList(rowList: Array<FrontRow>): ShowSumTableResponse {
        this['row_list'] = rowList;
        return this;
    }
    public set rowList(rowList: Array<FrontRow>  | undefined) {
        this['row_list'] = rowList;
    }
    public get rowList(): Array<FrontRow> | undefined {
        return this['row_list'];
    }
    public withLatestDataTime(latestDataTime: number): ShowSumTableResponse {
        this['latest_data_Time'] = latestDataTime;
        return this;
    }
    public set latestDataTime(latestDataTime: number  | undefined) {
        this['latest_data_Time'] = latestDataTime;
    }
    public get latestDataTime(): number | undefined {
        return this['latest_data_Time'];
    }
    public withTableDirection(tableDirection: ShowSumTableResponseTableDirectionEnum | string): ShowSumTableResponse {
        this['table_direction'] = tableDirection;
        return this;
    }
    public set tableDirection(tableDirection: ShowSumTableResponseTableDirectionEnum | string  | undefined) {
        this['table_direction'] = tableDirection;
    }
    public get tableDirection(): ShowSumTableResponseTableDirectionEnum | string | undefined {
        return this['table_direction'];
    }
    public withRealStartTime(realStartTime: number): ShowSumTableResponse {
        this['real_start_time'] = realStartTime;
        return this;
    }
    public set realStartTime(realStartTime: number  | undefined) {
        this['real_start_time'] = realStartTime;
    }
    public get realStartTime(): number | undefined {
        return this['real_start_time'];
    }
    public withRealEndTime(realEndTime: number): ShowSumTableResponse {
        this['real_end_time'] = realEndTime;
        return this;
    }
    public set realEndTime(realEndTime: number  | undefined) {
        this['real_end_time'] = realEndTime;
    }
    public get realEndTime(): number | undefined {
        return this['real_end_time'];
    }
    public withNoticeMsg(noticeMsg: string): ShowSumTableResponse {
        this['notice_msg'] = noticeMsg;
        return this;
    }
    public set noticeMsg(noticeMsg: string  | undefined) {
        this['notice_msg'] = noticeMsg;
    }
    public get noticeMsg(): string | undefined {
        return this['notice_msg'];
    }
    public withTotalCount(totalCount: number): ShowSumTableResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSumTableResponseTableDirectionEnum {
    H = 'H',
    V = 'V'
}
