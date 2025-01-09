

export class DeleteTagRequest {
    private 'desktop_id'?: string;
    public key?: string;
    public constructor(desktopId?: string, key?: string) { 
        this['desktop_id'] = desktopId;
        this['key'] = key;
    }
    public withDesktopId(desktopId: string): DeleteTagRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withKey(key: string): DeleteTagRequest {
        this['key'] = key;
        return this;
    }
}