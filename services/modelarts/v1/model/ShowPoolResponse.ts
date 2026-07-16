import { PoolMetadata } from './PoolMetadata';
import { PoolSpecModel } from './PoolSpecModel';
import { PoolStatus } from './PoolStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PoolMetadata;
    public spec?: PoolSpecModel;
    public status?: PoolStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PoolMetadata): ShowPoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecModel): ShowPoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PoolStatus): ShowPoolResponse {
        this['status'] = status;
        return this;
    }
}