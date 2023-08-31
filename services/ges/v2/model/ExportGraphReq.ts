import { ExportGraphReqPaginate } from './ExportGraphReqPaginate';


export class ExportGraphReq {
    private 'graph_export_path'?: string;
    private 'edge_set_name'?: string;
    private 'vertex_set_name'?: string;
    private 'schema_name'?: string;
    public paginate?: ExportGraphReqPaginate;
    public constructor(graphExportPath?: string, edgeSetName?: string, vertexSetName?: string, schemaName?: string) { 
        this['graph_export_path'] = graphExportPath;
        this['edge_set_name'] = edgeSetName;
        this['vertex_set_name'] = vertexSetName;
        this['schema_name'] = schemaName;
    }
    public withGraphExportPath(graphExportPath: string): ExportGraphReq {
        this['graph_export_path'] = graphExportPath;
        return this;
    }
    public set graphExportPath(graphExportPath: string  | undefined) {
        this['graph_export_path'] = graphExportPath;
    }
    public get graphExportPath(): string | undefined {
        return this['graph_export_path'];
    }
    public withEdgeSetName(edgeSetName: string): ExportGraphReq {
        this['edge_set_name'] = edgeSetName;
        return this;
    }
    public set edgeSetName(edgeSetName: string  | undefined) {
        this['edge_set_name'] = edgeSetName;
    }
    public get edgeSetName(): string | undefined {
        return this['edge_set_name'];
    }
    public withVertexSetName(vertexSetName: string): ExportGraphReq {
        this['vertex_set_name'] = vertexSetName;
        return this;
    }
    public set vertexSetName(vertexSetName: string  | undefined) {
        this['vertex_set_name'] = vertexSetName;
    }
    public get vertexSetName(): string | undefined {
        return this['vertex_set_name'];
    }
    public withSchemaName(schemaName: string): ExportGraphReq {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withPaginate(paginate: ExportGraphReqPaginate): ExportGraphReq {
        this['paginate'] = paginate;
        return this;
    }
}