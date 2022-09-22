import { SourceServersResponseBody } from './SourceServersResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersResponse extends SdkResponse {
    public count?: number;
    private 'source_servers'?: Array<SourceServersResponseBody> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListServersResponse {
        this['count'] = count;
        return this;
    }
    public withSourceServers(sourceServers: Array<SourceServersResponseBody>): ListServersResponse {
        this['source_servers'] = sourceServers;
        return this;
    }
    public set sourceServers(sourceServers: Array<SourceServersResponseBody> | undefined) {
        this['source_servers'] = sourceServers;
    }
    public get sourceServers() {
        return this['source_servers'];
    }
}