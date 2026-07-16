import { PoolMetadataDeletion } from './PoolMetadataDeletion';
import { PoolSpecModel } from './PoolSpecModel';
import { PoolStatus } from './PoolStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePoolResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PoolMetadataDeletion;
    public spec?: PoolSpecModel;
    public status?: PoolStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): DeletePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): DeletePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PoolMetadataDeletion): DeletePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecModel): DeletePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PoolStatus): DeletePoolResponse {
        this['status'] = status;
        return this;
    }
}