import { AddonInstanceStatus } from './AddonInstanceStatus';
import { AddonMetadata } from './AddonMetadata';
import { InstanceSpec } from './InstanceSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotAddonInstanceResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AddonMetadata;
    public spec?: InstanceSpec;
    public status?: AddonInstanceStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateAutopilotAddonInstanceResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateAutopilotAddonInstanceResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AddonMetadata): CreateAutopilotAddonInstanceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: InstanceSpec): CreateAutopilotAddonInstanceResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): CreateAutopilotAddonInstanceResponse {
        this['status'] = status;
        return this;
    }
}