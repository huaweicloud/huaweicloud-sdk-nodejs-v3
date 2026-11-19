

export class SwitchGaussMySqlProxyBinlogPullRequestBody {
    public type?: string;
    private 'support_binlog_pull'?: boolean;
    private 'binlog_route_master'?: boolean;
    public constructor(type?: string, supportBinlogPull?: boolean) { 
        this['type'] = type;
        this['support_binlog_pull'] = supportBinlogPull;
    }
    public withType(type: string): SwitchGaussMySqlProxyBinlogPullRequestBody {
        this['type'] = type;
        return this;
    }
    public withSupportBinlogPull(supportBinlogPull: boolean): SwitchGaussMySqlProxyBinlogPullRequestBody {
        this['support_binlog_pull'] = supportBinlogPull;
        return this;
    }
    public set supportBinlogPull(supportBinlogPull: boolean  | undefined) {
        this['support_binlog_pull'] = supportBinlogPull;
    }
    public get supportBinlogPull(): boolean | undefined {
        return this['support_binlog_pull'];
    }
    public withBinlogRouteMaster(binlogRouteMaster: boolean): SwitchGaussMySqlProxyBinlogPullRequestBody {
        this['binlog_route_master'] = binlogRouteMaster;
        return this;
    }
    public set binlogRouteMaster(binlogRouteMaster: boolean  | undefined) {
        this['binlog_route_master'] = binlogRouteMaster;
    }
    public get binlogRouteMaster(): boolean | undefined {
        return this['binlog_route_master'];
    }
}