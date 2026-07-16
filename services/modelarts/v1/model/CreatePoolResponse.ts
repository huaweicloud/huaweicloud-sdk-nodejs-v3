import { PoolMetadata } from './PoolMetadata';
import { PoolSpecModel } from './PoolSpecModel';
import { PoolStatus } from './PoolStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePoolResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PoolMetadata;
    public spec?: PoolSpecModel;
    public status?: PoolStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreatePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreatePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PoolMetadata): CreatePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecModel): CreatePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PoolStatus): CreatePoolResponse {
        this['status'] = status;
        return this;
    }
}