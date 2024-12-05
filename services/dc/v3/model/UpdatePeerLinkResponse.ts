import { ExternalUpdatePeerLink } from './ExternalUpdatePeerLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePeerLinkResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'peer_link'?: ExternalUpdatePeerLink;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdatePeerLinkResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPeerLink(peerLink: ExternalUpdatePeerLink): UpdatePeerLinkResponse {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: ExternalUpdatePeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): ExternalUpdatePeerLink | undefined {
        return this['peer_link'];
    }
    public withXRequestId(xRequestId: string): UpdatePeerLinkResponse {
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