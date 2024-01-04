import { SmnTopics } from './SmnTopics';


export class ActionRule {
    private 'rule_name'?: string;
    private 'project_id'?: string;
    private 'user_name'?: string;
    public desc?: string;
    public type?: ActionRuleTypeEnum | string;
    private 'notification_template'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'time_zone'?: string;
    private 'smn_topics'?: Array<SmnTopics>;
    public constructor(ruleName?: string, projectId?: string, userName?: string, type?: string, notificationTemplate?: string, smnTopics?: Array<SmnTopics>) { 
        this['rule_name'] = ruleName;
        this['project_id'] = projectId;
        this['user_name'] = userName;
        this['type'] = type;
        this['notification_template'] = notificationTemplate;
        this['smn_topics'] = smnTopics;
    }
    public withRuleName(ruleName: string): ActionRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withProjectId(projectId: string): ActionRule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUserName(userName: string): ActionRule {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDesc(desc: string): ActionRule {
        this['desc'] = desc;
        return this;
    }
    public withType(type: ActionRuleTypeEnum | string): ActionRule {
        this['type'] = type;
        return this;
    }
    public withNotificationTemplate(notificationTemplate: string): ActionRule {
        this['notification_template'] = notificationTemplate;
        return this;
    }
    public set notificationTemplate(notificationTemplate: string  | undefined) {
        this['notification_template'] = notificationTemplate;
    }
    public get notificationTemplate(): string | undefined {
        return this['notification_template'];
    }
    public withCreateTime(createTime: number): ActionRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ActionRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTimeZone(timeZone: string): ActionRule {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withSmnTopics(smnTopics: Array<SmnTopics>): ActionRule {
        this['smn_topics'] = smnTopics;
        return this;
    }
    public set smnTopics(smnTopics: Array<SmnTopics>  | undefined) {
        this['smn_topics'] = smnTopics;
    }
    public get smnTopics(): Array<SmnTopics> | undefined {
        return this['smn_topics'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionRuleTypeEnum {
    E_1 = '1',
    E_2 = '2'
}
