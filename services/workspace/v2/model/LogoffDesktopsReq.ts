

export class LogoffDesktopsReq {
    private 'desktop_ids'?: Array<string>;
    public message?: string;
    public constructor() { 
    }
    public withDesktopIds(desktopIds: Array<string>): LogoffDesktopsReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withMessage(message: string): LogoffDesktopsReq {
        this['message'] = message;
        return this;
    }
}