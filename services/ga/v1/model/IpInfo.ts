

export class IpInfo {
    public cidr?: string;
    public description?: string;
    private 'created_at'?: Date;
    public constructor() { 
    }
    public withCidr(cidr: string): IpInfo {
        this['cidr'] = cidr;
        return this;
    }
    public withDescription(description: string): IpInfo {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): IpInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}