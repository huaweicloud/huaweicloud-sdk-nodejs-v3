

export class EnlargeNodeInfo {
    private 'available_zone'?: string;
    public constructor(availableZone?: string) { 
        this['available_zone'] = availableZone;
    }
    public withAvailableZone(availableZone: string): EnlargeNodeInfo {
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