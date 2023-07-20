import { SourceServersResponseBody } from './SourceServersResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersResponse extends SdkResponse {
    public count?: number;
    private 'source_servers'?: Array<SourceServersResponseBody>;
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
    public set sourceServers(sourceServers: Array<SourceServersResponseBody>  | undefined) {
        this['source_servers'] = sourceServers;
    }
    public get sourceServers(): Array<SourceServersResponseBody> | undefined {
        return this['source_servers'];
    }
}