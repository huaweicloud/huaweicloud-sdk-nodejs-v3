import { ObjectMeta } from './ObjectMeta';
import { RuleSpec } from './RuleSpec';


export class Rule {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: RuleSpec;
    public constructor() { 
    }
    public withKind(kind: string): Rule {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Rule {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): Rule {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: RuleSpec): Rule {
        this['spec'] = spec;
        return this;
    }
}