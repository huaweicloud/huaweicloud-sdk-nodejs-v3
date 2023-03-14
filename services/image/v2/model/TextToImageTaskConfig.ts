import { TextToImageTaskConfigCommon } from './TextToImageTaskConfigCommon';


export class TextToImageTaskConfig {
    public common: TextToImageTaskConfigCommon;
    public constructor(common?: any) { 
        this['common'] = common;
    }
    public withCommon(common: TextToImageTaskConfigCommon): TextToImageTaskConfig {
        this['common'] = common;
        return this;
    }
}