import { ConnectionDetail } from './ConnectionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDdsConnectionStatResponse extends SdkResponse {
    private 'total_connections'?: number;
    private 'total_inner_connections'?: number;
    private 'total_outer_connections'?: number;
    private 'inner_connections'?: Array<ConnectionDetail>;
    private 'outer_connections'?: Array<ConnectionDetail>;
    private 'inner_connections_size'?: number;
    private 'outer_connections_size'?: number;
    public constructor() { 
        super();
    }
    public withTotalConnections(totalConnections: number): ShowDdsConnectionStatResponse {
        this['total_connections'] = totalConnections;
        return this;
    }
    public set totalConnections(totalConnections: number  | undefined) {
        this['total_connections'] = totalConnections;
    }
    public get totalConnections(): number | undefined {
        return this['total_connections'];
    }
    public withTotalInnerConnections(totalInnerConnections: number): ShowDdsConnectionStatResponse {
        this['total_inner_connections'] = totalInnerConnections;
        return this;
    }
    public set totalInnerConnections(totalInnerConnections: number  | undefined) {
        this['total_inner_connections'] = totalInnerConnections;
    }
    public get totalInnerConnections(): number | undefined {
        return this['total_inner_connections'];
    }
    public withTotalOuterConnections(totalOuterConnections: number): ShowDdsConnectionStatResponse {
        this['total_outer_connections'] = totalOuterConnections;
        return this;
    }
    public set totalOuterConnections(totalOuterConnections: number  | undefined) {
        this['total_outer_connections'] = totalOuterConnections;
    }
    public get totalOuterConnections(): number | undefined {
        return this['total_outer_connections'];
    }
    public withInnerConnections(innerConnections: Array<ConnectionDetail>): ShowDdsConnectionStatResponse {
        this['inner_connections'] = innerConnections;
        return this;
    }
    public set innerConnections(innerConnections: Array<ConnectionDetail>  | undefined) {
        this['inner_connections'] = innerConnections;
    }
    public get innerConnections(): Array<ConnectionDetail> | undefined {
        return this['inner_connections'];
    }
    public withOuterConnections(outerConnections: Array<ConnectionDetail>): ShowDdsConnectionStatResponse {
        this['outer_connections'] = outerConnections;
        return this;
    }
    public set outerConnections(outerConnections: Array<ConnectionDetail>  | undefined) {
        this['outer_connections'] = outerConnections;
    }
    public get outerConnections(): Array<ConnectionDetail> | undefined {
        return this['outer_connections'];
    }
    public withInnerConnectionsSize(innerConnectionsSize: number): ShowDdsConnectionStatResponse {
        this['inner_connections_size'] = innerConnectionsSize;
        return this;
    }
    public set innerConnectionsSize(innerConnectionsSize: number  | undefined) {
        this['inner_connections_size'] = innerConnectionsSize;
    }
    public get innerConnectionsSize(): number | undefined {
        return this['inner_connections_size'];
    }
    public withOuterConnectionsSize(outerConnectionsSize: number): ShowDdsConnectionStatResponse {
        this['outer_connections_size'] = outerConnectionsSize;
        return this;
    }
    public set outerConnectionsSize(outerConnectionsSize: number  | undefined) {
        this['outer_connections_size'] = outerConnectionsSize;
    }
    public get outerConnectionsSize(): number | undefined {
        return this['outer_connections_size'];
    }
}