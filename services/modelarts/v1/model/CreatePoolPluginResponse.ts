import { PluginMetadata } from './PluginMetadata';
import { PluginSpec } from './PluginSpec';
import { PluginStatus } from './PluginStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePoolPluginResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PluginMetadata;
    public spec?: PluginSpec;
    public status?: PluginStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreatePoolPluginResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreatePoolPluginResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PluginMetadata): CreatePoolPluginResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PluginSpec): CreatePoolPluginResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PluginStatus): CreatePoolPluginResponse {
        this['status'] = status;
        return this;
    }
}