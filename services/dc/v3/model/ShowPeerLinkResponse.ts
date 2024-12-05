import { ExternalShowPeerLink } from './ExternalShowPeerLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPeerLinkResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'peer_link'?: ExternalShowPeerLink;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
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
    public withPeerLink(peerLink: ExternalShowPeerLink): ShowPeerLinkResponse {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: ExternalShowPeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): ExternalShowPeerLink | undefined {
        return this['peer_link'];
    }
    public withXRequestId(xRequestId: string): ShowPeerLinkResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}