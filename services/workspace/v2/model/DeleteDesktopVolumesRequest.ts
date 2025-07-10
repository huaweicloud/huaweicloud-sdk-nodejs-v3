import { DeleteVolumesReq } from './DeleteVolumesReq';


export class DeleteDesktopVolumesRequest {
    private 'desktop_id'?: string;
    public body?: DeleteVolumesReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): DeleteDesktopVolumesRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: DeleteVolumesReq): DeleteDesktopVolumesRequest {
        this['body'] = body;
        return this;
    }
}