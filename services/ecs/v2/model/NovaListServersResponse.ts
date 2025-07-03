import { NovaSimpleServer } from './NovaSimpleServer';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaListServersResponse extends SdkResponse {
    public servers?: Array<NovaSimpleServer>;
    private 'servers_links'?: Array<PageLink>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<NovaSimpleServer>): NovaListServersResponse {
        this['servers'] = servers;
        return this;
    }
    public withServersLinks(serversLinks: Array<PageLink>): NovaListServersResponse {
        this['servers_links'] = serversLinks;
        return this;
    }
    public set serversLinks(serversLinks: Array<PageLink>  | undefined) {
        this['servers_links'] = serversLinks;
    }
    public get serversLinks(): Array<PageLink> | undefined {
        return this['servers_links'];
    }
}