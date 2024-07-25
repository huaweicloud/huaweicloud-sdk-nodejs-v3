import { JobMetadata } from './JobMetadata';
import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeNodePoolResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: JobMetadata;
    public spec?: JobSpec;
    public status?: JobStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpgradeNodePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpgradeNodePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: JobMetadata): UpgradeNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: JobSpec): UpgradeNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: JobStatus): UpgradeNodePoolResponse {
        this['status'] = status;
        return this;
    }
}