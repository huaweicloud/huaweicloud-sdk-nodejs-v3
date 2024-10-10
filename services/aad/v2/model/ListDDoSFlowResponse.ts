import { FlowBps } from './FlowBps';
import { FlowPps } from './FlowPps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDDoSFlowResponse extends SdkResponse {
    private 'flow_bps'?: Array<FlowBps>;
    private 'flow_pps'?: Array<FlowPps>;
    public constructor() { 
        super();
    }
    public withFlowBps(flowBps: Array<FlowBps>): ListDDoSFlowResponse {
        this['flow_bps'] = flowBps;
        return this;
    }
    public set flowBps(flowBps: Array<FlowBps>  | undefined) {
        this['flow_bps'] = flowBps;
    }
    public get flowBps(): Array<FlowBps> | undefined {
        return this['flow_bps'];
    }
    public withFlowPps(flowPps: Array<FlowPps>): ListDDoSFlowResponse {
        this['flow_pps'] = flowPps;
        return this;
    }
    public set flowPps(flowPps: Array<FlowPps>  | undefined) {
        this['flow_pps'] = flowPps;
    }
    public get flowPps(): Array<FlowPps> | undefined {
        return this['flow_pps'];
    }
}