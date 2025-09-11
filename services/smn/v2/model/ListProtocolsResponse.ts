
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtocolsResponse extends SdkResponse {
    private 'request_id'?: string;
    public protocols?: Array<string>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListProtocolsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withProtocols(protocols: Array<string>): ListProtocolsResponse {
        this['protocols'] = protocols;
        return this;
    }
}