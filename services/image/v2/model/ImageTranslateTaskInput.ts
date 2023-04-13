import { ImageTranslateTaskInputData } from './ImageTranslateTaskInputData';


export class ImageTranslateTaskInput {
    public type: string;
    public data: Array<ImageTranslateTaskInputData>;
    public constructor(type?: any, data?: any) { 
        this['type'] = type;
        this['data'] = data;
    }
    public withType(type: string): ImageTranslateTaskInput {
        this['type'] = type;
        return this;
    }
    public withData(data: Array<ImageTranslateTaskInputData>): ImageTranslateTaskInput {
        this['data'] = data;
        return this;
    }
}