import { InPlaceMigratetoNodesSpec } from './InPlaceMigratetoNodesSpec';
import { TaskStatus } from './TaskStatus';


export class InPlaceMigrate {
    public apiVersion?: string;
    public kind?: string;
    public spec?: InPlaceMigratetoNodesSpec;
    public status?: TaskStatus;
    public constructor(spec?: InPlaceMigratetoNodesSpec) { 
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): InPlaceMigrate {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): InPlaceMigrate {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: InPlaceMigratetoNodesSpec): InPlaceMigrate {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: TaskStatus): InPlaceMigrate {
        this['status'] = status;
        return this;
    }
}