

export class InstanceEngineDistributionListInstanceInfos {
    public status?: string;
    public num?: number;
    public constructor() { 
    }
    public withStatus(status: string): InstanceEngineDistributionListInstanceInfos {
        this['status'] = status;
        return this;
    }
    public withNum(num: number): InstanceEngineDistributionListInstanceInfos {
        this['num'] = num;
        return this;
    }
}