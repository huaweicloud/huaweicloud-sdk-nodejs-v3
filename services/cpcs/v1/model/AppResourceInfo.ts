

export class AppResourceInfo {
    private 'app_num'?: number;
    public constructor(appNum?: number) { 
        this['app_num'] = appNum;
    }
    public withAppNum(appNum: number): AppResourceInfo {
        this['app_num'] = appNum;
        return this;
    }
    public set appNum(appNum: number  | undefined) {
        this['app_num'] = appNum;
    }
    public get appNum(): number | undefined {
        return this['app_num'];
    }
}