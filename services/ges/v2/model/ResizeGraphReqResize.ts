

export class ResizeGraphReqResize {
    private 'graph_size_type_index': string | undefined;
    public constructor(graphSizeTypeIndex?: any) { 
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public withGraphSizeTypeIndex(graphSizeTypeIndex: string): ResizeGraphReqResize {
        this['graph_size_type_index'] = graphSizeTypeIndex;
        return this;
    }
    public set graphSizeTypeIndex(graphSizeTypeIndex: string | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex() {
        return this['graph_size_type_index'];
    }
}