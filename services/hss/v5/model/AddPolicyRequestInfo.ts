import { ChkFeatureInfo } from './ChkFeatureInfo';


export class AddPolicyRequestInfo {
    private 'feature_list'?: Array<ChkFeatureInfo>;
    public constructor() { 
    }
    public withFeatureList(featureList: Array<ChkFeatureInfo>): AddPolicyRequestInfo {
        this['feature_list'] = featureList;
        return this;
    }
    public set featureList(featureList: Array<ChkFeatureInfo>  | undefined) {
        this['feature_list'] = featureList;
    }
    public get featureList(): Array<ChkFeatureInfo> | undefined {
        return this['feature_list'];
    }
}