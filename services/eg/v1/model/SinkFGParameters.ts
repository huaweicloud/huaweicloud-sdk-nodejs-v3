

export class SinkFGParameters {
    private 'invoke_type'?: SinkFGParametersInvokeTypeEnum | string;
    public urn?: string;
    public agency?: string;
    public constructor() { 
    }
    public withInvokeType(invokeType: SinkFGParametersInvokeTypeEnum | string): SinkFGParameters {
        this['invoke_type'] = invokeType;
        return this;
    }
    public set invokeType(invokeType: SinkFGParametersInvokeTypeEnum | string  | undefined) {
        this['invoke_type'] = invokeType;
    }
    public get invokeType(): SinkFGParametersInvokeTypeEnum | string | undefined {
        return this['invoke_type'];
    }
    public withUrn(urn: string): SinkFGParameters {
        this['urn'] = urn;
        return this;
    }
    public withAgency(agency: string): SinkFGParameters {
        this['agency'] = agency;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SinkFGParametersInvokeTypeEnum {
    SYNCASYNC = 'SYNC，ASYNC'
}
