

export class OutputPolicy {
    private 'output_policy'?: OutputPolicyOutputPolicyEnum | undefined;
    public constructor() { 
    }
    public withOutputPolicy(outputPolicy: OutputPolicyOutputPolicyEnum): OutputPolicy {
        this['output_policy'] = outputPolicy;
        return this;
    }
    public set outputPolicy(outputPolicy: OutputPolicyOutputPolicyEnum | undefined) {
        this['output_policy'] = outputPolicy;
    }
    public get outputPolicy() {
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
