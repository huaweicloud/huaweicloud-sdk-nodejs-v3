import { ReplaySqlNowInfo } from './ReplaySqlNowInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplayProgressResponse extends SdkResponse {
    public progress?: number;
    private 'parse_count'?: number;
    private 'replay_count'?: number;
    private 'task_mode'?: string;
    private 'process_time'?: number;
    private 'transfer_status'?: string;
    private 'max_time'?: number;
    private 'min_time'?: number;
    private 'now_time'?: number;
    private 'min_export_time'?: number;
    private 'max_export_time'?: number;
    private 'replay_sql_now_list'?: Array<ReplaySqlNowInfo>;
    public constructor() { 
        super();
    }
    public withProgress(progress: number): ShowReplayProgressResponse {
        this['progress'] = progress;
        return this;
    }
    public withParseCount(parseCount: number): ShowReplayProgressResponse {
        this['parse_count'] = parseCount;
        return this;
    }
    public set parseCount(parseCount: number  | undefined) {
        this['parse_count'] = parseCount;
    }
    public get parseCount(): number | undefined {
        return this['parse_count'];
    }
    public withReplayCount(replayCount: number): ShowReplayProgressResponse {
        this['replay_count'] = replayCount;
        return this;
    }
    public set replayCount(replayCount: number  | undefined) {
        this['replay_count'] = replayCount;
    }
    public get replayCount(): number | undefined {
        return this['replay_count'];
    }
    public withTaskMode(taskMode: string): ShowReplayProgressResponse {
        this['task_mode'] = taskMode;
        return this;
    }
    public set taskMode(taskMode: string  | undefined) {
        this['task_mode'] = taskMode;
    }
    public get taskMode(): string | undefined {
        return this['task_mode'];
    }
    public withProcessTime(processTime: number): ShowReplayProgressResponse {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): number | undefined {
        return this['process_time'];
    }
    public withTransferStatus(transferStatus: string): ShowReplayProgressResponse {
        this['transfer_status'] = transferStatus;
        return this;
    }
    public set transferStatus(transferStatus: string  | undefined) {
        this['transfer_status'] = transferStatus;
    }
    public get transferStatus(): string | undefined {
        return this['transfer_status'];
    }
    public withMaxTime(maxTime: number): ShowReplayProgressResponse {
        this['max_time'] = maxTime;
        return this;
    }
    public set maxTime(maxTime: number  | undefined) {
        this['max_time'] = maxTime;
    }
    public get maxTime(): number | undefined {
        return this['max_time'];
    }
    public withMinTime(minTime: number): ShowReplayProgressResponse {
        this['min_time'] = minTime;
        return this;
    }
    public set minTime(minTime: number  | undefined) {
        this['min_time'] = minTime;
    }
    public get minTime(): number | undefined {
        return this['min_time'];
    }
    public withNowTime(nowTime: number): ShowReplayProgressResponse {
        this['now_time'] = nowTime;
        return this;
    }
    public set nowTime(nowTime: number  | undefined) {
        this['now_time'] = nowTime;
    }
    public get nowTime(): number | undefined {
        return this['now_time'];
    }
    public withMinExportTime(minExportTime: number): ShowReplayProgressResponse {
        this['min_export_time'] = minExportTime;
        return this;
    }
    public set minExportTime(minExportTime: number  | undefined) {
        this['min_export_time'] = minExportTime;
    }
    public get minExportTime(): number | undefined {
        return this['min_export_time'];
    }
    public withMaxExportTime(maxExportTime: number): ShowReplayProgressResponse {
        this['max_export_time'] = maxExportTime;
        return this;
    }
    public set maxExportTime(maxExportTime: number  | undefined) {
        this['max_export_time'] = maxExportTime;
    }
    public get maxExportTime(): number | undefined {
        return this['max_export_time'];
    }
    public withReplaySqlNowList(replaySqlNowList: Array<ReplaySqlNowInfo>): ShowReplayProgressResponse {
        this['replay_sql_now_list'] = replaySqlNowList;
        return this;
    }
    public set replaySqlNowList(replaySqlNowList: Array<ReplaySqlNowInfo>  | undefined) {
        this['replay_sql_now_list'] = replaySqlNowList;
    }
    public get replaySqlNowList(): Array<ReplaySqlNowInfo> | undefined {
        return this['replay_sql_now_list'];
    }
}