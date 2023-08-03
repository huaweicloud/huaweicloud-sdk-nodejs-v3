import { ModifyProxyRouteWeightReadonlyNode } from './ModifyProxyRouteWeightReadonlyNode';


export class ModifyGaussMySqlProxyRouteModeRequestBody {
    private 'route_mode'?: number;
    private 'master_weight'?: number;
    private 'readonly_nodes'?: Array<ModifyProxyRouteWeightReadonlyNode>;
    public constructor(routeMode?: number) { 
        this['route_mode'] = routeMode;
    }
    public withRouteMode(routeMode: number): ModifyGaussMySqlProxyRouteModeRequestBody {
        this['route_mode'] = routeMode;
        return this;
    }
    public set routeMode(routeMode: number  | undefined) {
        this['route_mode'] = routeMode;
    }
    public get routeMode(): number | undefined {
        return this['route_mode'];
    }
    public withMasterWeight(masterWeight: number): ModifyGaussMySqlProxyRouteModeRequestBody {
        this['master_weight'] = masterWeight;
        return this;
    }
    public set masterWeight(masterWeight: number  | undefined) {
        this['master_weight'] = masterWeight;
    }
    public get masterWeight(): number | undefined {
        return this['master_weight'];
    }
    public withReadonlyNodes(readonlyNodes: Array<ModifyProxyRouteWeightReadonlyNode>): ModifyGaussMySqlProxyRouteModeRequestBody {
        this['readonly_nodes'] = readonlyNodes;
        return this;
    }
    public set readonlyNodes(readonlyNodes: Array<ModifyProxyRouteWeightReadonlyNode>  | undefined) {
        this['readonly_nodes'] = readonlyNodes;
    }
    public get readonlyNodes(): Array<ModifyProxyRouteWeightReadonlyNode> | undefined {
        return this['readonly_nodes'];
    }
}