

export class FsDirUasge {
    private 'used_capacity'?: number;
    public constructor(usedCapacity?: number) { 
        this['used_capacity'] = usedCapacity;
    }
    public withUsedCapacity(usedCapacity: number): FsDirUasge {
        this['used_capacity'] = usedCapacity;
        return this;
    }
    public set usedCapacity(usedCapacity: number  | undefined) {
        this['used_capacity'] = usedCapacity;
    }
    public get usedCapacity(): number | undefined {
        return this['used_capacity'];
    }
}