import { AppCodeCreate } from './AppCodeCreate';


export class AppCodeBaseInfo {
    private 'app_code'?: string;
    public id?: string;
    private 'app_id'?: string;
    private 'create_time'?: string;
    public constructor(appCode?: string) { 
        this['app_code'] = appCode;
    }
    public withAppCode(appCode: string): AppCodeBaseInfo {
        this['app_code'] = appCode;
        return this;
    }
    public set appCode(appCode: string  | undefined) {
        this['app_code'] = appCode;
    }
    public get appCode(): string | undefined {
        return this['app_code'];
    }
    public withId(id: string): AppCodeBaseInfo {
        this['id'] = id;
        return this;
    }
    public withAppId(appId: string): AppCodeBaseInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withCreateTime(createTime: string): AppCodeBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}