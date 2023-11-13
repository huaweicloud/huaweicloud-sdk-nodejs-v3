

export class ShowCeshierarchyRespNodes {
    public name?: string;
    private 'available_zone'?: string;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespNodes {
        this['name'] = name;
        return this;
    }
    public withAvailableZone(availableZone: string): ShowCeshierarchyRespNodes {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
}