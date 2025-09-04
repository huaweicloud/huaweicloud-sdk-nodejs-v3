import { ImportPointsRequestBody } from './ImportPointsRequestBody';


export class ImportPointsRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    private 'update_type'?: ImportPointsRequestUpdateTypeEnum | string;
    public body?: ImportPointsRequestBody;
    public constructor(edgeNodeId?: string, dsId?: string, updateType?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
        this['update_type'] = updateType;
    }
    public withEdgeNodeId(edgeNodeId: string): ImportPointsRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): ImportPointsRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withUpdateType(updateType: ImportPointsRequestUpdateTypeEnum | string): ImportPointsRequest {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: ImportPointsRequestUpdateTypeEnum | string  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): ImportPointsRequestUpdateTypeEnum | string | undefined {
        return this['update_type'];
    }
    public withBody(body: ImportPointsRequestBody): ImportPointsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportPointsRequestUpdateTypeEnum {
    PARTIAL = 'PARTIAL',
    COMPLETE = 'COMPLETE'
}
