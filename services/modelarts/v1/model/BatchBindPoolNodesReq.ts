import { BindNodeItem } from './BindNodeItem';


export class BatchBindPoolNodesReq {
    public nodes?: Array<BindNodeItem>;
    public drain?: boolean;
    public constructor(nodes?: Array<BindNodeItem>) { 
        this['nodes'] = nodes;
    }
    public withNodes(nodes: Array<BindNodeItem>): BatchBindPoolNodesReq {
        this['nodes'] = nodes;
        return this;
    }
    public withDrain(drain: boolean): BatchBindPoolNodesReq {
        this['drain'] = drain;
        return this;
    }
}