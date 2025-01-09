

export class ListDesktopActionsRequest {
    private 'desktop_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): ListDesktopActionsRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withOffset(offset: number): ListDesktopActionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopActionsRequest {
        this['limit'] = limit;
        return this;
    }
}