import { DistributionInstanceInfo } from './DistributionInstanceInfo';


export class EngineDistributionInfo {
    private 'engine_type'?: string;
    public total?: number;
    private 'instance_infos'?: Array<DistributionInstanceInfo>;
    public constructor() { 
    }
    public withEngineType(engineType: string): EngineDistributionInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withTotal(total: number): EngineDistributionInfo {
        this['total'] = total;
        return this;
    }
    public withInstanceInfos(instanceInfos: Array<DistributionInstanceInfo>): EngineDistributionInfo {
        this['instance_infos'] = instanceInfos;
        return this;
    }
    public set instanceInfos(instanceInfos: Array<DistributionInstanceInfo>  | undefined) {
        this['instance_infos'] = instanceInfos;
    }
    public get instanceInfos(): Array<DistributionInstanceInfo> | undefined {
        return this['instance_infos'];
    }
}