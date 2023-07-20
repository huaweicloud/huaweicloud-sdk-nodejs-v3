

export class ImageHighresolutionMattingInference {
    private 'return_type'?: ImageHighresolutionMattingInferenceReturnTypeEnum | string;
    public coord?: Array<number>;
    public constructor(returnType?: string) { 
        this['return_type'] = returnType;
    }
    public withReturnType(returnType: ImageHighresolutionMattingInferenceReturnTypeEnum | string): ImageHighresolutionMattingInference {
        this['return_type'] = returnType;
        return this;
    }
    public set returnType(returnType: ImageHighresolutionMattingInferenceReturnTypeEnum | string  | undefined) {
        this['return_type'] = returnType;
    }
    public get returnType(): ImageHighresolutionMattingInferenceReturnTypeEnum | string | undefined {
        return this['return_type'];
    }
    public withCoord(coord: Array<number>): ImageHighresolutionMattingInference {
        this['coord'] = coord;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageHighresolutionMattingInferenceReturnTypeEnum {
    FOREGROUND = 'foreground',
    ALPHA = 'alpha'
}
