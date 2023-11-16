import { FlowGraphResultEdges } from './FlowGraphResultEdges';
import { Vertices } from './Vertices';


export class FlowGraphResult {
    public edges?: Array<FlowGraphResultEdges>;
    public vertices?: Array<Vertices>;
    public constructor() { 
    }
    public withEdges(edges: Array<FlowGraphResultEdges>): FlowGraphResult {
        this['edges'] = edges;
        return this;
    }
    public withVertices(vertices: Array<Vertices>): FlowGraphResult {
        this['vertices'] = vertices;
        return this;
    }
}