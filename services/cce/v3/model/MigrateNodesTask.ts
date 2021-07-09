import { MigrateNodesSpec } from './MigrateNodesSpec';
import { TaskStatus } from './TaskStatus';


export class MigrateNodesTask {
    public apiVersion?: string;
    public kind?: string;
    public spec: MigrateNodesSpec;
    public status?: TaskStatus;
    public constructor(spec?: any) { 
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
    public withStatus(status: TaskStatus): MigrateNodesTask {
        this['status'] = status;
        return this;
    }
}