import { RemoveNodesSpec } from './RemoveNodesSpec';
import { TaskStatus } from './TaskStatus';


export class RemoveNodesTask {
    public apiVersion?: string;
    public kind?: string;
    public spec: RemoveNodesSpec;
    public status?: TaskStatus;
    public constructor(spec?: any) { 
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
    public withStatus(status: TaskStatus): RemoveNodesTask {
        this['status'] = status;
        return this;
    }
}