

export class Extension {
    private 'ep_id'?: string;
    private 'ep_service_id'?: string;
    public constructor() { 
    }
    public withEpId(epId: string): Extension {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpServiceId(epServiceId: string): Extension {
        this['ep_service_id'] = epServiceId;
        return this;
    }
    public set epServiceId(epServiceId: string  | undefined) {
        this['ep_service_id'] = epServiceId;
    }
    public get epServiceId(): string | undefined {
        return this['ep_service_id'];
    }
}