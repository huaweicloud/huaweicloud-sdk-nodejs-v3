import { BandwidthTypeEnum } from './BandwidthTypeEnum';
import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { ConnectionTypeEnum } from './ConnectionTypeEnum';
import { SortDir } from './SortDir';


export class ListCentralNetworkConnectionsRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public name?: Array<string>;
    public state?: Array<CentralNetworkConnectionStateEnum>;
    private 'central_network_id'?: string;
    private 'global_connection_bandwidth_id'?: Array<string>;
    private 'bandwidth_type'?: BandwidthTypeEnum;
    private 'connection_type'?: ConnectionTypeEnum;
    private 'is_cross_region'?: boolean;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withLimit(limit: number): ListCentralNetworkConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkConnectionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListCentralNetworkConnectionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListCentralNetworkConnectionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListCentralNetworkConnectionsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCentralNetworkConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: Array<CentralNetworkConnectionStateEnum>): ListCentralNetworkConnectionsRequest {
        this['state'] = state;
        return this;
    }
    public withCentralNetworkId(centralNetworkId: string): ListCentralNetworkConnectionsRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: Array<string>): ListCentralNetworkConnectionsRequest {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: Array<string>  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): Array<string> | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): ListCentralNetworkConnectionsRequest {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
    public withConnectionType(connectionType: ConnectionTypeEnum): ListCentralNetworkConnectionsRequest {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: ConnectionTypeEnum  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): ConnectionTypeEnum | undefined {
        return this['connection_type'];
    }
    public withIsCrossRegion(isCrossRegion: boolean): ListCentralNetworkConnectionsRequest {
        this['is_cross_region'] = isCrossRegion;
        return this;
    }
    public set isCrossRegion(isCrossRegion: boolean  | undefined) {
        this['is_cross_region'] = isCrossRegion;
    }
    public get isCrossRegion(): boolean | undefined {
        return this['is_cross_region'];
    }
}