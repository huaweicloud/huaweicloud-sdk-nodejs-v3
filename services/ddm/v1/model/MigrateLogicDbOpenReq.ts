import { DataNode } from './DataNode';


export class MigrateLogicDbOpenReq {
    private 'data_nodes'?: Array<DataNode>;
    private 'switch_route_begin_time'?: string;
    private 'switch_route_end_time'?: string;
    private 'new_shard_number'?: string;
    private 'is_exclusive'?: boolean;
    public constructor() { 
    }
    public withDataNodes(dataNodes: Array<DataNode>): MigrateLogicDbOpenReq {
        this['data_nodes'] = dataNodes;
        return this;
    }
    public set dataNodes(dataNodes: Array<DataNode>  | undefined) {
        this['data_nodes'] = dataNodes;
    }
    public get dataNodes(): Array<DataNode> | undefined {
        return this['data_nodes'];
    }
    public withSwitchRouteBeginTime(switchRouteBeginTime: string): MigrateLogicDbOpenReq {
        this['switch_route_begin_time'] = switchRouteBeginTime;
        return this;
    }
    public set switchRouteBeginTime(switchRouteBeginTime: string  | undefined) {
        this['switch_route_begin_time'] = switchRouteBeginTime;
    }
    public get switchRouteBeginTime(): string | undefined {
        return this['switch_route_begin_time'];
    }
    public withSwitchRouteEndTime(switchRouteEndTime: string): MigrateLogicDbOpenReq {
        this['switch_route_end_time'] = switchRouteEndTime;
        return this;
    }
    public set switchRouteEndTime(switchRouteEndTime: string  | undefined) {
        this['switch_route_end_time'] = switchRouteEndTime;
    }
    public get switchRouteEndTime(): string | undefined {
        return this['switch_route_end_time'];
    }
    public withNewShardNumber(newShardNumber: string): MigrateLogicDbOpenReq {
        this['new_shard_number'] = newShardNumber;
        return this;
    }
    public set newShardNumber(newShardNumber: string  | undefined) {
        this['new_shard_number'] = newShardNumber;
    }
    public get newShardNumber(): string | undefined {
        return this['new_shard_number'];
    }
    public withIsExclusive(isExclusive: boolean): MigrateLogicDbOpenReq {
        this['is_exclusive'] = isExclusive;
        return this;
    }
    public set isExclusive(isExclusive: boolean  | undefined) {
        this['is_exclusive'] = isExclusive;
    }
    public get isExclusive(): boolean | undefined {
        return this['is_exclusive'];
    }
}