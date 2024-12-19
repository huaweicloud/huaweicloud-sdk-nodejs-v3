

export class ScaleOut {
    public count?: number;
    private 'subnet_id'?: string;
    public constructor(count?: number) { 
        this['count'] = count;
    }
    public withCount(count: number): ScaleOut {
        this['count'] = count;
        return this;
    }
    public withSubnetId(subnetId: string): ScaleOut {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}