import { JobMetadata } from './JobMetadata';
import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: JobMetadata;
    public spec?: JobSpec;
    public status?: JobStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowJobResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowJobResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: JobMetadata): ShowJobResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: JobSpec): ShowJobResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: JobStatus): ShowJobResponse {
        this['status'] = status;
        return this;
    }
}