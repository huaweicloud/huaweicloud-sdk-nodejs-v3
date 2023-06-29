import { ShowJobRespJobDetailSchemaPath } from './ShowJobRespJobDetailSchemaPath';


export class ShowJobRespJobDetail {
    private 'schema_path'?: Array<ShowJobRespJobDetailSchemaPath> | undefined;
    private 'edgeset_path'?: Array<ShowJobRespJobDetailSchemaPath> | undefined;
    private 'vertexset_path'?: Array<ShowJobRespJobDetailSchemaPath> | undefined;
    public constructor() { 
    }
    public withSchemaPath(schemaPath: Array<ShowJobRespJobDetailSchemaPath>): ShowJobRespJobDetail {
        this['schema_path'] = schemaPath;
        return this;
    }
    public set schemaPath(schemaPath: Array<ShowJobRespJobDetailSchemaPath> | undefined) {
        this['schema_path'] = schemaPath;
    }
    public get schemaPath() {
        return this['schema_path'];
    }
    public withEdgesetPath(edgesetPath: Array<ShowJobRespJobDetailSchemaPath>): ShowJobRespJobDetail {
        this['edgeset_path'] = edgesetPath;
        return this;
    }
    public set edgesetPath(edgesetPath: Array<ShowJobRespJobDetailSchemaPath> | undefined) {
        this['edgeset_path'] = edgesetPath;
    }
    public get edgesetPath() {
        return this['edgeset_path'];
    }
    public withVertexsetPath(vertexsetPath: Array<ShowJobRespJobDetailSchemaPath>): ShowJobRespJobDetail {
        this['vertexset_path'] = vertexsetPath;
        return this;
    }
    public set vertexsetPath(vertexsetPath: Array<ShowJobRespJobDetailSchemaPath> | undefined) {
        this['vertexset_path'] = vertexsetPath;
    }
    public get vertexsetPath() {
        return this['vertexset_path'];
    }
}