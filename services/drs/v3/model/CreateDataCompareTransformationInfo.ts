

export class CreateDataCompareTransformationInfo {
    private 'transformation_type'?: string;
    public value?: string;
    public constructor(transformationType?: string, value?: string) { 
        this['transformation_type'] = transformationType;
        this['value'] = value;
    }
    public withTransformationType(transformationType: string): CreateDataCompareTransformationInfo {
        this['transformation_type'] = transformationType;
        return this;
    }
    public set transformationType(transformationType: string  | undefined) {
        this['transformation_type'] = transformationType;
    }
    public get transformationType(): string | undefined {
        return this['transformation_type'];
    }
    public withValue(value: string): CreateDataCompareTransformationInfo {
        this['value'] = value;
        return this;
    }
}