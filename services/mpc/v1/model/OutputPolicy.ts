

export class OutputPolicy {
    private 'output_policy'?: OutputPolicyOutputPolicyEnum | string;
    public constructor() { 
    }
    public withOutputPolicy(outputPolicy: OutputPolicyOutputPolicyEnum | string): OutputPolicy {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: OutputPolicyOutputPolicyEnum | string  | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy(): OutputPolicyOutputPolicyEnum | string | undefined {
        return this['output_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OutputPolicyOutputPolicyEnum {
    TRANSCODE = 'transcode',
    DISCARD = 'discard',
    COPY = 'copy'
}
