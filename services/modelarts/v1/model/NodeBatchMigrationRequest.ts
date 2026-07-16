import { MigrateResourceSpec } from './MigrateResourceSpec';


export class NodeBatchMigrationRequest {
    public migrateNodeNames?: Array<string>;
    public fromClusterName?: string;
    public toClusterName?: string;
    public toPoolName?: string;
    public resourceSpec?: MigrateResourceSpec;
    public constructor(migrateNodeNames?: Array<string>, fromClusterName?: string, toClusterName?: string) { 
        this['migrateNodeNames'] = migrateNodeNames;
        this['fromClusterName'] = fromClusterName;
        this['toClusterName'] = toClusterName;
    }
    public withMigrateNodeNames(migrateNodeNames: Array<string>): NodeBatchMigrationRequest {
        this['migrateNodeNames'] = migrateNodeNames;
        return this;
    }
    public withFromClusterName(fromClusterName: string): NodeBatchMigrationRequest {
        this['fromClusterName'] = fromClusterName;
        return this;
    }
    public withToClusterName(toClusterName: string): NodeBatchMigrationRequest {
        this['toClusterName'] = toClusterName;
        return this;
    }
    public withToPoolName(toPoolName: string): NodeBatchMigrationRequest {
        this['toPoolName'] = toPoolName;
        return this;
    }
    public withResourceSpec(resourceSpec: MigrateResourceSpec): NodeBatchMigrationRequest {
        this['resourceSpec'] = resourceSpec;
        return this;
    }
}