

export class ResizeGraphReqResize {
    private 'graph_size_type_index'?: string;
    public constructor(graphSizeTypeIndex?: string) { 
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public withGraphSizeTypeIndex(graphSizeTypeIndex: string): ResizeGraphReqResize {
        this['graph_size_type_index'] = graphSizeTypeIndex;
        return this;
    }
    public set graphSizeTypeIndex(graphSizeTypeIndex: string  | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex(): string | undefined {
        return this['graph_size_type_index'];
    }
}