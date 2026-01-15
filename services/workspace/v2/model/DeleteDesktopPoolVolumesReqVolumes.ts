

export class DeleteDesktopPoolVolumesReqVolumes {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteDesktopPoolVolumesReqVolumes {
        this['id'] = id;
        return this;
    }
}