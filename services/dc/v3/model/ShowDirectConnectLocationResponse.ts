import { DirectConnectLocationEntry } from './DirectConnectLocationEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDirectConnectLocationResponse extends SdkResponse {
    private 'direct_connect_location'?: DirectConnectLocationEntry;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withDirectConnectLocation(directConnectLocation: DirectConnectLocationEntry): ShowDirectConnectLocationResponse {
        this['direct_connect_location'] = directConnectLocation;
        return this;
    }
    public set directConnectLocation(directConnectLocation: DirectConnectLocationEntry  | undefined) {
        this['direct_connect_location'] = directConnectLocation;
    }
    public get directConnectLocation(): DirectConnectLocationEntry | undefined {
        return this['direct_connect_location'];
    }
    public withRequestId(requestId: string): ShowDirectConnectLocationResponse {
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