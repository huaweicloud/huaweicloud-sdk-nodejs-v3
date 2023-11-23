import { ListInstancesSessionStatisticsRespondBodyTopSourceIps } from './ListInstancesSessionStatisticsRespondBodyTopSourceIps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesSessionStatisticsResponse extends SdkResponse {
    private 'total_connection_count'?: number;
    private 'active_connection_count'?: number;
    private 'top_source_ips'?: Array<ListInstancesSessionStatisticsRespondBodyTopSourceIps>;
    private 'top_dbs'?: object;
    public constructor() { 
        super();
    }
    public withTotalConnectionCount(totalConnectionCount: number): ListInstancesSessionStatisticsResponse {
        this['total_connection_count'] = totalConnectionCount;
        return this;
    }
    public set totalConnectionCount(totalConnectionCount: number  | undefined) {
        this['total_connection_count'] = totalConnectionCount;
    }
    public get totalConnectionCount(): number | undefined {
        return this['total_connection_count'];
    }
    public withActiveConnectionCount(activeConnectionCount: number): ListInstancesSessionStatisticsResponse {
        this['active_connection_count'] = activeConnectionCount;
        return this;
    }
    public set activeConnectionCount(activeConnectionCount: number  | undefined) {
        this['active_connection_count'] = activeConnectionCount;
    }
    public get activeConnectionCount(): number | undefined {
        return this['active_connection_count'];
    }
    public withTopSourceIps(topSourceIps: Array<ListInstancesSessionStatisticsRespondBodyTopSourceIps>): ListInstancesSessionStatisticsResponse {
        this['top_source_ips'] = topSourceIps;
        return this;
    }
    public set topSourceIps(topSourceIps: Array<ListInstancesSessionStatisticsRespondBodyTopSourceIps>  | undefined) {
        this['top_source_ips'] = topSourceIps;
    }
    public get topSourceIps(): Array<ListInstancesSessionStatisticsRespondBodyTopSourceIps> | undefined {
        return this['top_source_ips'];
    }
    public withTopDbs(topDbs: object): ListInstancesSessionStatisticsResponse {
        this['top_dbs'] = topDbs;
        return this;
    }
    public set topDbs(topDbs: object  | undefined) {
        this['top_dbs'] = topDbs;
    }
    public get topDbs(): object | undefined {
        return this['top_dbs'];
    }
}