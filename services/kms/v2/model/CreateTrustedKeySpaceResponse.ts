
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrustedKeySpaceResponse extends SdkResponse {
    private 'keyspace_id'?: string;
    public constructor() { 
        super();
    }
    public withKeyspaceId(keyspaceId: string): CreateTrustedKeySpaceResponse {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
}