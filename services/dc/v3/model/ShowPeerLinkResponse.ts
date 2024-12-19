import { PeerLinkEntry } from './PeerLinkEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPeerLinkResponse extends SdkResponse {
    private 'peer_link'?: PeerLinkEntry;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPeerLink(peerLink: PeerLinkEntry): ShowPeerLinkResponse {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: PeerLinkEntry  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): PeerLinkEntry | undefined {
        return this['peer_link'];
    }
    public withRequestId(requestId: string): ShowPeerLinkResponse {
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