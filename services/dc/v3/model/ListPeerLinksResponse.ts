import { PageInfo } from './PageInfo';
import { PeerLinkEntry } from './PeerLinkEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPeerLinksResponse extends SdkResponse {
    private 'peer_links'?: Array<PeerLinkEntry>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPeerLinks(peerLinks: Array<PeerLinkEntry>): ListPeerLinksResponse {
        this['peer_links'] = peerLinks;
        return this;
    }
    public set peerLinks(peerLinks: Array<PeerLinkEntry>  | undefined) {
        this['peer_links'] = peerLinks;
    }
    public get peerLinks(): Array<PeerLinkEntry> | undefined {
        return this['peer_links'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPeerLinksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListPeerLinksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}