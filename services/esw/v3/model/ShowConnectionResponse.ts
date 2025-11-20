import { Connection } from './Connection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectionResponse extends SdkResponse {
    private 'request_id'?: string;
    public connection?: Connection;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowConnectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withConnection(connection: Connection): ShowConnectionResponse {
        this['connection'] = connection;
        return this;
    }
}