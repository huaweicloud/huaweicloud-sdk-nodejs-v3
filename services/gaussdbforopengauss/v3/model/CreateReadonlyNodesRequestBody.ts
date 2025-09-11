import { NodeDistributionOption } from './NodeDistributionOption';


export class CreateReadonlyNodesRequestBody {
    private 'node_distribution'?: Array<NodeDistributionOption>;
    public constructor(nodeDistribution?: Array<NodeDistributionOption>) { 
        this['node_distribution'] = nodeDistribution;
    }
    public withNodeDistribution(nodeDistribution: Array<NodeDistributionOption>): CreateReadonlyNodesRequestBody {
        this['node_distribution'] = nodeDistribution;
        return this;
    }
    public set nodeDistribution(nodeDistribution: Array<NodeDistributionOption>  | undefined) {
        this['node_distribution'] = nodeDistribution;
    }
    public get nodeDistribution(): Array<NodeDistributionOption> | undefined {
        return this['node_distribution'];
    }
}