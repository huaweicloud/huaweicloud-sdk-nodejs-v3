import { Setting } from './Setting';


export class CreateCnfReq {
    public name?: string;
    private 'conf_content'?: string;
    public setting?: Setting;
    private 'sensitive_words'?: Array<string>;
    public desc?: string;
    public constructor(name?: string, confContent?: string, setting?: Setting) { 
        this['name'] = name;
        this['conf_content'] = confContent;
        this['setting'] = setting;
    }
    public withName(name: string): CreateCnfReq {
        this['name'] = name;
        return this;
    }
    public withConfContent(confContent: string): CreateCnfReq {
        this['conf_content'] = confContent;
        return this;
    }
    public set confContent(confContent: string  | undefined) {
        this['conf_content'] = confContent;
    }
    public get confContent(): string | undefined {
        return this['conf_content'];
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
    public withDesc(desc: string): CreateCnfReq {
        this['desc'] = desc;
        return this;
    }
}