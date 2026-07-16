import { PluginMetadata } from './PluginMetadata';
import { PluginSpec } from './PluginSpec';
import { PluginStatus } from './PluginStatus';


export class Plugin {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PluginMetadata;
    public spec?: PluginSpec;
    public status?: PluginStatus;
    public constructor(kind?: string, metadata?: PluginMetadata, spec?: PluginSpec) { 
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): Plugin {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): Plugin {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PluginMetadata): Plugin {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PluginSpec): Plugin {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PluginStatus): Plugin {
        this['status'] = status;
        return this;
    }
}