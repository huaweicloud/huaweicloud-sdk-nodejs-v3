

export class ShowConnectionMonitorRequest {
    private 'connection_monitor_id'?: string;
    public constructor(connectionMonitorId?: string) { 
        this['connection_monitor_id'] = connectionMonitorId;
    }
    public withConnectionMonitorId(connectionMonitorId: string): ShowConnectionMonitorRequest {
        this['connection_monitor_id'] = connectionMonitorId;
        return this;
    }
    public set connectionMonitorId(connectionMonitorId: string  | undefined) {
        this['connection_monitor_id'] = connectionMonitorId;
    }
    public get connectionMonitorId(): string | undefined {
        return this['connection_monitor_id'];
    }
}