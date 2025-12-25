

export class ListVifPeerDetectionsRequest {
    public marker?: string;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListVifPeerDetectionsRequestSortDirEnum> | Array<string>;
    public offset?: number;
    private 'page_reverse'?: boolean;
    private 'vif_peer_id'?: string;
    public constructor(vifPeerId?: string) { 
        this['vif_peer_id'] = vifPeerId;
    }
    public withMarker(marker: string): ListVifPeerDetectionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListVifPeerDetectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListVifPeerDetectionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListVifPeerDetectionsRequestSortDirEnum> | Array<string>): ListVifPeerDetectionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListVifPeerDetectionsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListVifPeerDetectionsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withOffset(offset: number): ListVifPeerDetectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListVifPeerDetectionsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withVifPeerId(vifPeerId: string): ListVifPeerDetectionsRequest {
        this['vif_peer_id'] = vifPeerId;
        return this;
    }
    public set vifPeerId(vifPeerId: string  | undefined) {
        this['vif_peer_id'] = vifPeerId;
    }
    public get vifPeerId(): string | undefined {
        return this['vif_peer_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVifPeerDetectionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
