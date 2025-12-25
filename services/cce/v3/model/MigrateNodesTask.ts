import { MigrateNodesSpec } from './MigrateNodesSpec';


export class MigrateNodesTask {
    public apiVersion?: string;
    public kind?: string;
    public spec?: MigrateNodesSpec;
    public constructor(spec?: MigrateNodesSpec) { 
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): MigrateNodesTask {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): MigrateNodesTask {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: MigrateNodesSpec): MigrateNodesTask {
        this['spec'] = spec;
        return this;
    }
}