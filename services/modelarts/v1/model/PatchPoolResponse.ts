import { PoolMetadata } from './PoolMetadata';
import { PoolSpecModel } from './PoolSpecModel';
import { PoolStatus } from './PoolStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PatchPoolResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PoolMetadata;
    public spec?: PoolSpecModel;
    public status?: PoolStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): PatchPoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PatchPoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PoolMetadata): PatchPoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecModel): PatchPoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PoolStatus): PatchPoolResponse {
        this['status'] = status;
        return this;
    }
}