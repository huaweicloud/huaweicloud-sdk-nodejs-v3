

export class DriftDetail {
    private 'managed_account_id'?: string;
    private 'drift_type'?: string;
    private 'drift_target_id'?: string;
    private 'drift_target_type'?: string;
    private 'drift_message'?: string;
    private 'parent_organizational_unit_id'?: string;
    private 'solve_solution'?: string;
    public constructor() { 
    }
    public withManagedAccountId(managedAccountId: string): DriftDetail {
        this['managed_account_id'] = managedAccountId;
        return this;
    }
    public set managedAccountId(managedAccountId: string  | undefined) {
        this['managed_account_id'] = managedAccountId;
    }
    public get managedAccountId(): string | undefined {
        return this['managed_account_id'];
    }
    public withDriftType(driftType: string): DriftDetail {
        this['drift_type'] = driftType;
        return this;
    }
    public set driftType(driftType: string  | undefined) {
        this['drift_type'] = driftType;
    }
    public get driftType(): string | undefined {
        return this['drift_type'];
    }
    public withDriftTargetId(driftTargetId: string): DriftDetail {
        this['drift_target_id'] = driftTargetId;
        return this;
    }
    public set driftTargetId(driftTargetId: string  | undefined) {
        this['drift_target_id'] = driftTargetId;
    }
    public get driftTargetId(): string | undefined {
        return this['drift_target_id'];
    }
    public withDriftTargetType(driftTargetType: string): DriftDetail {
        this['drift_target_type'] = driftTargetType;
        return this;
    }
    public set driftTargetType(driftTargetType: string  | undefined) {
        this['drift_target_type'] = driftTargetType;
    }
    public get driftTargetType(): string | undefined {
        return this['drift_target_type'];
    }
    public withDriftMessage(driftMessage: string): DriftDetail {
        this['drift_message'] = driftMessage;
        return this;
    }
    public set driftMessage(driftMessage: string  | undefined) {
        this['drift_message'] = driftMessage;
    }
    public get driftMessage(): string | undefined {
        return this['drift_message'];
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): DriftDetail {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withSolveSolution(solveSolution: string): DriftDetail {
        this['solve_solution'] = solveSolution;
        return this;
    }
    public set solveSolution(solveSolution: string  | undefined) {
        this['solve_solution'] = solveSolution;
    }
    public get solveSolution(): string | undefined {
        return this['solve_solution'];
    }
}