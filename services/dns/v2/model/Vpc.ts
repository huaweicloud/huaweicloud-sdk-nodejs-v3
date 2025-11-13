

export class Vpc {
    private 'vpc_id'?: string;
    private 'vpc_region'?: string;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): Vpc {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcRegion(vpcRegion: string): Vpc {
        this['vpc_region'] = vpcRegion;
        return this;
    }
    public set vpcRegion(vpcRegion: string  | undefined) {
        this['vpc_region'] = vpcRegion;
    }
    public get vpcRegion(): string | undefined {
        return this['vpc_region'];
    }
}