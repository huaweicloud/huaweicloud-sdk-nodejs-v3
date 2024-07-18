import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';
import { PrecheckTaskMetadata } from './PrecheckTaskMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotPreCheckResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PrecheckTaskMetadata;
    public spec?: PrecheckSpec;
    public status?: PrecheckStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowAutopilotPreCheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowAutopilotPreCheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PrecheckTaskMetadata): ShowAutopilotPreCheckResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PrecheckSpec): ShowAutopilotPreCheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PrecheckStatus): ShowAutopilotPreCheckResponse {
        this['status'] = status;
        return this;
    }
}