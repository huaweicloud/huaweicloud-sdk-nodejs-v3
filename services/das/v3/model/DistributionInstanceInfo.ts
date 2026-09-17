

export class DistributionInstanceInfo {
    public status?: string;
    public num?: number;
    public constructor() { 
    }
    public withStatus(status: string): DistributionInstanceInfo {
        this['status'] = status;
        return this;
    }
    public withNum(num: number): DistributionInstanceInfo {
        this['num'] = num;
        return this;
    }
}