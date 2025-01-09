

export class ShowTagByDesktopIdRequest {
    private 'desktop_id'?: string;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): ShowTagByDesktopIdRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
}