import { StartLogsReq } from './StartLogsReq';


export class StartLogsRequest {
    private 'cluster_id'?: string;
    public action?: StartLogsRequestActionEnum | string;
    public body?: StartLogsReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): StartLogsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAction(action: StartLogsRequestActionEnum | string): StartLogsRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: StartLogsReq): StartLogsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartLogsRequestActionEnum {
    BASE_LOG_COLLECT = 'base_log_collect',
    REAL_TIME_LOG_COLLECT = 'real_time_log_collect'
}
