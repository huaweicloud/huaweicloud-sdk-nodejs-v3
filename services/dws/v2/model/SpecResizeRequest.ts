

export class SpecResizeRequest {
    private 'target_flavor_id'?: string;
    private 'force_backup'?: boolean;
    public constructor(targetFlavorId?: string) { 
        this['target_flavor_id'] = targetFlavorId;
    }
    public withTargetFlavorId(targetFlavorId: string): SpecResizeRequest {
        this['target_flavor_id'] = targetFlavorId;
        return this;
    }
    public set targetFlavorId(targetFlavorId: string  | undefined) {
        this['target_flavor_id'] = targetFlavorId;
    }
    public get targetFlavorId(): string | undefined {
        return this['target_flavor_id'];
    }
    public withForceBackup(forceBackup: boolean): SpecResizeRequest {
        this['force_backup'] = forceBackup;
        return this;
    }
    public set forceBackup(forceBackup: boolean  | undefined) {
        this['force_backup'] = forceBackup;
    }
    public get forceBackup(): boolean | undefined {
        return this['force_backup'];
    }
}