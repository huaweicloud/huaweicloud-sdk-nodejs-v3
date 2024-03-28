

export class UpdateQueueCidrRequestBody {
    private 'cidr_in_vpc'?: string;
    public constructor() { 
    }
    public withCidrInVpc(cidrInVpc: string): UpdateQueueCidrRequestBody {
        this['cidr_in_vpc'] = cidrInVpc;
        return this;
    }
    public set cidrInVpc(cidrInVpc: string  | undefined) {
        this['cidr_in_vpc'] = cidrInVpc;
    }
    public get cidrInVpc(): string | undefined {
        return this['cidr_in_vpc'];
    }
}