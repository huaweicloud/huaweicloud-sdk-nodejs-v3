import { ImportGraphReqParallelEdge } from './ImportGraphReqParallelEdge';


export class ImportGraphReq {
    private 'edgeset_path'?: string | undefined;
    private 'edgeset_format'?: string | undefined;
    private 'vertexset_path'?: string | undefined;
    private 'vertexset_format'?: string | undefined;
    private 'schema_path'?: string | undefined;
    private 'log_dir'?: string | undefined;
    private 'parallel_edge'?: ImportGraphReqParallelEdge | undefined;
    public delimiter?: string;
    private 'trim_quote'?: string | undefined;
    public offline?: boolean;
    public constructor() { 
    }
    public withEdgesetPath(edgesetPath: string): ImportGraphReq {
        this['edgeset_path'] = edgesetPath;
        return this;
    }
    public set edgesetPath(edgesetPath: string | undefined) {
        this['edgeset_path'] = edgesetPath;
    }
    public get edgesetPath() {
        return this['edgeset_path'];
    }
    public withEdgesetFormat(edgesetFormat: string): ImportGraphReq {
        this['edgeset_format'] = edgesetFormat;
        return this;
    }
    public set edgesetFormat(edgesetFormat: string | undefined) {
        this['edgeset_format'] = edgesetFormat;
    }
    public get edgesetFormat() {
        return this['edgeset_format'];
    }
    public withVertexsetPath(vertexsetPath: string): ImportGraphReq {
        this['vertexset_path'] = vertexsetPath;
        return this;
    }
    public set vertexsetPath(vertexsetPath: string | undefined) {
        this['vertexset_path'] = vertexsetPath;
    }
    public get vertexsetPath() {
        return this['vertexset_path'];
    }
    public withVertexsetFormat(vertexsetFormat: string): ImportGraphReq {
        this['vertexset_format'] = vertexsetFormat;
        return this;
    }
    public set vertexsetFormat(vertexsetFormat: string | undefined) {
        this['vertexset_format'] = vertexsetFormat;
    }
    public get vertexsetFormat() {
        return this['vertexset_format'];
    }
    public withSchemaPath(schemaPath: string): ImportGraphReq {
        this['schema_path'] = schemaPath;
        return this;
    }
    public set schemaPath(schemaPath: string | undefined) {
        this['schema_path'] = schemaPath;
    }
    public get schemaPath() {
        return this['schema_path'];
    }
    public withLogDir(logDir: string): ImportGraphReq {
        this['log_dir'] = logDir;
        return this;
    }
    public set logDir(logDir: string | undefined) {
        this['log_dir'] = logDir;
    }
    public get logDir() {
        return this['log_dir'];
    }
    public withParallelEdge(parallelEdge: ImportGraphReqParallelEdge): ImportGraphReq {
        this['parallel_edge'] = parallelEdge;
        return this;
    }
    public set parallelEdge(parallelEdge: ImportGraphReqParallelEdge | undefined) {
        this['parallel_edge'] = parallelEdge;
    }
    public get parallelEdge() {
        return this['parallel_edge'];
    }
    public withDelimiter(delimiter: string): ImportGraphReq {
        this['delimiter'] = delimiter;
        return this;
    }
    public withTrimQuote(trimQuote: string): ImportGraphReq {
        this['trim_quote'] = trimQuote;
        return this;
    }
    public set trimQuote(trimQuote: string | undefined) {
        this['trim_quote'] = trimQuote;
    }
    public get trimQuote() {
        return this['trim_quote'];
    }
    public withOffline(offline: boolean): ImportGraphReq {
        this['offline'] = offline;
        return this;
    }
}