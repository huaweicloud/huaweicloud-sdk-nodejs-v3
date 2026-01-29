import { LtsResponseVoStreams } from './LtsResponseVoStreams';


export class LtsResponseVoLtsInfos {
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    public streams?: Array<LtsResponseVoStreams>;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): LtsResponseVoLtsInfos {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): LtsResponseVoLtsInfos {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withStreams(streams: Array<LtsResponseVoStreams>): LtsResponseVoLtsInfos {
        this['streams'] = streams;
        return this;
    }
}