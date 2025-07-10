import { AddVolumesReq } from './AddVolumesReq';


export class AddDesktopVolumesRequest {
    private 'desktop_id'?: string;
    public body?: AddVolumesReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): AddDesktopVolumesRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: AddVolumesReq): AddDesktopVolumesRequest {
        this['body'] = body;
        return this;
    }
}