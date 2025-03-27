

export class ChangeToPeriod {
    private 'charging_mode'?: string;
    private 'period_type'?: string;
    private 'period_num'?: number;
    private 'is_auto_renew'?: boolean;
    private 'is_auto_pay'?: boolean;
    private 'console_url'?: string;
    private 'vault_ids'?: Array<string>;
    public constructor(periodType?: string, periodNum?: number, vaultIds?: Array<string>) { 
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['vault_ids'] = vaultIds;
    }
    public withChargingMode(chargingMode: string): ChangeToPeriod {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: string): ChangeToPeriod {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): ChangeToPeriod {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): ChangeToPeriod {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: boolean): ChangeToPeriod {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withConsoleUrl(consoleUrl: string): ChangeToPeriod {
        this['console_url'] = consoleUrl;
        return this;
    }
    public set consoleUrl(consoleUrl: string  | undefined) {
        this['console_url'] = consoleUrl;
    }
    public get consoleUrl(): string | undefined {
        return this['console_url'];
    }
    public withVaultIds(vaultIds: Array<string>): ChangeToPeriod {
        this['vault_ids'] = vaultIds;
        return this;
    }
    public set vaultIds(vaultIds: Array<string>  | undefined) {
        this['vault_ids'] = vaultIds;
    }
    public get vaultIds(): Array<string> | undefined {
        return this['vault_ids'];
    }
}