import { ActionOnComponentBuild } from './ActionOnComponentBuild';
import { ActionOnComponentSource } from './ActionOnComponentSource';
import { ResourceLimitForUpgrade } from './ResourceLimitForUpgrade';


export class ActionOnComponentSpec {
    private 'snapshot_index'?: number;
    public replica?: number;
    public source?: ActionOnComponentSource;
    private 'resource_limit'?: ResourceLimitForUpgrade;
    public build?: ActionOnComponentBuild;
    public constructor() { 
    }
    public withSnapshotIndex(snapshotIndex: number): ActionOnComponentSpec {
        this['snapshot_index'] = snapshotIndex;
        return this;
    }
    public set snapshotIndex(snapshotIndex: number  | undefined) {
        this['snapshot_index'] = snapshotIndex;
    }
    public get snapshotIndex(): number | undefined {
        return this['snapshot_index'];
    }
    public withReplica(replica: number): ActionOnComponentSpec {
        this['replica'] = replica;
        return this;
    }
    public withSource(source: ActionOnComponentSource): ActionOnComponentSpec {
        this['source'] = source;
        return this;
    }
    public withResourceLimit(resourceLimit: ResourceLimitForUpgrade): ActionOnComponentSpec {
        this['resource_limit'] = resourceLimit;
        return this;
    }
    public set resourceLimit(resourceLimit: ResourceLimitForUpgrade  | undefined) {
        this['resource_limit'] = resourceLimit;
    }
    public get resourceLimit(): ResourceLimitForUpgrade | undefined {
        return this['resource_limit'];
    }
    public withBuild(build: ActionOnComponentBuild): ActionOnComponentSpec {
        this['build'] = build;
        return this;
    }
}