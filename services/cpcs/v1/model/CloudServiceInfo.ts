import { ResourceDistribution } from './ResourceDistribution';


export class CloudServiceInfo {
    private 'service_num'?: number;
    private 'resource_num'?: number;
    private 'resource_distribution'?: ResourceDistribution;
    public constructor(serviceNum?: number, resourceNum?: number, resourceDistribution?: ResourceDistribution) { 
        this['service_num'] = serviceNum;
        this['resource_num'] = resourceNum;
        this['resource_distribution'] = resourceDistribution;
    }
    public withServiceNum(serviceNum: number): CloudServiceInfo {
        this['service_num'] = serviceNum;
        return this;
    }
    public set serviceNum(serviceNum: number  | undefined) {
        this['service_num'] = serviceNum;
    }
    public get serviceNum(): number | undefined {
        return this['service_num'];
    }
    public withResourceNum(resourceNum: number): CloudServiceInfo {
        this['resource_num'] = resourceNum;
        return this;
    }
    public set resourceNum(resourceNum: number  | undefined) {
        this['resource_num'] = resourceNum;
    }
    public get resourceNum(): number | undefined {
        return this['resource_num'];
    }
    public withResourceDistribution(resourceDistribution: ResourceDistribution): CloudServiceInfo {
        this['resource_distribution'] = resourceDistribution;
        return this;
    }
    public set resourceDistribution(resourceDistribution: ResourceDistribution  | undefined) {
        this['resource_distribution'] = resourceDistribution;
    }
    public get resourceDistribution(): ResourceDistribution | undefined {
        return this['resource_distribution'];
    }
}