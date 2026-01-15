

export class ExpandDesktopPoolVolumesReqVolumes {
    public id?: string;
    public size?: number;
    public constructor(id?: string, size?: number) { 
        this['id'] = id;
        this['size'] = size;
    }
    public withId(id: string): ExpandDesktopPoolVolumesReqVolumes {
        this['id'] = id;
        return this;
    }
    public withSize(size: number): ExpandDesktopPoolVolumesReqVolumes {
        this['size'] = size;
        return this;
    }
}