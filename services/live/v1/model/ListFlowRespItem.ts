

export class ListFlowRespItem {
    public name?: string;
    public region?: string;
    private 'flow_id'?: string;
    public status?: ListFlowRespItemStatusEnum | string;
    public description?: string;
    public protocol?: ListFlowRespItemProtocolEnum | string;
    public constructor(name?: string, region?: string, flowId?: string, status?: string, protocol?: string) { 
        this['name'] = name;
        this['region'] = region;
        this['flow_id'] = flowId;
        this['status'] = status;
        this['protocol'] = protocol;
    }
    public withName(name: string): ListFlowRespItem {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): ListFlowRespItem {
        this['region'] = region;
        return this;
    }
    public withFlowId(flowId: string): ListFlowRespItem {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withStatus(status: ListFlowRespItemStatusEnum | string): ListFlowRespItem {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ListFlowRespItem {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: ListFlowRespItemProtocolEnum | string): ListFlowRespItem {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlowRespItemStatusEnum {
    ACTIVE = 'ACTIVE',
    STANDBY = 'STANDBY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlowRespItemProtocolEnum {
    SRT_CALLER = 'srt-caller',
    SRT_LISTENER = 'srt-listener'
}
