import { AddonObjectMeta } from './AddonObjectMeta';
import { AddonTemplateSpec } from './AddonTemplateSpec';


export class AddonTemplate {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AddonObjectMeta;
    public spec?: AddonTemplateSpec;
    public constructor() { 
    }
    public withKind(kind: string): AddonTemplate {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AddonTemplate {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AddonObjectMeta): AddonTemplate {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AddonTemplateSpec): AddonTemplate {
        this['spec'] = spec;
        return this;
    }
}