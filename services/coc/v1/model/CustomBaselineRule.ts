import { CustomBaselineRulePatchItem } from './CustomBaselineRulePatchItem';


export class CustomBaselineRule {
    public id?: string;
    private 'rule_name'?: string;
    public product?: string;
    private 'compliance_level'?: string;
    private 'patch_items'?: Array<CustomBaselineRulePatchItem>;
    public constructor(product?: string, complianceLevel?: string) { 
        this['product'] = product;
        this['compliance_level'] = complianceLevel;
    }
    public withId(id: string): CustomBaselineRule {
        this['id'] = id;
        return this;
    }
    public withRuleName(ruleName: string): CustomBaselineRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withProduct(product: string): CustomBaselineRule {
        this['product'] = product;
        return this;
    }
    public withComplianceLevel(complianceLevel: string): CustomBaselineRule {
        this['compliance_level'] = complianceLevel;
        return this;
    }
    public set complianceLevel(complianceLevel: string  | undefined) {
        this['compliance_level'] = complianceLevel;
    }
    public get complianceLevel(): string | undefined {
        return this['compliance_level'];
    }
    public withPatchItems(patchItems: Array<CustomBaselineRulePatchItem>): CustomBaselineRule {
        this['patch_items'] = patchItems;
        return this;
    }
    public set patchItems(patchItems: Array<CustomBaselineRulePatchItem>  | undefined) {
        this['patch_items'] = patchItems;
    }
    public get patchItems(): Array<CustomBaselineRulePatchItem> | undefined {
        return this['patch_items'];
    }
}