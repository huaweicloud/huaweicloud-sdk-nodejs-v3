import { MemberGroupandStreamLogStreams } from './MemberGroupandStreamLogStreams';


export class MemberGroupandStreamResults {
    private 'log_group_id'?: string;
    private 'log_group_name'?: string;
    private 'log_streams'?: Array<MemberGroupandStreamLogStreams>;
    public constructor() { 
    }
    public withLogGroupId(logGroupId: string): MemberGroupandStreamResults {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogGroupName(logGroupName: string): MemberGroupandStreamResults {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreams(logStreams: Array<MemberGroupandStreamLogStreams>): MemberGroupandStreamResults {
        this['log_streams'] = logStreams;
        return this;
    }
    public set logStreams(logStreams: Array<MemberGroupandStreamLogStreams>  | undefined) {
        this['log_streams'] = logStreams;
    }
    public get logStreams(): Array<MemberGroupandStreamLogStreams> | undefined {
        return this['log_streams'];
    }
}