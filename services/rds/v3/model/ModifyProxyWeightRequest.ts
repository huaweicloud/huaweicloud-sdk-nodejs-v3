import { ProxyReadonlyInstances } from './ProxyReadonlyInstances';


export class ModifyProxyWeightRequest {
    private 'master_weight'?: string;
    private 'readonly_instances'?: Array<ProxyReadonlyInstances>;
    public constructor(masterWeight?: string, readonlyInstances?: Array<ProxyReadonlyInstances>) { 
        this['master_weight'] = masterWeight;
        this['readonly_instances'] = readonlyInstances;
    }
    public withMasterWeight(masterWeight: string): ModifyProxyWeightRequest {
        this['master_weight'] = masterWeight;
        return this;
    }
    public set masterWeight(masterWeight: string  | undefined) {
        this['master_weight'] = masterWeight;
    }
    public get masterWeight(): string | undefined {
        return this['master_weight'];
    }
    public withReadonlyInstances(readonlyInstances: Array<ProxyReadonlyInstances>): ModifyProxyWeightRequest {
        this['readonly_instances'] = readonlyInstances;
        return this;
    }
    public set readonlyInstances(readonlyInstances: Array<ProxyReadonlyInstances>  | undefined) {
        this['readonly_instances'] = readonlyInstances;
    }
    public get readonlyInstances(): Array<ProxyReadonlyInstances> | undefined {
        return this['readonly_instances'];
    }
}