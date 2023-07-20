import { ModifyProxyWeightReadonlyNode } from './ModifyProxyWeightReadonlyNode';


export class TaurusModifyProxyWeightRequest {
    private 'master_weight'?: number;
    private 'readonly_nodes'?: Array<ModifyProxyWeightReadonlyNode>;
    public constructor() { 
    }
    public withMasterWeight(masterWeight: number): TaurusModifyProxyWeightRequest {
        this['master_weight'] = masterWeight;
        return this;
    }
    public set masterWeight(masterWeight: number  | undefined) {
        this['master_weight'] = masterWeight;
    }
    public get masterWeight(): number | undefined {
        return this['master_weight'];
    }
    public withReadonlyNodes(readonlyNodes: Array<ModifyProxyWeightReadonlyNode>): TaurusModifyProxyWeightRequest {
        this['readonly_nodes'] = readonlyNodes;
        return this;
    }
    public set readonlyNodes(readonlyNodes: Array<ModifyProxyWeightReadonlyNode>  | undefined) {
        this['readonly_nodes'] = readonlyNodes;
    }
    public get readonlyNodes(): Array<ModifyProxyWeightReadonlyNode> | undefined {
        return this['readonly_nodes'];
    }
}