import { SessionQueryInfoOption } from './SessionQueryInfoOption';


export class ListRealTimeSessionsRequestBody {
    private 'node_id'?: string;
    private 'component_id'?: string;
    private 'query_info'?: SessionQueryInfoOption;
    public constructor(nodeId?: string, componentId?: string) { 
        this['node_id'] = nodeId;
        this['component_id'] = componentId;
    }
    public withNodeId(nodeId: string): ListRealTimeSessionsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): ListRealTimeSessionsRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withQueryInfo(queryInfo: SessionQueryInfoOption): ListRealTimeSessionsRequestBody {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: SessionQueryInfoOption  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): SessionQueryInfoOption | undefined {
        return this['query_info'];
    }
}