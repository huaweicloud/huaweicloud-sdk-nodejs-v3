import { ExternalListPeerLinks } from './ExternalListPeerLinks';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPeerLinksResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'peer_links'?: Array<ExternalListPeerLinks>;
    private 'page_info'?: PageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
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
    public withPeerLinks(peerLinks: Array<ExternalListPeerLinks>): ListPeerLinksResponse {
        this['peer_links'] = peerLinks;
        return this;
    }
    public set peerLinks(peerLinks: Array<ExternalListPeerLinks>  | undefined) {
        this['peer_links'] = peerLinks;
    }
    public get peerLinks(): Array<ExternalListPeerLinks> | undefined {
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
    public withXRequestId(xRequestId: string): ListPeerLinksResponse {
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