import { JobMetadata } from './JobMetadata';
import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotJobResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: JobMetadata;
    public spec?: JobSpec;
    public status?: JobStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowAutopilotJobResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowAutopilotJobResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: JobMetadata): ShowAutopilotJobResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: JobSpec): ShowAutopilotJobResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: JobStatus): ShowAutopilotJobResponse {
        this['status'] = status;
        return this;
    }
}