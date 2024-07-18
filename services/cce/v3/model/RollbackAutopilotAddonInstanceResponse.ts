import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RollbackAutopilotAddonInstanceResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AddonMetadata;
    public spec?: InstanceSpec;
    public status?: AddonInstanceStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): RollbackAutopilotAddonInstanceResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): RollbackAutopilotAddonInstanceResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AddonMetadata): RollbackAutopilotAddonInstanceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: InstanceSpec): RollbackAutopilotAddonInstanceResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): RollbackAutopilotAddonInstanceResponse {
        this['status'] = status;
        return this;
    }
}