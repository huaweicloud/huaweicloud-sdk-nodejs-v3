import { Setting } from './Setting';


export class Confs {
    public name?: string;
    public status?: string;
    public confContent?: string;
    public setting?: Setting;
    public updateAt?: string;
    public desc?: string;
    public sensitiveWordsShielding?: boolean;
    public constructor() { 
    }
    public withName(name: string): Confs {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): Confs {
        this['status'] = status;
        return this;
    }
    public withConfContent(confContent: string): Confs {
        this['confContent'] = confContent;
        return this;
    }
    public withSetting(setting: Setting): Confs {
        this['setting'] = setting;
        return this;
    }
    public withUpdateAt(updateAt: string): Confs {
        this['updateAt'] = updateAt;
        return this;
    }
    public withDesc(desc: string): Confs {
        this['desc'] = desc;
        return this;
    }
    public withSensitiveWordsShielding(sensitiveWordsShielding: boolean): Confs {
        this['sensitiveWordsShielding'] = sensitiveWordsShielding;
        return this;
    }
}