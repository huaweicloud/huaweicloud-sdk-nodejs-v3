import { CloudConnection } from './CloudConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCloudConnectionResponse extends SdkResponse {
    private 'cloud_connection'?: CloudConnection;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCloudConnection(cloudConnection: CloudConnection): UpdateCloudConnectionResponse {
        this['cloud_connection'] = cloudConnection;
        return this;
    }
    public set cloudConnection(cloudConnection: CloudConnection  | undefined) {
        this['cloud_connection'] = cloudConnection;
    }
    public get cloudConnection(): CloudConnection | undefined {
        return this['cloud_connection'];
    }
    public withRequestId(requestId: string): UpdateCloudConnectionResponse {
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