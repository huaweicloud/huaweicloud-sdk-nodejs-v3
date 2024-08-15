import { LogContents } from './LogContents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogsResponse extends SdkResponse {
    public count?: number;
    public logs?: Array<LogContents>;
    public isQueryComplete?: boolean;
    public analysisLogs?: Array<{ [key: string]: string; }>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListLogsResponse {
        this['count'] = count;
        return this;
    }
    public withLogs(logs: Array<LogContents>): ListLogsResponse {
        this['logs'] = logs;
        return this;
    }
    public withIsQueryComplete(isQueryComplete: boolean): ListLogsResponse {
        this['isQueryComplete'] = isQueryComplete;
        return this;
    }
    public withAnalysisLogs(analysisLogs: Array<{ [key: string]: string; }>): ListLogsResponse {
        this['analysisLogs'] = analysisLogs;
        return this;
    }
}