import { Volume } from './Volume';


export class AddDesktopVolumesReq {
    private 'desktop_id'?: string;
    public volumes?: Array<Volume>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): AddDesktopVolumesReq {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withVolumes(volumes: Array<Volume>): AddDesktopVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}