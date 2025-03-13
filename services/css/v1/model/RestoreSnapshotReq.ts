

export class RestoreSnapshotReq {
    public targetCluster?: string;
    public indices?: string;
    public renamePattern?: string;
    public renameReplacement?: string;
    private 'replace_exist_indices'?: boolean;
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
    public withReplaceExistIndices(replaceExistIndices: boolean): RestoreSnapshotReq {
        this['replace_exist_indices'] = replaceExistIndices;
        return this;
    }
    public set replaceExistIndices(replaceExistIndices: boolean  | undefined) {
        this['replace_exist_indices'] = replaceExistIndices;
    }
    public get replaceExistIndices(): boolean | undefined {
        return this['replace_exist_indices'];
    }
}