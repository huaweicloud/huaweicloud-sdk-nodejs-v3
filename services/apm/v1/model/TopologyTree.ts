import { TreeNode } from './TreeNode';


export class TopologyTree {
    public tree?: Array<TreeNode>;
    public constructor() { 
    }
    public withTree(tree: Array<TreeNode>): TopologyTree {
        this['tree'] = tree;
        return this;
    }
}