import { Setting } from './Setting';


export class CreateCnfReq {
    public name?: string;
    public confContent?: string;
    public setting?: Setting;
    private 'sensitive_words'?: Array<string>;
    public constructor(name?: string, confContent?: string, setting?: Setting) { 
        this['name'] = name;
        this['confContent'] = confContent;
        this['setting'] = setting;
    }
    public withName(name: string): CreateCnfReq {
        this['name'] = name;
        return this;
    }
    public withConfContent(confContent: string): CreateCnfReq {
        this['confContent'] = confContent;
        return this;
    }
    public withSetting(setting: Setting): CreateCnfReq {
        this['setting'] = setting;
        return this;
    }
    public withSensitiveWords(sensitiveWords: Array<string>): CreateCnfReq {
        this['sensitive_words'] = sensitiveWords;
        return this;
    }
    public set sensitiveWords(sensitiveWords: Array<string>  | undefined) {
        this['sensitive_words'] = sensitiveWords;
    }
    public get sensitiveWords(): Array<string> | undefined {
        return this['sensitive_words'];
    }
}