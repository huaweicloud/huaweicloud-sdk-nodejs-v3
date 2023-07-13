import { ImageHighresolutionMattingInputData } from './ImageHighresolutionMattingInputData';


export class ImageHighresolutionMattingInput {
    public type: string;
    public data: Array<ImageHighresolutionMattingInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): ImageHighresolutionMattingInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<ImageHighresolutionMattingInputData>): ImageHighresolutionMattingInput {
        this['data'] = data;
        return this;
    }
}