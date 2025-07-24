

export class TestReportInfoRequestBody {
    private 'plan_id'?: string;
    private 'branch_id'?: string;
    private 'module_id'?: string;
    private 'fixed_version_id'?: string;
    public constructor() { 
    }
    public withPlanId(planId: string): TestReportInfoRequestBody {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withBranchId(branchId: string): TestReportInfoRequestBody {
        this['branch_id'] = branchId;
        return this;
    }
    public set branchId(branchId: string  | undefined) {
        this['branch_id'] = branchId;
    }
    public get branchId(): string | undefined {
        return this['branch_id'];
    }
    public withModuleId(moduleId: string): TestReportInfoRequestBody {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withFixedVersionId(fixedVersionId: string): TestReportInfoRequestBody {
        this['fixed_version_id'] = fixedVersionId;
        return this;
    }
    public set fixedVersionId(fixedVersionId: string  | undefined) {
        this['fixed_version_id'] = fixedVersionId;
    }
    public get fixedVersionId(): string | undefined {
        return this['fixed_version_id'];
    }
}