

export class SmartChatJobsReq {
    private 'extend_param'?: string;
    public constructor() { 
    }
    public withExtendParam(extendParam: string): SmartChatJobsReq {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: string  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): string | undefined {
        return this['extend_param'];
    }
}