import { EncodeServer } from './EncodeServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEncodeServersResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'encode_servers'?: Array<EncodeServer>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListEncodeServersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withEncodeServers(encodeServers: Array<EncodeServer>): ListEncodeServersResponse {
        this['encode_servers'] = encodeServers;
        return this;
    }
    public set encodeServers(encodeServers: Array<EncodeServer>  | undefined) {
        this['encode_servers'] = encodeServers;
    }
    public get encodeServers(): Array<EncodeServer> | undefined {
        return this['encode_servers'];
    }
}