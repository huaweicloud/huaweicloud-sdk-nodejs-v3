

export class PatchDetail {
    private 'installed_time'?: number;
    private 'patch_baseline_id'?: string;
    private 'patch_baseline_name'?: string;
    private 'patch_status'?: string;
    public constructor() { 
    }
    public withInstalledTime(installedTime: number): PatchDetail {
        this['installed_time'] = installedTime;
        return this;
    }
    public set installedTime(installedTime: number  | undefined) {
        this['installed_time'] = installedTime;
    }
    public get installedTime(): number | undefined {
        return this['installed_time'];
    }
    public withPatchBaselineId(patchBaselineId: string): PatchDetail {
        this['patch_baseline_id'] = patchBaselineId;
        return this;
    }
    public set patchBaselineId(patchBaselineId: string  | undefined) {
        this['patch_baseline_id'] = patchBaselineId;
    }
    public get patchBaselineId(): string | undefined {
        return this['patch_baseline_id'];
    }
    public withPatchBaselineName(patchBaselineName: string): PatchDetail {
        this['patch_baseline_name'] = patchBaselineName;
        return this;
    }
    public set patchBaselineName(patchBaselineName: string  | undefined) {
        this['patch_baseline_name'] = patchBaselineName;
    }
    public get patchBaselineName(): string | undefined {
        return this['patch_baseline_name'];
    }
    public withPatchStatus(patchStatus: string): PatchDetail {
        this['patch_status'] = patchStatus;
        return this;
    }
    public set patchStatus(patchStatus: string  | undefined) {
        this['patch_status'] = patchStatus;
    }
    public get patchStatus(): string | undefined {
        return this['patch_status'];
    }
}