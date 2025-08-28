import { InstanceEngineDistributionListInstanceInfos } from './InstanceEngineDistributionListInstanceInfos';


export class InstanceEngineDistributionListEngineDistribution {
    private 'datastore_type'?: string;
    public total?: number;
    private 'instance_infos'?: Array<InstanceEngineDistributionListInstanceInfos>;
    public constructor() { 
    }
    public withDatastoreType(datastoreType: string): InstanceEngineDistributionListEngineDistribution {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withTotal(total: number): InstanceEngineDistributionListEngineDistribution {
        this['total'] = total;
        return this;
    }
    public withInstanceInfos(instanceInfos: Array<InstanceEngineDistributionListInstanceInfos>): InstanceEngineDistributionListEngineDistribution {
        this['instance_infos'] = instanceInfos;
        return this;
    }
    public set instanceInfos(instanceInfos: Array<InstanceEngineDistributionListInstanceInfos>  | undefined) {
        this['instance_infos'] = instanceInfos;
    }
    public get instanceInfos(): Array<InstanceEngineDistributionListInstanceInfos> | undefined {
        return this['instance_infos'];
    }
}