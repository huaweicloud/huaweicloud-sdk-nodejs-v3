

export class RestoreSnapshotReq {
    private 'target_cluster'?: string;
    public indices?: string;
    private 'rename_pattern'?: string;
    private 'rename_replacement'?: string;
    private 'replace_exist_indices'?: boolean;
    public constructor(targetCluster?: string) { 
        this['target_cluster'] = targetCluster;
    }
    public withTargetCluster(targetCluster: string): RestoreSnapshotReq {
        this['target_cluster'] = targetCluster;
        return this;
    }
    public set targetCluster(targetCluster: string  | undefined) {
        this['target_cluster'] = targetCluster;
    }
    public get targetCluster(): string | undefined {
        return this['target_cluster'];
    }
    public withIndices(indices: string): RestoreSnapshotReq {
        this['indices'] = indices;
        return this;
    }
    public withRenamePattern(renamePattern: string): RestoreSnapshotReq {
        this['rename_pattern'] = renamePattern;
        return this;
    }
    public set renamePattern(renamePattern: string  | undefined) {
        this['rename_pattern'] = renamePattern;
    }
    public get renamePattern(): string | undefined {
        return this['rename_pattern'];
    }
    public withRenameReplacement(renameReplacement: string): RestoreSnapshotReq {
        this['rename_replacement'] = renameReplacement;
        return this;
    }
    public set renameReplacement(renameReplacement: string  | undefined) {
        this['rename_replacement'] = renameReplacement;
    }
    public get renameReplacement(): string | undefined {
        return this['rename_replacement'];
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