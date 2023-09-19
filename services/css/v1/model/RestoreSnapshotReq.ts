

export class RestoreSnapshotReq {
    public targetCluster?: string;
    public indices?: string;
    public renamePattern?: string;
    public renameReplacement?: string;
    public constructor(targetCluster?: string) { 
        this['targetCluster'] = targetCluster;
    }
    public withTargetCluster(targetCluster: string): RestoreSnapshotReq {
        this['targetCluster'] = targetCluster;
        return this;
    }
    public withIndices(indices: string): RestoreSnapshotReq {
        this['indices'] = indices;
        return this;
    }
    public withRenamePattern(renamePattern: string): RestoreSnapshotReq {
        this['renamePattern'] = renamePattern;
        return this;
    }
    public withRenameReplacement(renameReplacement: string): RestoreSnapshotReq {
        this['renameReplacement'] = renameReplacement;
        return this;
    }
}