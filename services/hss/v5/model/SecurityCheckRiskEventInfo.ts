

export class SecurityCheckRiskEventInfo {
    public severity?: string;
    private 'event_name'?: string;
    private 'event_class_id'?: string;
    private 'attack_flag'?: string;
    private 'attack_time'?: number;
    public status?: string;
    public constructor() { 
    }
    public withSeverity(severity: string): SecurityCheckRiskEventInfo {
        this['severity'] = severity;
        return this;
    }
    public withEventName(eventName: string): SecurityCheckRiskEventInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventClassId(eventClassId: string): SecurityCheckRiskEventInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withAttackFlag(attackFlag: string): SecurityCheckRiskEventInfo {
        this['attack_flag'] = attackFlag;
        return this;
    }
    public set attackFlag(attackFlag: string  | undefined) {
        this['attack_flag'] = attackFlag;
    }
    public get attackFlag(): string | undefined {
        return this['attack_flag'];
    }
    public withAttackTime(attackTime: number): SecurityCheckRiskEventInfo {
        this['attack_time'] = attackTime;
        return this;
    }
    public set attackTime(attackTime: number  | undefined) {
        this['attack_time'] = attackTime;
    }
    public get attackTime(): number | undefined {
        return this['attack_time'];
    }
    public withStatus(status: string): SecurityCheckRiskEventInfo {
        this['status'] = status;
        return this;
    }
}