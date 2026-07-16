import { NodeResizeParams } from './NodeResizeParams';
import { ResizeNodeInfo } from './ResizeNodeInfo';


export class BatchResizeRequestBody {
    public nodes?: Array<ResizeNodeInfo>;
    public source?: NodeResizeParams;
    public target?: NodeResizeParams;
    public constructor(nodes?: Array<ResizeNodeInfo>, source?: NodeResizeParams, target?: NodeResizeParams) { 
        this['nodes'] = nodes;
        this['source'] = source;
        this['target'] = target;
    }
    public withNodes(nodes: Array<ResizeNodeInfo>): BatchResizeRequestBody {
        this['nodes'] = nodes;
        return this;
    }
    public withSource(source: NodeResizeParams): BatchResizeRequestBody {
        this['source'] = source;
        return this;
    }
    public withTarget(target: NodeResizeParams): BatchResizeRequestBody {
        this['target'] = target;
        return this;
    }
}