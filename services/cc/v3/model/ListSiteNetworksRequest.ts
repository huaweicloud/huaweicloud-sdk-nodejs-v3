import { SiteNetworkStateEnum } from './SiteNetworkStateEnum';
import { SortDir } from './SortDir';


export class ListSiteNetworksRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public name?: Array<string>;
    public state?: Array<SiteNetworkStateEnum>;
    private 'enterprise_project_id'?: Array<string>;
    private 'global_dc_gateway_id'?: Array<string>;
    private 'global_connection_bandwidth_id'?: Array<string>;
    private 'connection_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListSiteNetworksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSiteNetworksRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListSiteNetworksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListSiteNetworksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListSiteNetworksRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListSiteNetworksRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: Array<SiteNetworkStateEnum>): ListSiteNetworksRequest {
        this['state'] = state;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListSiteNetworksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: Array<string>): ListSiteNetworksRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: Array<string>  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): Array<string> | undefined {
        return this['global_dc_gateway_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: Array<string>): ListSiteNetworksRequest {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: Array<string>  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): Array<string> | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withConnectionId(connectionId: Array<string>): ListSiteNetworksRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: Array<string>  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): Array<string> | undefined {
        return this['connection_id'];
    }
}