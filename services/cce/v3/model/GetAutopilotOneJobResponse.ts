import { V2JobSpec } from './V2JobSpec';
import { V2JobStatus } from './V2JobStatus';
import { V2JobTypeObject } from './V2JobTypeObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAutopilotOneJobResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: V2JobTypeObject;
    public spec?: V2JobSpec;
    public status?: V2JobStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): GetAutopilotOneJobResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): GetAutopilotOneJobResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: V2JobTypeObject): GetAutopilotOneJobResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V2JobSpec): GetAutopilotOneJobResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: V2JobStatus): GetAutopilotOneJobResponse {
        this['status'] = status;
        return this;
    }
}