

export class OperateSqlFilterControlReq {
    private 'switch_status'?: string;
    public constructor(switchStatus?: string) { 
        this['switch_status'] = switchStatus;
    }
    public withSwitchStatus(switchStatus: string): OperateSqlFilterControlReq {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
}