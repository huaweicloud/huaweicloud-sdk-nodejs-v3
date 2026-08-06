

export class CreatePoolRequestBody {
    public name?: string;
    public region?: string;
    public type?: string;
    private 'vpc_id'?: string;
    public description?: string;
    public constructor(name?: string, region?: string, type?: string, vpcId?: string) { 
        this['name'] = name;
        this['region'] = region;
        this['type'] = type;
        this['vpc_id'] = vpcId;
    }
    public withName(name: string): CreatePoolRequestBody {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): CreatePoolRequestBody {
        this['region'] = region;
        return this;
    }
    public withType(type: string): CreatePoolRequestBody {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): CreatePoolRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDescription(description: string): CreatePoolRequestBody {
        this['description'] = description;
        return this;
    }
}