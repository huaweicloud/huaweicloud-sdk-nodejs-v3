import { PatchFilter } from './PatchFilter';


export class PatchRule {
    private 'patch_filters'?: Array<PatchFilter>;
    private 'rule_name'?: string;
    private 'compliance_level'?: string;
    private 'approve_after_days'?: number;
    private 'approve_until_date'?: number;
    private 'enable_non_security'?: boolean;
    public constructor(patchFilters?: Array<PatchFilter>, complianceLevel?: string, enableNonSecurity?: boolean) { 
        this['patch_filters'] = patchFilters;
        this['compliance_level'] = complianceLevel;
        this['enable_non_security'] = enableNonSecurity;
    }
    public withPatchFilters(patchFilters: Array<PatchFilter>): PatchRule {
        this['patch_filters'] = patchFilters;
        return this;
    }
    public set patchFilters(patchFilters: Array<PatchFilter>  | undefined) {
        this['patch_filters'] = patchFilters;
    }
    public get patchFilters(): Array<PatchFilter> | undefined {
        return this['patch_filters'];
    }
    public withRuleName(ruleName: string): PatchRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withComplianceLevel(complianceLevel: string): PatchRule {
        this['compliance_level'] = complianceLevel;
        return this;
    }
    public set complianceLevel(complianceLevel: string  | undefined) {
        this['compliance_level'] = complianceLevel;
    }
    public get complianceLevel(): string | undefined {
        return this['compliance_level'];
    }
    public withApproveAfterDays(approveAfterDays: number): PatchRule {
        this['approve_after_days'] = approveAfterDays;
        return this;
    }
    public set approveAfterDays(approveAfterDays: number  | undefined) {
        this['approve_after_days'] = approveAfterDays;
    }
    public get approveAfterDays(): number | undefined {
        return this['approve_after_days'];
    }
    public withApproveUntilDate(approveUntilDate: number): PatchRule {
        this['approve_until_date'] = approveUntilDate;
        return this;
    }
    public set approveUntilDate(approveUntilDate: number  | undefined) {
        this['approve_until_date'] = approveUntilDate;
    }
    public get approveUntilDate(): number | undefined {
        return this['approve_until_date'];
    }
    public withEnableNonSecurity(enableNonSecurity: boolean): PatchRule {
        this['enable_non_security'] = enableNonSecurity;
        return this;
    }
    public set enableNonSecurity(enableNonSecurity: boolean  | undefined) {
        this['enable_non_security'] = enableNonSecurity;
    }
    public get enableNonSecurity(): boolean | undefined {
        return this['enable_non_security'];
    }
}