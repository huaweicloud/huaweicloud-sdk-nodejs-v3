

export class ListDDoSAttackEventRequestBody {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public ip?: string;
    private 'attack_flow_low'?: string;
    private 'attack_flow_up'?: string;
    private 'attack_status'?: string;
    public constructor(startTime?: string, endTime?: string, offset?: number, limit?: number, ip?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['offset'] = offset;
        this['limit'] = limit;
        this['ip'] = ip;
    }
    public withStartTime(startTime: string): ListDDoSAttackEventRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDDoSAttackEventRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListDDoSAttackEventRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDDoSAttackEventRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withIp(ip: string): ListDDoSAttackEventRequestBody {
        this['ip'] = ip;
        return this;
    }
    public withAttackFlowLow(attackFlowLow: string): ListDDoSAttackEventRequestBody {
        this['attack_flow_low'] = attackFlowLow;
        return this;
    }
    public set attackFlowLow(attackFlowLow: string  | undefined) {
        this['attack_flow_low'] = attackFlowLow;
    }
    public get attackFlowLow(): string | undefined {
        return this['attack_flow_low'];
    }
    public withAttackFlowUp(attackFlowUp: string): ListDDoSAttackEventRequestBody {
        this['attack_flow_up'] = attackFlowUp;
        return this;
    }
    public set attackFlowUp(attackFlowUp: string  | undefined) {
        this['attack_flow_up'] = attackFlowUp;
    }
    public get attackFlowUp(): string | undefined {
        return this['attack_flow_up'];
    }
    public withAttackStatus(attackStatus: string): ListDDoSAttackEventRequestBody {
        this['attack_status'] = attackStatus;
        return this;
    }
    public set attackStatus(attackStatus: string  | undefined) {
        this['attack_status'] = attackStatus;
    }
    public get attackStatus(): string | undefined {
        return this['attack_status'];
    }
}