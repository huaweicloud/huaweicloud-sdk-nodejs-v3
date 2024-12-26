import { LiveRoomInteractionRuleInfo } from './LiveRoomInteractionRuleInfo';


export class RuleCommand {
    private 'room_id'?: string;
    private 'job_id'?: string;
    private 'command_id'?: string;
    private 'interaction_rules'?: Array<LiveRoomInteractionRuleInfo>;
    public constructor() { 
    }
    public withRoomId(roomId: string): RuleCommand {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withJobId(jobId: string): RuleCommand {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCommandId(commandId: string): RuleCommand {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string  | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId(): string | undefined {
        return this['command_id'];
    }
    public withInteractionRules(interactionRules: Array<LiveRoomInteractionRuleInfo>): RuleCommand {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<LiveRoomInteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<LiveRoomInteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
}