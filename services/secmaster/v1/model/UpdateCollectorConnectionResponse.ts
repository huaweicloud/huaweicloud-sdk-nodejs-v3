
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCollectorConnectionResponse extends SdkResponse {
    private 'connection_id'?: string;
    public constructor() { 
        super();
    }
    public withConnectionId(connectionId: string): UpdateCollectorConnectionResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}