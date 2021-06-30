import { CCEJobMetadata } from './CCEJobMetadata';
import { CCEJobSpec } from './CCEJobSpec';
import { CCEJobStatus } from './CCEJobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: CCEJobMetadata;
    public spec?: CCEJobSpec;
    public status?: CCEJobStatus;
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
    public withMetadata(metadata: CCEJobMetadata): ShowJobResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CCEJobSpec): ShowJobResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: CCEJobStatus): ShowJobResponse {
        this['status'] = status;
        return this;
    }
}