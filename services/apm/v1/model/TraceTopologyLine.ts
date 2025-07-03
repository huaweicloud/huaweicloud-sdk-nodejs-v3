import { TraceTopologyLineInfo } from './TraceTopologyLineInfo';


export class TraceTopologyLine {
    private 'start_node_id'?: number;
    private 'end_node_id'?: number;
    private 'span_id'?: string;
    private 'client_info'?: TraceTopologyLineInfo;
    private 'server_info'?: TraceTopologyLineInfo;
    public id?: string;
    public hint?: string;
    public constructor() { 
    }
    public withStartNodeId(startNodeId: number): TraceTopologyLine {
        this['start_node_id'] = startNodeId;
        return this;
    }
    public set startNodeId(startNodeId: number  | undefined) {
        this['start_node_id'] = startNodeId;
    }
    public get startNodeId(): number | undefined {
        return this['start_node_id'];
    }
    public withEndNodeId(endNodeId: number): TraceTopologyLine {
        this['end_node_id'] = endNodeId;
        return this;
    }
    public set endNodeId(endNodeId: number  | undefined) {
        this['end_node_id'] = endNodeId;
    }
    public get endNodeId(): number | undefined {
        return this['end_node_id'];
    }
    public withSpanId(spanId: string): TraceTopologyLine {
        this['span_id'] = spanId;
        return this;
    }
    public set spanId(spanId: string  | undefined) {
        this['span_id'] = spanId;
    }
    public get spanId(): string | undefined {
        return this['span_id'];
    }
    public withClientInfo(clientInfo: TraceTopologyLineInfo): TraceTopologyLine {
        this['client_info'] = clientInfo;
        return this;
    }
    public set clientInfo(clientInfo: TraceTopologyLineInfo  | undefined) {
        this['client_info'] = clientInfo;
    }
    public get clientInfo(): TraceTopologyLineInfo | undefined {
        return this['client_info'];
    }
    public withServerInfo(serverInfo: TraceTopologyLineInfo): TraceTopologyLine {
        this['server_info'] = serverInfo;
        return this;
    }
    public set serverInfo(serverInfo: TraceTopologyLineInfo  | undefined) {
        this['server_info'] = serverInfo;
    }
    public get serverInfo(): TraceTopologyLineInfo | undefined {
        return this['server_info'];
    }
    public withId(id: string): TraceTopologyLine {
        this['id'] = id;
        return this;
    }
    public withHint(hint: string): TraceTopologyLine {
        this['hint'] = hint;
        return this;
    }
}