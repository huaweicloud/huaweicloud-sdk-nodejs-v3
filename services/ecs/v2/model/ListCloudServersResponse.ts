import { CloudServer } from './CloudServer';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudServersResponse extends SdkResponse {
    public count?: number;
    public servers?: Array<CloudServer>;
    private 'servers_links'?: Array<PageLink>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCloudServersResponse {
        this['count'] = count;
        return this;
    }
    public withServers(servers: Array<CloudServer>): ListCloudServersResponse {
        this['servers'] = servers;
        return this;
    }
    public withServersLinks(serversLinks: Array<PageLink>): ListCloudServersResponse {
        this['servers_links'] = serversLinks;
        return this;
    }
    public set serversLinks(serversLinks: Array<PageLink>  | undefined) {
        this['servers_links'] = serversLinks;
    }
    public get serversLinks(): Array<PageLink> | undefined {
        return this['servers_links'];
    }
    public withRequestId(requestId: string): ListCloudServersResponse {
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