import { Volume } from './Volume';


export class AddVolumes {
    private 'desktop_id'?: string;
    public volumes?: Array<Volume>;
    public constructor(desktopId?: string, volumes?: Array<Volume>) { 
        this['desktop_id'] = desktopId;
        this['volumes'] = volumes;
    }
    public withDesktopId(desktopId: string): AddVolumes {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withVolumes(volumes: Array<Volume>): AddVolumes {
        this['volumes'] = volumes;
        return this;
    }
}