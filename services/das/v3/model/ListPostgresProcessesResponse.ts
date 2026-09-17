import { PgProcessInfo } from './PgProcessInfo';
import { PgProcessStats } from './PgProcessStats';
import { PgProcessSummary } from './PgProcessSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresProcessesResponse extends SdkResponse {
    private 'process_info_list'?: Array<PgProcessInfo>;
    public total?: number;
    private 'user_info_list'?: Array<string>;
    private 'db_info_list'?: Array<string>;
    private 'host_info_list'?: Array<string>;
    private 'state_info_list'?: Array<string>;
    private 'command_info_list'?: Array<string>;
    private 'session_exec_time'?: object;
    private 'idle_session'?: number;
    private 'active_session'?: number;
    public summary?: Array<PgProcessSummary>;
    private 'user_stats'?: Array<PgProcessStats>;
    private 'host_stats'?: Array<PgProcessStats>;
    private 'db_stats'?: Array<PgProcessStats>;
    private 'show_version_support_message'?: boolean;
    private 'show_warn_message'?: boolean;
    public constructor() { 
        super();
    }
    public withProcessInfoList(processInfoList: Array<PgProcessInfo>): ListPostgresProcessesResponse {
        this['process_info_list'] = processInfoList;
        return this;
    }
    public set processInfoList(processInfoList: Array<PgProcessInfo>  | undefined) {
        this['process_info_list'] = processInfoList;
    }
    public get processInfoList(): Array<PgProcessInfo> | undefined {
        return this['process_info_list'];
    }
    public withTotal(total: number): ListPostgresProcessesResponse {
        this['total'] = total;
        return this;
    }
    public withUserInfoList(userInfoList: Array<string>): ListPostgresProcessesResponse {
        this['user_info_list'] = userInfoList;
        return this;
    }
    public set userInfoList(userInfoList: Array<string>  | undefined) {
        this['user_info_list'] = userInfoList;
    }
    public get userInfoList(): Array<string> | undefined {
        return this['user_info_list'];
    }
    public withDbInfoList(dbInfoList: Array<string>): ListPostgresProcessesResponse {
        this['db_info_list'] = dbInfoList;
        return this;
    }
    public set dbInfoList(dbInfoList: Array<string>  | undefined) {
        this['db_info_list'] = dbInfoList;
    }
    public get dbInfoList(): Array<string> | undefined {
        return this['db_info_list'];
    }
    public withHostInfoList(hostInfoList: Array<string>): ListPostgresProcessesResponse {
        this['host_info_list'] = hostInfoList;
        return this;
    }
    public set hostInfoList(hostInfoList: Array<string>  | undefined) {
        this['host_info_list'] = hostInfoList;
    }
    public get hostInfoList(): Array<string> | undefined {
        return this['host_info_list'];
    }
    public withStateInfoList(stateInfoList: Array<string>): ListPostgresProcessesResponse {
        this['state_info_list'] = stateInfoList;
        return this;
    }
    public set stateInfoList(stateInfoList: Array<string>  | undefined) {
        this['state_info_list'] = stateInfoList;
    }
    public get stateInfoList(): Array<string> | undefined {
        return this['state_info_list'];
    }
    public withCommandInfoList(commandInfoList: Array<string>): ListPostgresProcessesResponse {
        this['command_info_list'] = commandInfoList;
        return this;
    }
    public set commandInfoList(commandInfoList: Array<string>  | undefined) {
        this['command_info_list'] = commandInfoList;
    }
    public get commandInfoList(): Array<string> | undefined {
        return this['command_info_list'];
    }
    public withSessionExecTime(sessionExecTime: object): ListPostgresProcessesResponse {
        this['session_exec_time'] = sessionExecTime;
        return this;
    }
    public set sessionExecTime(sessionExecTime: object  | undefined) {
        this['session_exec_time'] = sessionExecTime;
    }
    public get sessionExecTime(): object | undefined {
        return this['session_exec_time'];
    }
    public withIdleSession(idleSession: number): ListPostgresProcessesResponse {
        this['idle_session'] = idleSession;
        return this;
    }
    public set idleSession(idleSession: number  | undefined) {
        this['idle_session'] = idleSession;
    }
    public get idleSession(): number | undefined {
        return this['idle_session'];
    }
    public withActiveSession(activeSession: number): ListPostgresProcessesResponse {
        this['active_session'] = activeSession;
        return this;
    }
    public set activeSession(activeSession: number  | undefined) {
        this['active_session'] = activeSession;
    }
    public get activeSession(): number | undefined {
        return this['active_session'];
    }
    public withSummary(summary: Array<PgProcessSummary>): ListPostgresProcessesResponse {
        this['summary'] = summary;
        return this;
    }
    public withUserStats(userStats: Array<PgProcessStats>): ListPostgresProcessesResponse {
        this['user_stats'] = userStats;
        return this;
    }
    public set userStats(userStats: Array<PgProcessStats>  | undefined) {
        this['user_stats'] = userStats;
    }
    public get userStats(): Array<PgProcessStats> | undefined {
        return this['user_stats'];
    }
    public withHostStats(hostStats: Array<PgProcessStats>): ListPostgresProcessesResponse {
        this['host_stats'] = hostStats;
        return this;
    }
    public set hostStats(hostStats: Array<PgProcessStats>  | undefined) {
        this['host_stats'] = hostStats;
    }
    public get hostStats(): Array<PgProcessStats> | undefined {
        return this['host_stats'];
    }
    public withDbStats(dbStats: Array<PgProcessStats>): ListPostgresProcessesResponse {
        this['db_stats'] = dbStats;
        return this;
    }
    public set dbStats(dbStats: Array<PgProcessStats>  | undefined) {
        this['db_stats'] = dbStats;
    }
    public get dbStats(): Array<PgProcessStats> | undefined {
        return this['db_stats'];
    }
    public withShowVersionSupportMessage(showVersionSupportMessage: boolean): ListPostgresProcessesResponse {
        this['show_version_support_message'] = showVersionSupportMessage;
        return this;
    }
    public set showVersionSupportMessage(showVersionSupportMessage: boolean  | undefined) {
        this['show_version_support_message'] = showVersionSupportMessage;
    }
    public get showVersionSupportMessage(): boolean | undefined {
        return this['show_version_support_message'];
    }
    public withShowWarnMessage(showWarnMessage: boolean): ListPostgresProcessesResponse {
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