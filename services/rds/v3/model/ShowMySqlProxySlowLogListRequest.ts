

export class ShowMySqlProxySlowLogListRequest {
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    private 'X-Language'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'per_page'?: number;
    private 'line_num'?: string;
    public constructor(instanceId?: string, proxyId?: string, startTime?: number, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ShowMySqlProxySlowLogListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): ShowMySqlProxySlowLogListRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withXLanguage(xLanguage: string): ShowMySqlProxySlowLogListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withStartTime(startTime: number): ShowMySqlProxySlowLogListRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowMySqlProxySlowLogListRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPerPage(perPage: number): ShowMySqlProxySlowLogListRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withLineNum(lineNum: string): ShowMySqlProxySlowLogListRequest {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
}