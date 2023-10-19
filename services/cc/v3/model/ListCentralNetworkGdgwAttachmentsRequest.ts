import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { SortDir } from './SortDir';


export class ListCentralNetworkGdgwAttachmentsRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public name?: Array<string>;
    public state?: Array<CentralNetworkConnectionStateEnum>;
    private 'central_network_id'?: string;
    private 'global_dc_gateway_id'?: Array<string>;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withLimit(limit: number): ListCentralNetworkGdgwAttachmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkGdgwAttachmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListCentralNetworkGdgwAttachmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListCentralNetworkGdgwAttachmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListCentralNetworkGdgwAttachmentsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCentralNetworkGdgwAttachmentsRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: Array<CentralNetworkConnectionStateEnum>): ListCentralNetworkGdgwAttachmentsRequest {
        this['state'] = state;
        return this;
    }
    public withCentralNetworkId(centralNetworkId: string): ListCentralNetworkGdgwAttachmentsRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: Array<string>): ListCentralNetworkGdgwAttachmentsRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: Array<string>  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): Array<string> | undefined {
        return this['global_dc_gateway_id'];
    }
}