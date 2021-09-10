import { MathInfo } from './MathInfo';


export class ExtractedData {
    private 'math_info'?: MathInfo | undefined;
    public constructor() { 
    }
    public withMathInfo(mathInfo: MathInfo): ExtractedData {
        this['math_info'] = mathInfo;
        return this;
    }
    public set mathInfo(mathInfo: MathInfo | undefined) {
        this['math_info'] = mathInfo;
    }
    public get mathInfo() {
        return this['math_info'];
    }
}