

export class CheckSysprepInfoRequestBody {
    private 'desktop_ids'?: Array<string>;
    public constructor() { 
    }
    public withDesktopIds(desktopIds: Array<string>): CheckSysprepInfoRequestBody {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
}