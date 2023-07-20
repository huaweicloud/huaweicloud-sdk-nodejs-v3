import { ShowJobRespJobDetailSchemaPath } from './ShowJobRespJobDetailSchemaPath';


export class ShowJobRespJobDetail {
    private 'schema_path'?: Array<ShowJobRespJobDetailSchemaPath>;
    private 'edgeset_path'?: Array<ShowJobRespJobDetailSchemaPath>;
    private 'vertexset_path'?: Array<ShowJobRespJobDetailSchemaPath>;
    public constructor() { 
    }
    public withSchemaPath(schemaPath: Array<ShowJobRespJobDetailSchemaPath>): ShowJobRespJobDetail {
        this['schema_path'] = schemaPath;
        return this;
    }
    public set schemaPath(schemaPath: Array<ShowJobRespJobDetailSchemaPath>  | undefined) {
        this['schema_path'] = schemaPath;
    }
    public get schemaPath(): Array<ShowJobRespJobDetailSchemaPath> | undefined {
        return this['schema_path'];
    }
    public withEdgesetPath(edgesetPath: Array<ShowJobRespJobDetailSchemaPath>): ShowJobRespJobDetail {
        this['edgeset_path'] = edgesetPath;
        return this;
    }
    public set edgesetPath(edgesetPath: Array<ShowJobRespJobDetailSchemaPath>  | undefined) {
        this['edgeset_path'] = edgesetPath;
    }
    public get edgesetPath(): Array<ShowJobRespJobDetailSchemaPath> | undefined {
        return this['edgeset_path'];
    }
    public withVertexsetPath(vertexsetPath: Array<ShowJobRespJobDetailSchemaPath>): ShowJobRespJobDetail {
        this['vertexset_path'] = vertexsetPath;
        return this;
    }
    public set vertexsetPath(vertexsetPath: Array<ShowJobRespJobDetailSchemaPath>  | undefined) {
        this['vertexset_path'] = vertexsetPath;
    }
    public get vertexsetPath(): Array<ShowJobRespJobDetailSchemaPath> | undefined {
        return this['vertexset_path'];
    }
}