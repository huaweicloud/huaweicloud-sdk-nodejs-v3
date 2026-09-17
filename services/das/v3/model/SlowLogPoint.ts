import { SlowLogTrendPoint } from './SlowLogTrendPoint';


export class SlowLogPoint {
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'trend_data'?: Array<SlowLogTrendPoint>;
    public constructor() { 
    }
    public withNodeId(nodeId: string): SlowLogPoint {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): SlowLogPoint {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withTrendData(trendData: Array<SlowLogTrendPoint>): SlowLogPoint {
        this['trend_data'] = trendData;
        return this;
    }
    public set trendData(trendData: Array<SlowLogTrendPoint>  | undefined) {
        this['trend_data'] = trendData;
    }
    public get trendData(): Array<SlowLogTrendPoint> | undefined {
        return this['trend_data'];
    }
}