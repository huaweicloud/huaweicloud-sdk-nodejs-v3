import { LtsLogType } from './LtsLogType';


export class DeleteLtsConfigRequestBodyLtsConfigs {
    private 'instance_id'?: string;
    private 'log_type'?: LtsLogType;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): DeleteLtsConfigRequestBodyLtsConfigs {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: LtsLogType): DeleteLtsConfigRequestBodyLtsConfigs {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: LtsLogType  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): LtsLogType | undefined {
        return this['log_type'];
    }
}