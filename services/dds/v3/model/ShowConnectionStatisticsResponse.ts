import { QueryConnectionsResponse } from './QueryConnectionsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectionStatisticsResponse extends SdkResponse {
    private 'total_connections'?: number;
    private 'total_inner_connections'?: number;
    private 'total_outer_connections'?: number;
    private 'inner_connections'?: Array<QueryConnectionsResponse>;
    private 'outer_connections'?: Array<QueryConnectionsResponse>;
    public constructor() { 
        super();
    }
    public withTotalConnections(totalConnections: number): ShowConnectionStatisticsResponse {
        this['total_connections'] = totalConnections;
        return this;
    }
    public set totalConnections(totalConnections: number  | undefined) {
        this['total_connections'] = totalConnections;
    }
    public get totalConnections(): number | undefined {
        return this['total_connections'];
    }
    public withTotalInnerConnections(totalInnerConnections: number): ShowConnectionStatisticsResponse {
        this['total_inner_connections'] = totalInnerConnections;
        return this;
    }
    public set totalInnerConnections(totalInnerConnections: number  | undefined) {
        this['total_inner_connections'] = totalInnerConnections;
    }
    public get totalInnerConnections(): number | undefined {
        return this['total_inner_connections'];
    }
    public withTotalOuterConnections(totalOuterConnections: number): ShowConnectionStatisticsResponse {
        this['total_outer_connections'] = totalOuterConnections;
        return this;
    }
    public set totalOuterConnections(totalOuterConnections: number  | undefined) {
        this['total_outer_connections'] = totalOuterConnections;
    }
    public get totalOuterConnections(): number | undefined {
        return this['total_outer_connections'];
    }
    public withInnerConnections(innerConnections: Array<QueryConnectionsResponse>): ShowConnectionStatisticsResponse {
        this['inner_connections'] = innerConnections;
        return this;
    }
    public set innerConnections(innerConnections: Array<QueryConnectionsResponse>  | undefined) {
        this['inner_connections'] = innerConnections;
    }
    public get innerConnections(): Array<QueryConnectionsResponse> | undefined {
        return this['inner_connections'];
    }
    public withOuterConnections(outerConnections: Array<QueryConnectionsResponse>): ShowConnectionStatisticsResponse {
        this['outer_connections'] = outerConnections;
        return this;
    }
    public set outerConnections(outerConnections: Array<QueryConnectionsResponse>  | undefined) {
        this['outer_connections'] = outerConnections;
    }
    public get outerConnections(): Array<QueryConnectionsResponse> | undefined {
        return this['outer_connections'];
    }
}