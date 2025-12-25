import { RemoveNodesSpec } from './RemoveNodesSpec';


export class RemoveNodesTask {
    public apiVersion?: string;
    public kind?: string;
    public spec?: RemoveNodesSpec;
    public constructor(spec?: RemoveNodesSpec) { 
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): RemoveNodesTask {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): RemoveNodesTask {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: RemoveNodesSpec): RemoveNodesTask {
        this['spec'] = spec;
        return this;
    }
}