

export class SecurityConfigItemInfo {
    private 'check_name'?: string;
    private 'check_item_rule'?: string;
    private 'scan_result'?: string;
    public constructor() { 
    }
    public withCheckName(checkName: string): SecurityConfigItemInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckItemRule(checkItemRule: string): SecurityConfigItemInfo {
        this['check_item_rule'] = checkItemRule;
        return this;
    }
    public set checkItemRule(checkItemRule: string  | undefined) {
        this['check_item_rule'] = checkItemRule;
    }
    public get checkItemRule(): string | undefined {
        return this['check_item_rule'];
    }
    public withScanResult(scanResult: string): SecurityConfigItemInfo {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
}