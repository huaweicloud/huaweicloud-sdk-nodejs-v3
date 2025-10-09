

export class GetFeatureStatusV5Request {
    private 'feature_name'?: GetFeatureStatusV5RequestFeatureNameEnum | string;
    public constructor(featureName?: string) { 
        this['feature_name'] = featureName;
    }
    public withFeatureName(featureName: GetFeatureStatusV5RequestFeatureNameEnum | string): GetFeatureStatusV5Request {
        this['feature_name'] = featureName;
        return this;
    }
    public set featureName(featureName: GetFeatureStatusV5RequestFeatureNameEnum | string  | undefined) {
        this['feature_name'] = featureName;
    }
    public get featureName(): GetFeatureStatusV5RequestFeatureNameEnum | string | undefined {
        return this['feature_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetFeatureStatusV5RequestFeatureNameEnum {
    V5_CONSOLE = 'v5_console',
    ACCESS_ANALYZER = 'access_analyzer'
}
