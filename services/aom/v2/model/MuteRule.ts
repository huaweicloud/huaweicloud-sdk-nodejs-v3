import { Match } from './Match';
import { MuteConfig } from './MuteConfig';


export class MuteRule {
    private 'create_time'?: number;
    public desc?: string;
    public match?: Array<Array<Match>>;
    private 'mute_config'?: MuteConfig;
    public name?: string;
    public timezone?: string;
    private 'update_time'?: number;
    private 'user_id'?: string;
    public constructor(match?: Array<Array<Match>>, muteConfig?: MuteConfig, name?: string, timezone?: string) { 
        this['match'] = match;
        this['mute_config'] = muteConfig;
        this['name'] = name;
        this['timezone'] = timezone;
    }
    public withCreateTime(createTime: number): MuteRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDesc(desc: string): MuteRule {
        this['desc'] = desc;
        return this;
    }
    public withMatch(match: Array<Array<Match>>): MuteRule {
        this['match'] = match;
        return this;
    }
    public withMuteConfig(muteConfig: MuteConfig): MuteRule {
        this['mute_config'] = muteConfig;
        return this;
    }
    public set muteConfig(muteConfig: MuteConfig  | undefined) {
        this['mute_config'] = muteConfig;
    }
    public get muteConfig(): MuteConfig | undefined {
        return this['mute_config'];
    }
    public withName(name: string): MuteRule {
        this['name'] = name;
        return this;
    }
    public withTimezone(timezone: string): MuteRule {
        this['timezone'] = timezone;
        return this;
    }
    public withUpdateTime(updateTime: number): MuteRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUserId(userId: string): MuteRule {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}