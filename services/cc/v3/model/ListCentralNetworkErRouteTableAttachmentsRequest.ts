import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { SortDir } from './SortDir';


export class ListCentralNetworkErRouteTableAttachmentsRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public name?: Array<string>;
    public state?: Array<CentralNetworkConnectionStateEnum>;
    private 'central_network_id'?: string;
    private 'attachment_instance_id'?: Array<string>;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withLimit(limit: number): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: Array<CentralNetworkConnectionStateEnum>): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['state'] = state;
        return this;
    }
    public withCentralNetworkId(centralNetworkId: string): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withAttachmentInstanceId(attachmentInstanceId: Array<string>): ListCentralNetworkErRouteTableAttachmentsRequest {
        this['attachment_instance_id'] = attachmentInstanceId;
        return this;
    }
    public set attachmentInstanceId(attachmentInstanceId: Array<string>  | undefined) {
        this['attachment_instance_id'] = attachmentInstanceId;
    }
    public get attachmentInstanceId(): Array<string> | undefined {
        return this['attachment_instance_id'];
    }
}