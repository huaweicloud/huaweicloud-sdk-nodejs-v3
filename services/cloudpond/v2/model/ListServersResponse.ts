import { PageInfo } from './PageInfo';
import { Server } from './Server';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersResponse extends SdkResponse {
    public servers?: Array<Server>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<Server>): ListServersResponse {
        this['servers'] = servers;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListServersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}