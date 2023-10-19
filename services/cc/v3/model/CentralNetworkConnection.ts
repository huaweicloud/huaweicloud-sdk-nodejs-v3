import { BandwidthSize } from './BandwidthSize';
import { BandwidthType } from './BandwidthType';
import { BandwidthTypeEnum } from './BandwidthTypeEnum';
import { CentralNetworkConnectionState } from './CentralNetworkConnectionState';
import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { CentralNetworkId } from './CentralNetworkId';
import { CentralNetworkPlaneId } from './CentralNetworkPlaneId';
import { ConnectionPoint } from './ConnectionPoint';
import { ConnectionPointPair } from './ConnectionPointPair';
import { ConnectionType } from './ConnectionType';
import { ConnectionTypeEnum } from './ConnectionTypeEnum';
import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';
import { IsFrozen } from './IsFrozen';
import { Name } from './Name';
import { UUIDIdentifier } from './UUIDIdentifier';
import { UpdatedAt } from './UpdatedAt';


export class CentralNetworkConnection {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'central_network_id'?: string;
    private 'central_network_plane_id'?: string;
    private 'global_connection_bandwidth_id'?: string;
    private 'bandwidth_type'?: BandwidthTypeEnum;
    private 'bandwidth_size'?: number;
    public state?: CentralNetworkConnectionStateEnum;
    private 'is_frozen'?: boolean;
    private 'connection_type'?: ConnectionTypeEnum;
    private 'connection_point_pair'?: Array<ConnectionPoint>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, name?: string, domainId?: string, centralNetworkId?: string, centralNetworkPlaneId?: string, bandwidthType?: BandwidthTypeEnum, state?: CentralNetworkConnectionStateEnum, isFrozen?: boolean, connectionType?: ConnectionTypeEnum, connectionPointPair?: Array<ConnectionPoint>, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['name'] = name;
        this['domain_id'] = domainId;
        this['central_network_id'] = centralNetworkId;
        this['central_network_plane_id'] = centralNetworkPlaneId;
        this['bandwidth_type'] = bandwidthType;
        this['state'] = state;
        this['is_frozen'] = isFrozen;
        this['connection_type'] = connectionType;
        this['connection_point_pair'] = connectionPointPair;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): CentralNetworkConnection {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CentralNetworkConnection {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CentralNetworkConnection {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CentralNetworkConnection {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CentralNetworkConnection {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCentralNetworkId(centralNetworkId: string): CentralNetworkConnection {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CentralNetworkConnection {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): CentralNetworkConnection {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthType(bandwidthType: BandwidthTypeEnum): CentralNetworkConnection {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: BandwidthTypeEnum  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): BandwidthTypeEnum | undefined {
        return this['bandwidth_type'];
    }
    public withBandwidthSize(bandwidthSize: number): CentralNetworkConnection {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withState(state: CentralNetworkConnectionStateEnum): CentralNetworkConnection {
        this['state'] = state;
        return this;
    }
    public withIsFrozen(isFrozen: boolean): CentralNetworkConnection {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withConnectionType(connectionType: ConnectionTypeEnum): CentralNetworkConnection {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: ConnectionTypeEnum  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): ConnectionTypeEnum | undefined {
        return this['connection_type'];
    }
    public withConnectionPointPair(connectionPointPair: Array<ConnectionPoint>): CentralNetworkConnection {
        this['connection_point_pair'] = connectionPointPair;
        return this;
    }
    public set connectionPointPair(connectionPointPair: Array<ConnectionPoint>  | undefined) {
        this['connection_point_pair'] = connectionPointPair;
    }
    public get connectionPointPair(): Array<ConnectionPoint> | undefined {
        return this['connection_point_pair'];
    }
    public withCreatedAt(createdAt: Date): CentralNetworkConnection {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CentralNetworkConnection {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}