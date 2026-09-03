import { ProcessInfo } from './ProcessInfo';
import { ProcessStats } from './ProcessStats';
import { ProcessSummary } from './ProcessSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionProcessesResponse extends SdkResponse {
    private 'process_info_list'?: Array<ProcessInfo>;
    public total?: number;
    private 'user_info_list'?: Array<string>;
    private 'db_info_list'?: Array<string>;
    private 'host_info_list'?: Array<string>;
    private 'state_info_list'?: Array<string>;
    private 'command_info_list'?: Array<string>;
    private 'session_exec_time'?: object;
    private 'idle_session'?: number;
    private 'active_session'?: number;
    public summary?: Array<ProcessSummary>;
    private 'user_stats'?: Array<ProcessStats>;
    private 'host_stats'?: Array<ProcessStats>;
    private 'db_stats'?: Array<ProcessStats>;
    private 'show_version_support_message'?: boolean;
    private 'show_warn_message'?: boolean;
    public constructor() { 
        super();
    }
    public withProcessInfoList(processInfoList: Array<ProcessInfo>): ListConnectionProcessesResponse {
        this['process_info_list'] = processInfoList;
        return this;
    }
    public set processInfoList(processInfoList: Array<ProcessInfo>  | undefined) {
        this['process_info_list'] = processInfoList;
    }
    public get processInfoList(): Array<ProcessInfo> | undefined {
        return this['process_info_list'];
    }
    public withTotal(total: number): ListConnectionProcessesResponse {
        this['total'] = total;
        return this;
    }
    public withUserInfoList(userInfoList: Array<string>): ListConnectionProcessesResponse {
        this['user_info_list'] = userInfoList;
        return this;
    }
    public set userInfoList(userInfoList: Array<string>  | undefined) {
        this['user_info_list'] = userInfoList;
    }
    public get userInfoList(): Array<string> | undefined {
        return this['user_info_list'];
    }
    public withDbInfoList(dbInfoList: Array<string>): ListConnectionProcessesResponse {
        this['db_info_list'] = dbInfoList;
        return this;
    }
    public set dbInfoList(dbInfoList: Array<string>  | undefined) {
        this['db_info_list'] = dbInfoList;
    }
    public get dbInfoList(): Array<string> | undefined {
        return this['db_info_list'];
    }
    public withHostInfoList(hostInfoList: Array<string>): ListConnectionProcessesResponse {
        this['host_info_list'] = hostInfoList;
        return this;
    }
    public set hostInfoList(hostInfoList: Array<string>  | undefined) {
        this['host_info_list'] = hostInfoList;
    }
    public get hostInfoList(): Array<string> | undefined {
        return this['host_info_list'];
    }
    public withStateInfoList(stateInfoList: Array<string>): ListConnectionProcessesResponse {
        this['state_info_list'] = stateInfoList;
        return this;
    }
    public set stateInfoList(stateInfoList: Array<string>  | undefined) {
        this['state_info_list'] = stateInfoList;
    }
    public get stateInfoList(): Array<string> | undefined {
        return this['state_info_list'];
    }
    public withCommandInfoList(commandInfoList: Array<string>): ListConnectionProcessesResponse {
        this['command_info_list'] = commandInfoList;
        return this;
    }
    public set commandInfoList(commandInfoList: Array<string>  | undefined) {
        this['command_info_list'] = commandInfoList;
    }
    public get commandInfoList(): Array<string> | undefined {
        return this['command_info_list'];
    }
    public withSessionExecTime(sessionExecTime: object): ListConnectionProcessesResponse {
        this['session_exec_time'] = sessionExecTime;
        return this;
    }
    public set sessionExecTime(sessionExecTime: object  | undefined) {
        this['session_exec_time'] = sessionExecTime;
    }
    public get sessionExecTime(): object | undefined {
        return this['session_exec_time'];
    }
    public withIdleSession(idleSession: number): ListConnectionProcessesResponse {
        this['idle_session'] = idleSession;
        return this;
    }
    public set idleSession(idleSession: number  | undefined) {
        this['idle_session'] = idleSession;
    }
    public get idleSession(): number | undefined {
        return this['idle_session'];
    }
    public withActiveSession(activeSession: number): ListConnectionProcessesResponse {
        this['active_session'] = activeSession;
        return this;
    }
    public set activeSession(activeSession: number  | undefined) {
        this['active_session'] = activeSession;
    }
    public get activeSession(): number | undefined {
        return this['active_session'];
    }
    public withSummary(summary: Array<ProcessSummary>): ListConnectionProcessesResponse {
        this['summary'] = summary;
        return this;
    }
    public withUserStats(userStats: Array<ProcessStats>): ListConnectionProcessesResponse {
        this['user_stats'] = userStats;
        return this;
    }
    public set userStats(userStats: Array<ProcessStats>  | undefined) {
        this['user_stats'] = userStats;
    }
    public get userStats(): Array<ProcessStats> | undefined {
        return this['user_stats'];
    }
    public withHostStats(hostStats: Array<ProcessStats>): ListConnectionProcessesResponse {
        this['host_stats'] = hostStats;
        return this;
    }
    public set hostStats(hostStats: Array<ProcessStats>  | undefined) {
        this['host_stats'] = hostStats;
    }
    public get hostStats(): Array<ProcessStats> | undefined {
        return this['host_stats'];
    }
    public withDbStats(dbStats: Array<ProcessStats>): ListConnectionProcessesResponse {
        this['db_stats'] = dbStats;
        return this;
    }
    public set dbStats(dbStats: Array<ProcessStats>  | undefined) {
        this['db_stats'] = dbStats;
    }
    public get dbStats(): Array<ProcessStats> | undefined {
        return this['db_stats'];
    }
    public withShowVersionSupportMessage(showVersionSupportMessage: boolean): ListConnectionProcessesResponse {
        this['show_version_support_message'] = showVersionSupportMessage;
        return this;
    }
    public set showVersionSupportMessage(showVersionSupportMessage: boolean  | undefined) {
        this['show_version_support_message'] = showVersionSupportMessage;
    }
    public get showVersionSupportMessage(): boolean | undefined {
        return this['show_version_support_message'];
    }
    public withShowWarnMessage(showWarnMessage: boolean): ListConnectionProcessesResponse {
        this['show_warn_message'] = showWarnMessage;
        return this;
    }
    public set showWarnMessage(showWarnMessage: boolean  | undefined) {
        this['show_warn_message'] = showWarnMessage;
    }
    public get showWarnMessage(): boolean | undefined {
        return this['show_warn_message'];
    }
}