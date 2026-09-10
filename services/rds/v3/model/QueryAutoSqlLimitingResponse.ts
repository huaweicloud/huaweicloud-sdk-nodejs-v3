
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class QueryAutoSqlLimitingResponse extends SdkResponse {
    private 'cpu_usage'?: number;
    private 'active_sessions'?: number;
    public condition?: string;
    public duration?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'session_allow'?: number;
    public user?: Array<string>;
    public db?: Array<string>;
    private 'clear_time'?: number;
    public enable?: boolean;
    private 'is_keyword'?: boolean;
    private 'max_concurrency'?: number;
    private 'retain_sql_rule'?: boolean;
    private 'kill_session_switch'?: boolean;
    public constructor() { 
        super();
    }
    public withCpuUsage(cpuUsage: number): QueryAutoSqlLimitingResponse {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withActiveSessions(activeSessions: number): QueryAutoSqlLimitingResponse {
        this['active_sessions'] = activeSessions;
        return this;
    }
    public set activeSessions(activeSessions: number  | undefined) {
        this['active_sessions'] = activeSessions;
    }
    public get activeSessions(): number | undefined {
        return this['active_sessions'];
    }
    public withCondition(condition: string): QueryAutoSqlLimitingResponse {
        this['condition'] = condition;
        return this;
    }
    public withDuration(duration: number): QueryAutoSqlLimitingResponse {
        this['duration'] = duration;
        return this;
    }
    public withStartTime(startTime: string): QueryAutoSqlLimitingResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryAutoSqlLimitingResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSessionAllow(sessionAllow: number): QueryAutoSqlLimitingResponse {
        this['session_allow'] = sessionAllow;
        return this;
    }
    public set sessionAllow(sessionAllow: number  | undefined) {
        this['session_allow'] = sessionAllow;
    }
    public get sessionAllow(): number | undefined {
        return this['session_allow'];
    }
    public withUser(user: Array<string>): QueryAutoSqlLimitingResponse {
        this['user'] = user;
        return this;
    }
    public withDb(db: Array<string>): QueryAutoSqlLimitingResponse {
        this['db'] = db;
        return this;
    }
    public withClearTime(clearTime: number): QueryAutoSqlLimitingResponse {
        this['clear_time'] = clearTime;
        return this;
    }
    public set clearTime(clearTime: number  | undefined) {
        this['clear_time'] = clearTime;
    }
    public get clearTime(): number | undefined {
        return this['clear_time'];
    }
    public withEnable(enable: boolean): QueryAutoSqlLimitingResponse {
        this['enable'] = enable;
        return this;
    }
    public withIsKeyword(isKeyword: boolean): QueryAutoSqlLimitingResponse {
        this['is_keyword'] = isKeyword;
        return this;
    }
    public set isKeyword(isKeyword: boolean  | undefined) {
        this['is_keyword'] = isKeyword;
    }
    public get isKeyword(): boolean | undefined {
        return this['is_keyword'];
    }
    public withMaxConcurrency(maxConcurrency: number): QueryAutoSqlLimitingResponse {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withRetainSqlRule(retainSqlRule: boolean): QueryAutoSqlLimitingResponse {
        this['retain_sql_rule'] = retainSqlRule;
        return this;
    }
    public set retainSqlRule(retainSqlRule: boolean  | undefined) {
        this['retain_sql_rule'] = retainSqlRule;
    }
    public get retainSqlRule(): boolean | undefined {
        return this['retain_sql_rule'];
    }
    public withKillSessionSwitch(killSessionSwitch: boolean): QueryAutoSqlLimitingResponse {
        this['kill_session_switch'] = killSessionSwitch;
        return this;
    }
    public set killSessionSwitch(killSessionSwitch: boolean  | undefined) {
        this['kill_session_switch'] = killSessionSwitch;
    }
    public get killSessionSwitch(): boolean | undefined {
        return this['kill_session_switch'];
    }
}