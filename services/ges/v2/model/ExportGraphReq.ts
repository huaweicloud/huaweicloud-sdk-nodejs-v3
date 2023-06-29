

export class ExportGraphReq {
    private 'graph_export_path': string | undefined;
    private 'edge_set_name': string | undefined;
    private 'vertex_set_name': string | undefined;
    private 'schema_name': string | undefined;
    public constructor(graphExportPath?: any, edgeSetName?: any, vertexSetName?: any, schemaName?: any) { 
        this['graph_export_path'] = graphExportPath;
        this['edge_set_name'] = edgeSetName;
        this['vertex_set_name'] = vertexSetName;
        this['schema_name'] = schemaName;
    }
    public withGraphExportPath(graphExportPath: string): ExportGraphReq {
        this['graph_export_path'] = graphExportPath;
        return this;
    }
    public set graphExportPath(graphExportPath: string | undefined) {
        this['graph_export_path'] = graphExportPath;
    }
    public get graphExportPath() {
        return this['graph_export_path'];
    }
    public withEdgeSetName(edgeSetName: string): ExportGraphReq {
        this['edge_set_name'] = edgeSetName;
        return this;
    }
    public set edgeSetName(edgeSetName: string | undefined) {
        this['edge_set_name'] = edgeSetName;
    }
    public get edgeSetName() {
        return this['edge_set_name'];
    }
    public withVertexSetName(vertexSetName: string): ExportGraphReq {
        this['vertex_set_name'] = vertexSetName;
        return this;
    }
    public set vertexSetName(vertexSetName: string | undefined) {
        this['vertex_set_name'] = vertexSetName;
    }
    public get vertexSetName() {
        return this['vertex_set_name'];
    }
    public withSchemaName(schemaName: string): ExportGraphReq {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName() {
        return this['schema_name'];
    }
}