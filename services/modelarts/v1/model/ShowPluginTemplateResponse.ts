import { PluginTemplateMetadata } from './PluginTemplateMetadata';
import { PluginTemplateSpec } from './PluginTemplateSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginTemplateResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PluginTemplateMetadata;
    public spec?: PluginTemplateSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPluginTemplateResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPluginTemplateResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PluginTemplateMetadata): ShowPluginTemplateResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PluginTemplateSpec): ShowPluginTemplateResponse {
        this['spec'] = spec;
        return this;
    }
}