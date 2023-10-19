import { AttachmentInstanceTypeEnum } from './AttachmentInstanceTypeEnum';
import { CentralNetworkConnectionStateEnum } from './CentralNetworkConnectionStateEnum';
import { SortDir } from './SortDir';


export class ListCentralNetworkAttachmentsRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'attachment_instance_type'?: Array<AttachmentInstanceTypeEnum>;
    public state?: Array<CentralNetworkConnectionStateEnum>;
    private 'central_network_id'?: string;
    private 'attachment_instance_id'?: Array<string>;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withLimit(limit: number): ListCentralNetworkAttachmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkAttachmentsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListCentralNetworkAttachmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListCentralNetworkAttachmentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListCentralNetworkAttachmentsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCentralNetworkAttachmentsRequest {
        this['name'] = name;
        return this;
    }
    public withAttachmentInstanceType(attachmentInstanceType: Array<AttachmentInstanceTypeEnum>): ListCentralNetworkAttachmentsRequest {
        this['attachment_instance_type'] = attachmentInstanceType;
        return this;
    }
    public set attachmentInstanceType(attachmentInstanceType: Array<AttachmentInstanceTypeEnum>  | undefined) {
        this['attachment_instance_type'] = attachmentInstanceType;
    }
    public get attachmentInstanceType(): Array<AttachmentInstanceTypeEnum> | undefined {
        return this['attachment_instance_type'];
    }
    public withState(state: Array<CentralNetworkConnectionStateEnum>): ListCentralNetworkAttachmentsRequest {
        this['state'] = state;
        return this;
    }
    public withCentralNetworkId(centralNetworkId: string): ListCentralNetworkAttachmentsRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withAttachmentInstanceId(attachmentInstanceId: Array<string>): ListCentralNetworkAttachmentsRequest {
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