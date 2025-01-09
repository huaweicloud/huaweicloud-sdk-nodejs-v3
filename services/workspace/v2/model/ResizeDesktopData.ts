

export class ResizeDesktopData {
    private 'desktop_id'?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): ResizeDesktopData {
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