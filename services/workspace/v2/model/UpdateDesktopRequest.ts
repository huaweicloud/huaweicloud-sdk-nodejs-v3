import { ModifyDesktopAttributesReq } from './ModifyDesktopAttributesReq';


export class UpdateDesktopRequest {
    private 'desktop_id'?: string;
    public body?: ModifyDesktopAttributesReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): UpdateDesktopRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: ModifyDesktopAttributesReq): UpdateDesktopRequest {
        this['body'] = body;
        return this;
    }
}