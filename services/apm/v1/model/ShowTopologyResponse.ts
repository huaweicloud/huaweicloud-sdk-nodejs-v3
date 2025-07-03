import { TraceTopologyLine } from './TraceTopologyLine';
import { TraceTopologyNode } from './TraceTopologyNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopologyResponse extends SdkResponse {
    private 'global_trace_id'?: string;
    private 'line_list'?: Array<TraceTopologyLine>;
    private 'node_list'?: Array<TraceTopologyNode>;
    public constructor() { 
        super();
    }
    public withGlobalTraceId(globalTraceId: string): ShowTopologyResponse {
        this['global_trace_id'] = globalTraceId;
        return this;
    }
    public set globalTraceId(globalTraceId: string  | undefined) {
        this['global_trace_id'] = globalTraceId;
    }
    public get globalTraceId(): string | undefined {
        return this['global_trace_id'];
    }
    public withLineList(lineList: Array<TraceTopologyLine>): ShowTopologyResponse {
        this['line_list'] = lineList;
        return this;
    }
    public set lineList(lineList: Array<TraceTopologyLine>  | undefined) {
        this['line_list'] = lineList;
    }
    public get lineList(): Array<TraceTopologyLine> | undefined {
        return this['line_list'];
    }
    public withNodeList(nodeList: Array<TraceTopologyNode>): ShowTopologyResponse {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<TraceTopologyNode>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<TraceTopologyNode> | undefined {
        return this['node_list'];
    }
}