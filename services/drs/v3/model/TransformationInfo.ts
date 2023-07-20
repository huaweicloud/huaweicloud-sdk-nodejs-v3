

export class TransformationInfo {
    private 'transformation_type'?: TransformationInfoTransformationTypeEnum | string;
    public value?: string;
    public constructor(transformationType?: string, value?: string) { 
        this['transformation_type'] = transformationType;
        this['value'] = value;
    }
    public withTransformationType(transformationType: TransformationInfoTransformationTypeEnum | string): TransformationInfo {
        this['transformation_type'] = transformationType;
        return this;
    }
    public set transformationType(transformationType: TransformationInfoTransformationTypeEnum | string  | undefined) {
        this['transformation_type'] = transformationType;
    }
    public get transformationType(): TransformationInfoTransformationTypeEnum | string | undefined {
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
