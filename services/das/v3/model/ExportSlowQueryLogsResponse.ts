import { SlowLog } from './SlowLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportSlowQueryLogsResponse extends SdkResponse {
    private 'slow_logs'?: Array<SlowLog>;
    private 'next_marker'?: string;
    public constructor() { 
        super();
    }
    public withSlowLogs(slowLogs: Array<SlowLog>): ExportSlowQueryLogsResponse {
        this['slow_logs'] = slowLogs;
        return this;
    }
    public set slowLogs(slowLogs: Array<SlowLog>  | undefined) {
        this['slow_logs'] = slowLogs;
    }
    public get slowLogs(): Array<SlowLog> | undefined {
        return this['slow_logs'];
    }
    public withNextMarker(nextMarker: string): ExportSlowQueryLogsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
}