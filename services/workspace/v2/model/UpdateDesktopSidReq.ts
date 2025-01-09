

export class UpdateDesktopSidReq {
    private 'desktop_ids'?: Array<string>;
    public constructor(desktopIds?: Array<string>) { 
        this['desktop_ids'] = desktopIds;
    }
    public withDesktopIds(desktopIds: Array<string>): UpdateDesktopSidReq {
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