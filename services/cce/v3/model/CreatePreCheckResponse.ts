import { PrecheckCluserResponseMetadata } from './PrecheckCluserResponseMetadata';
import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePreCheckResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PrecheckCluserResponseMetadata;
    public spec?: PrecheckSpec;
    public status?: PrecheckStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreatePreCheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreatePreCheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PrecheckCluserResponseMetadata): CreatePreCheckResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PrecheckSpec): CreatePreCheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PrecheckStatus): CreatePreCheckResponse {
        this['status'] = status;
        return this;
    }
}