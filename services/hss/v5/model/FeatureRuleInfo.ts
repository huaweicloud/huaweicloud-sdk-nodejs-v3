

export class FeatureRuleInfo {
    private 'chk_feature_id'?: number;
    private 'chk_feature_name'?: string;
    private 'chk_feature_desc'?: string;
    private 'os_type'?: string;
    private 'feature_configure'?: string;
    private 'optional_protective_action'?: number;
    private 'protective_action'?: number;
    public editable?: number;
    public constructor() { 
    }
    public withChkFeatureId(chkFeatureId: number): FeatureRuleInfo {
        this['chk_feature_id'] = chkFeatureId;
        return this;
    }
    public set chkFeatureId(chkFeatureId: number  | undefined) {
        this['chk_feature_id'] = chkFeatureId;
    }
    public get chkFeatureId(): number | undefined {
        return this['chk_feature_id'];
    }
    public withChkFeatureName(chkFeatureName: string): FeatureRuleInfo {
        this['chk_feature_name'] = chkFeatureName;
        return this;
    }
    public set chkFeatureName(chkFeatureName: string  | undefined) {
        this['chk_feature_name'] = chkFeatureName;
    }
    public get chkFeatureName(): string | undefined {
        return this['chk_feature_name'];
    }
    public withChkFeatureDesc(chkFeatureDesc: string): FeatureRuleInfo {
        this['chk_feature_desc'] = chkFeatureDesc;
        return this;
    }
    public set chkFeatureDesc(chkFeatureDesc: string  | undefined) {
        this['chk_feature_desc'] = chkFeatureDesc;
    }
    public get chkFeatureDesc(): string | undefined {
        return this['chk_feature_desc'];
    }
    public withOsType(osType: string): FeatureRuleInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withFeatureConfigure(featureConfigure: string): FeatureRuleInfo {
        this['feature_configure'] = featureConfigure;
        return this;
    }
    public set featureConfigure(featureConfigure: string  | undefined) {
        this['feature_configure'] = featureConfigure;
    }
    public get featureConfigure(): string | undefined {
        return this['feature_configure'];
    }
    public withOptionalProtectiveAction(optionalProtectiveAction: number): FeatureRuleInfo {
        this['optional_protective_action'] = optionalProtectiveAction;
        return this;
    }
    public set optionalProtectiveAction(optionalProtectiveAction: number  | undefined) {
        this['optional_protective_action'] = optionalProtectiveAction;
    }
    public get optionalProtectiveAction(): number | undefined {
        return this['optional_protective_action'];
    }
    public withProtectiveAction(protectiveAction: number): FeatureRuleInfo {
        this['protective_action'] = protectiveAction;
        return this;
    }
    public set protectiveAction(protectiveAction: number  | undefined) {
        this['protective_action'] = protectiveAction;
    }
    public get protectiveAction(): number | undefined {
        return this['protective_action'];
    }
    public withEditable(editable: number): FeatureRuleInfo {
        this['editable'] = editable;
        return this;
    }
}