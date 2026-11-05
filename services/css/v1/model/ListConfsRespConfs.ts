import { ListConfsRespConfsSetting } from './ListConfsRespConfsSetting';


export class ListConfsRespConfs {
    public name?: string;
    public status?: string;
    public confContent?: string;
    public setting?: ListConfsRespConfsSetting;
    public updateAt?: string;
    public desc?: string;
    public sensitiveWordsShielding?: boolean;
    public constructor() { 
    }
    public withName(name: string): ListConfsRespConfs {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListConfsRespConfs {
        this['status'] = status;
        return this;
    }
    public withConfContent(confContent: string): ListConfsRespConfs {
        this['confContent'] = confContent;
        return this;
    }
    public withSetting(setting: ListConfsRespConfsSetting): ListConfsRespConfs {
        this['setting'] = setting;
        return this;
    }
    public withUpdateAt(updateAt: string): ListConfsRespConfs {
        this['updateAt'] = updateAt;
        return this;
    }
    public withDesc(desc: string): ListConfsRespConfs {
        this['desc'] = desc;
        return this;
    }
    public withSensitiveWordsShielding(sensitiveWordsShielding: boolean): ListConfsRespConfs {
        this['sensitiveWordsShielding'] = sensitiveWordsShielding;
        return this;
    }
}