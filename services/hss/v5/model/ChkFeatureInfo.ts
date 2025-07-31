

export class ChkFeatureInfo {
    private 'chk_feature_id'?: number;
    private 'protective_action'?: number;
    public enabled?: number;
    private 'feature_configure'?: string;
    public constructor(chkFeatureId?: number, protectiveAction?: number, enabled?: number, featureConfigure?: string) { 
        this['chk_feature_id'] = chkFeatureId;
        this['protective_action'] = protectiveAction;
        this['enabled'] = enabled;
        this['feature_configure'] = featureConfigure;
    }
    public withChkFeatureId(chkFeatureId: number): ChkFeatureInfo {
        this['chk_feature_id'] = chkFeatureId;
        return this;
    }
    public set chkFeatureId(chkFeatureId: number  | undefined) {
        this['chk_feature_id'] = chkFeatureId;
    }
    public get chkFeatureId(): number | undefined {
        return this['chk_feature_id'];
    }
    public withProtectiveAction(protectiveAction: number): ChkFeatureInfo {
        this['protective_action'] = protectiveAction;
        return this;
    }
    public set protectiveAction(protectiveAction: number  | undefined) {
        this['protective_action'] = protectiveAction;
    }
    public get protectiveAction(): number | undefined {
        return this['protective_action'];
    }
    public withEnabled(enabled: number): ChkFeatureInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withFeatureConfigure(featureConfigure: string): ChkFeatureInfo {
        this['feature_configure'] = featureConfigure;
        return this;
    }
    public set featureConfigure(featureConfigure: string  | undefined) {
        this['feature_configure'] = featureConfigure;
    }
    public get featureConfigure(): string | undefined {
        return this['feature_configure'];
    }
}