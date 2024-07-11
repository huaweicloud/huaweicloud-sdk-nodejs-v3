import { ExtensionScaleGroupMetadata } from './ExtensionScaleGroupMetadata';
import { ExtensionScaleGroupSpec } from './ExtensionScaleGroupSpec';


export class ExtensionScaleGroup {
    public metadata?: ExtensionScaleGroupMetadata;
    public spec?: ExtensionScaleGroupSpec;
    public constructor() { 
    }
    public withMetadata(metadata: ExtensionScaleGroupMetadata): ExtensionScaleGroup {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ExtensionScaleGroupSpec): ExtensionScaleGroup {
        this['spec'] = spec;
        return this;
    }
}