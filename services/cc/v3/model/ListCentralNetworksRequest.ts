import { CentralNetworkStateEnum } from './CentralNetworkStateEnum';
import { SortDir } from './SortDir';


export class ListCentralNetworksRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public name?: Array<string>;
    public state?: Array<CentralNetworkStateEnum>;
    private 'enterprise_project_id'?: Array<string>;
    private 'enterprise_router_id'?: Array<string>;
    private 'attachment_instance_id'?: Array<string>;
    private 'global_connection_bandwidth_id'?: Array<string>;
    private 'connection_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListCentralNetworksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworksRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListCentralNetworksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListCentralNetworksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListCentralNetworksRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCentralNetworksRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: Array<CentralNetworkStateEnum>): ListCentralNetworksRequest {
        this['state'] = state;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListCentralNetworksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseRouterId(enterpriseRouterId: Array<string>): ListCentralNetworksRequest {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: Array<string>  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): Array<string> | undefined {
        return this['enterprise_router_id'];
    }
    public withAttachmentInstanceId(attachmentInstanceId: Array<string>): ListCentralNetworksRequest {
        this['attachment_instance_id'] = attachmentInstanceId;
        return this;
    }
    public set attachmentInstanceId(attachmentInstanceId: Array<string>  | undefined) {
        this['attachment_instance_id'] = attachmentInstanceId;
    }
    public get attachmentInstanceId(): Array<string> | undefined {
        return this['attachment_instance_id'];
    }
    public withGlobalConnectionBandwidthId(globalConnectionBandwidthId: Array<string>): ListCentralNetworksRequest {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
        return this;
    }
    public set globalConnectionBandwidthId(globalConnectionBandwidthId: Array<string>  | undefined) {
        this['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
    }
    public get globalConnectionBandwidthId(): Array<string> | undefined {
        return this['global_connection_bandwidth_id'];
    }
    public withConnectionId(connectionId: Array<string>): ListCentralNetworksRequest {
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