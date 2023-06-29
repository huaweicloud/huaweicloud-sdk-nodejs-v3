import { ObsObjInfo } from './ObsObjInfo';


export class MulInputFileInfo {
    public language?: string;
    public input?: ObsObjInfo;
    public constructor() { 
    }
    public withLanguage(language: string): MulInputFileInfo {
        this['language'] = language;
        return this;
    }
    public withInput(input: ObsObjInfo): MulInputFileInfo {
        this['input'] = input;
        return this;
    }
}