import { Server } from './Server';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudPhoneServersResponse extends SdkResponse {
    private 'request_id'?: string;
    public count?: number;
    public servers?: Array<Server>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListCloudPhoneServersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCount(count: number): ListCloudPhoneServersResponse {
        this['count'] = count;
        return this;
    }
    public withServers(servers: Array<Server>): ListCloudPhoneServersResponse {
        this['servers'] = servers;
        return this;
    }
}