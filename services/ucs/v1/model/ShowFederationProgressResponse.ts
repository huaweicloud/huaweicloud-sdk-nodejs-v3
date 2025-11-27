import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';
import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFederationProgressResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: JobSpec;
    public status?: JobStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowFederationProgressResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowFederationProgressResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowFederationProgressResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: JobSpec): ShowFederationProgressResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: JobStatus): ShowFederationProgressResponse {
        this['status'] = status;
        return this;
    }
}