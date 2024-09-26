import { BandwidthSize } from './BandwidthSize';
import { CentralNetworkConnectionPlaneId } from './CentralNetworkConnectionPlaneId';
import { CentralNetworkConnectionState } from './CentralNetworkConnectionState';
import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { ConnectionPoint } from './ConnectionPoint';
import { ConnectionPointPair } from './ConnectionPointPair';
import { ConnectionType } from './ConnectionType';
import { ConnectionTypeEnum } from './ConnectionTypeEnum';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';
import { UUID64Identifier } from './UUID64Identifier';


export class CentralNetworkConnectionInfo {
    public id?: string;
    private 'plane_id'?: string;
    private 'global_connection_bandwidth_id'?: string;
    private 'bandwidth_size'?: number;
    private 'connection_type'?: ConnectionTypeEnum;
    private 'connection_point_pair'?: Array<ConnectionPoint>;
    public state?: CentralNetworkConnectionStateEnum;
    public constructor(id?: string, planeId?: string, connectionType?: ConnectionTypeEnum, connectionPointPair?: Array<ConnectionPoint>, state?: CentralNetworkConnectionStateEnum) { 
        this['id'] = id;
        this['plane_id'] = planeId;
        this['connection_type'] = connectionType;
        this['connection_point_pair'] = connectionPointPair;
        this['state'] = state;
    }
    public withId(id: string): CentralNetworkConnectionInfo {
        this['id'] = id;
        return this;
    }
    public withPlaneId(planeId: string): CentralNetworkConnectionInfo {
        this['plane_id'] = planeId;
        return this;
    }
    public set planeId(planeId: string  | undefined) {
        this['plane_id'] = planeId;
    }
    public get planeId(): string | undefined {
        return this['plane_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): CentralNetworkConnectionInfo {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthSize(bandwidthSize: number): CentralNetworkConnectionInfo {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withConnectionType(connectionType: ConnectionTypeEnum): CentralNetworkConnectionInfo {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: ConnectionTypeEnum  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): ConnectionTypeEnum | undefined {
        return this['connection_type'];
    }
    public withConnectionPointPair(connectionPointPair: Array<ConnectionPoint>): CentralNetworkConnectionInfo {
        this['connection_point_pair'] = connectionPointPair;
        return this;
    }
    public set connectionPointPair(connectionPointPair: Array<ConnectionPoint>  | undefined) {
        this['connection_point_pair'] = connectionPointPair;
    }
    public get connectionPointPair(): Array<ConnectionPoint> | undefined {
        return this['connection_point_pair'];
    }
    public withState(state: CentralNetworkConnectionStateEnum): CentralNetworkConnectionInfo {
        this['state'] = state;
        return this;
    }
}