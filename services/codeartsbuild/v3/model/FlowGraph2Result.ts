import { FlowGraph2ResultEdges } from './FlowGraph2ResultEdges';
import { Vertices } from './Vertices';


export class FlowGraph2Result {
    public edges?: Array<FlowGraph2ResultEdges>;
    public vertices?: Array<Vertices>;
    public constructor() { 
    }
    public withEdges(edges: Array<FlowGraph2ResultEdges>): FlowGraph2Result {
        this['edges'] = edges;
        return this;
    }
    public withVertices(vertices: Array<Vertices>): FlowGraph2Result {
        this['vertices'] = vertices;
        return this;
    }
}