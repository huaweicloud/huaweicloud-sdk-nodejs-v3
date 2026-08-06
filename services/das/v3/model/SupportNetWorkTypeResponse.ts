

export class SupportNetWorkTypeResponse {
    private 'net_work'?: string;
    private 'engine_types'?: Array<string>;
    public constructor() { 
    }
    public withNetWork(netWork: string): SupportNetWorkTypeResponse {
        this['net_work'] = netWork;
        return this;
    }
    public set netWork(netWork: string  | undefined) {
        this['net_work'] = netWork;
    }
    public get netWork(): string | undefined {
        return this['net_work'];
    }
    public withEngineTypes(engineTypes: Array<string>): SupportNetWorkTypeResponse {
        this['engine_types'] = engineTypes;
        return this;
    }
    public set engineTypes(engineTypes: Array<string>  | undefined) {
        this['engine_types'] = engineTypes;
    }
    public get engineTypes(): Array<string> | undefined {
        return this['engine_types'];
    }
}