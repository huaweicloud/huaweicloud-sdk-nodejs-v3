

export class TransformationInfo {
    private 'transformation_type': TransformationInfoTransformationTypeEnum | undefined;
    public value: string;
    public constructor(transformationType?: any, value?: any) { 
        this['transformation_type'] = transformationType;
        this['value'] = value;
    }
    public withTransformationType(transformationType: TransformationInfoTransformationTypeEnum): TransformationInfo {
        this['transformation_type'] = transformationType;
        return this;
    }
    public set transformationType(transformationType: TransformationInfoTransformationTypeEnum | undefined) {
        this['transformation_type'] = transformationType;
    }
    public get transformationType() {
        return this['transformation_type'];
    }
    public withValue(value: string): TransformationInfo {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransformationInfoTransformationTypeEnum {
    CONTENTCONDITIONALFILTER = 'contentConditionalFilter',
    CONFIGCONDITIONALFILTER = 'configConditionalFilter'
}
