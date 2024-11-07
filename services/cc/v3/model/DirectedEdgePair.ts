import { DirectedEdge } from './DirectedEdge';


export class DirectedEdgePair {
    private 'edge_pair'?: Array<DirectedEdge>;
    public constructor(edgePair?: Array<DirectedEdge>) { 
        this['edge_pair'] = edgePair;
    }
    public withEdgePair(edgePair: Array<DirectedEdge>): DirectedEdgePair {
        this['edge_pair'] = edgePair;
        return this;
    }
    public set edgePair(edgePair: Array<DirectedEdge>  | undefined) {
        this['edge_pair'] = edgePair;
    }
    public get edgePair(): Array<DirectedEdge> | undefined {
        return this['edge_pair'];
    }
}