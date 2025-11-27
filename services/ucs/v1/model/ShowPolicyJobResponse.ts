import { ObjectMeta } from './ObjectMeta';
import { UCSJobSpec } from './UCSJobSpec';
import { UCSJobStatus } from './UCSJobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyJobResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: UCSJobSpec;
    public status?: UCSJobStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowPolicyJobResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowPolicyJobResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowPolicyJobResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UCSJobSpec): ShowPolicyJobResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UCSJobStatus): ShowPolicyJobResponse {
        this['status'] = status;
        return this;
    }
}