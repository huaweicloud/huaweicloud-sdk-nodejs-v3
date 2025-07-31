import { ChkFeatureInfo } from './ChkFeatureInfo';


export class UpdatePolicyRequestBody {
    private 'feature_list'?: Array<ChkFeatureInfo>;
    public constructor(featureList?: Array<ChkFeatureInfo>) { 
        this['feature_list'] = featureList;
    }
    public withFeatureList(featureList: Array<ChkFeatureInfo>): UpdatePolicyRequestBody {
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