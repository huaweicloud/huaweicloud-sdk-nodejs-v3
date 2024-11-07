import { BandwidthSize } from './BandwidthSize';
import { CreatedAt } from './CreatedAt';
import { CrossRegionType } from './CrossRegionType';
import { CrossRegionTypeEnum } from './CrossRegionTypeEnum';
import { DirectedEdge } from './DirectedEdge';
import { DirectedEdgePair } from './DirectedEdgePair';
import { FrozenEffect } from './FrozenEffect';
import { FrozenEffectEnum } from './FrozenEffectEnum';
import { GlobalConnectionBandwidthId } from './GlobalConnectionBandwidthId';
import { IsFrozen } from './IsFrozen';
import { SiteConnectionState } from './SiteConnectionState';
import { SiteConnectionStateEnum } from './SiteConnectionStateEnum';
import { SiteNetworkId } from './SiteNetworkId';
import { UUID64Identifier } from './UUID64Identifier';
import { UpdatedAt } from './UpdatedAt';


export class SiteConnection {
    public id?: string;
    private 'site_network_id'?: string;
    public state?: SiteConnectionStateEnum;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'edge_pair'?: Array<DirectedEdge>;
    private 'cross_region_type'?: CrossRegionTypeEnum;
    private 'global_connection_bandwidth_id'?: string;
    private 'bandwidth_size'?: number;
    private 'is_frozen'?: boolean;
    private 'frozen_effect'?: FrozenEffectEnum;
    private 'is_bind_bandwidth'?: boolean;
    public constructor(id?: string, siteNetworkId?: string, state?: SiteConnectionStateEnum, createdAt?: Date, updatedAt?: Date, edgePair?: Array<DirectedEdge>, crossRegionType?: CrossRegionTypeEnum, isFrozen?: boolean) { 
        this['id'] = id;
        this['site_network_id'] = siteNetworkId;
        this['state'] = state;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['edge_pair'] = edgePair;
        this['cross_region_type'] = crossRegionType;
        this['is_frozen'] = isFrozen;
    }
    public withId(id: string): SiteConnection {
        this['id'] = id;
        return this;
    }
    public withSiteNetworkId(siteNetworkId: string): SiteConnection {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: string  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): string | undefined {
        return this['site_network_id'];
    }
    public withState(state: SiteConnectionStateEnum): SiteConnection {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): SiteConnection {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): SiteConnection {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEdgePair(edgePair: Array<DirectedEdge>): SiteConnection {
        this['edge_pair'] = edgePair;
        return this;
    }
    public set edgePair(edgePair: Array<DirectedEdge>  | undefined) {
        this['edge_pair'] = edgePair;
    }
    public get edgePair(): Array<DirectedEdge> | undefined {
        return this['edge_pair'];
    }
    public withCrossRegionType(crossRegionType: CrossRegionTypeEnum): SiteConnection {
        this['cross_region_type'] = crossRegionType;
        return this;
    }
    public set crossRegionType(crossRegionType: CrossRegionTypeEnum  | undefined) {
        this['cross_region_type'] = crossRegionType;
    }
    public get crossRegionType(): CrossRegionTypeEnum | undefined {
        return this['cross_region_type'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: string): SiteConnection {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: string  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): string | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withBandwidthSize(bandwidthSize: number): SiteConnection {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withIsFrozen(isFrozen: boolean): SiteConnection {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withFrozenEffect(frozenEffect: FrozenEffectEnum): SiteConnection {
        this['frozen_effect'] = frozenEffect;
        return this;
    }
    public set frozenEffect(frozenEffect: FrozenEffectEnum  | undefined) {
        this['frozen_effect'] = frozenEffect;
    }
    public get frozenEffect(): FrozenEffectEnum | undefined {
        return this['frozen_effect'];
    }
    public withIsBindBandwidth(isBindBandwidth: boolean): SiteConnection {
        this['is_bind_bandwidth'] = isBindBandwidth;
        return this;
    }
    public set isBindBandwidth(isBindBandwidth: boolean  | undefined) {
        this['is_bind_bandwidth'] = isBindBandwidth;
    }
    public get isBindBandwidth(): boolean | undefined {
        return this['is_bind_bandwidth'];
    }
}