

export class ImageHighresolutionMattingInference {
    private 'return_type': ImageHighresolutionMattingInferenceReturnTypeEnum | undefined;
    public coord?: Array<number>;
    public constructor(returnType?: any) { 
        this['return_type'] = returnType;
    }
    public withReturnType(returnType: ImageHighresolutionMattingInferenceReturnTypeEnum): ImageHighresolutionMattingInference {
        this['return_type'] = returnType;
        return this;
    }
    public set returnType(returnType: ImageHighresolutionMattingInferenceReturnTypeEnum | undefined) {
        this['return_type'] = returnType;
    }
    public get returnType() {
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
