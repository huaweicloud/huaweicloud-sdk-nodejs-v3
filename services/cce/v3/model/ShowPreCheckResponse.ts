import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';
import { PrecheckTaskMetadata } from './PrecheckTaskMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPreCheckResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PrecheckTaskMetadata;
    public spec?: PrecheckSpec;
    public status?: PrecheckStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPreCheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPreCheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PrecheckTaskMetadata): ShowPreCheckResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PrecheckSpec): ShowPreCheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PrecheckStatus): ShowPreCheckResponse {
        this['status'] = status;
        return this;
    }
}