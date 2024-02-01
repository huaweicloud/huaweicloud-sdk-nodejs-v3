import { InstancesWeight } from './InstancesWeight';


export class ModifyMySqlProxyRouteModeRequest {
    private 'master_weight'?: number;
    private 'readonly_instances'?: Array<InstancesWeight>;
    private 'route_mode'?: number;
    public constructor(masterWeight?: number, readonlyInstances?: Array<InstancesWeight>, routeMode?: number) { 
        this['master_weight'] = masterWeight;
        this['readonly_instances'] = readonlyInstances;
        this['route_mode'] = routeMode;
    }
    public withMasterWeight(masterWeight: number): ModifyMySqlProxyRouteModeRequest {
        this['master_weight'] = masterWeight;
        return this;
    }
    public set masterWeight(masterWeight: number  | undefined) {
        this['master_weight'] = masterWeight;
    }
    public get masterWeight(): number | undefined {
        return this['master_weight'];
    }
    public withReadonlyInstances(readonlyInstances: Array<InstancesWeight>): ModifyMySqlProxyRouteModeRequest {
        this['readonly_instances'] = readonlyInstances;
        return this;
    }
    public set readonlyInstances(readonlyInstances: Array<InstancesWeight>  | undefined) {
        this['readonly_instances'] = readonlyInstances;
    }
    public get readonlyInstances(): Array<InstancesWeight> | undefined {
        return this['readonly_instances'];
    }
    public withRouteMode(routeMode: number): ModifyMySqlProxyRouteModeRequest {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: number  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): number | undefined {
        return this['route_mode'];
    }
}