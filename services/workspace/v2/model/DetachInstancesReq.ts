

export class DetachInstancesReq {
    private 'desktop_ids'?: Array<string>;
    private 'shutoff_after_detach'?: boolean;
    public constructor() { 
    }
    public withDesktopIds(desktopIds: Array<string>): DetachInstancesReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withShutoffAfterDetach(shutoffAfterDetach: boolean): DetachInstancesReq {
        this['shutoff_after_detach'] = shutoffAfterDetach;
        return this;
    }
    public set shutoffAfterDetach(shutoffAfterDetach: boolean  | undefined) {
        this['shutoff_after_detach'] = shutoffAfterDetach;
    }
    public get shutoffAfterDetach(): boolean | undefined {
        return this['shutoff_after_detach'];
    }
}