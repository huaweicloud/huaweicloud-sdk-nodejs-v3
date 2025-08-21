

export class ShowOutputInfoRequest {
    private 'data_display'?: ShowOutputInfoRequestDataDisplayEnum | string;
    private 'flow_id'?: string;
    private 'output_name'?: string;
    public constructor(flowId?: string, outputName?: string) { 
        this['flow_id'] = flowId;
        this['output_name'] = outputName;
    }
    public withDataDisplay(dataDisplay: ShowOutputInfoRequestDataDisplayEnum | string): ShowOutputInfoRequest {
        this['data_display'] = dataDisplay;
        return this;
    }
    public set dataDisplay(dataDisplay: ShowOutputInfoRequestDataDisplayEnum | string  | undefined) {
        this['data_display'] = dataDisplay;
    }
    public get dataDisplay(): ShowOutputInfoRequestDataDisplayEnum | string | undefined {
        return this['data_display'];
    }
    public withFlowId(flowId: string): ShowOutputInfoRequest {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withOutputName(outputName: string): ShowOutputInfoRequest {
        this['output_name'] = outputName;
        return this;
    }
    public set outputName(outputName: string  | undefined) {
        this['output_name'] = outputName;
    }
    public get outputName(): string | undefined {
        return this['output_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOutputInfoRequestDataDisplayEnum {
    TRUE = 'true'
}
