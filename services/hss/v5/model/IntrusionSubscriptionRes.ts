

export class IntrusionSubscriptionRes {
    private 'risky_account_status'?: boolean;
    private 'abnormal_login_status'?: boolean;
    private 'malicious_program_status'?: boolean;
    private 'webshell_status'?: boolean;
    private 'account_crack_status'?: boolean;
    private 'critical_file_change_status'?: boolean;
    public constructor() { 
    }
    public withRiskyAccountStatus(riskyAccountStatus: boolean): IntrusionSubscriptionRes {
        this['risky_account_status'] = riskyAccountStatus;
        return this;
    }
    public set riskyAccountStatus(riskyAccountStatus: boolean  | undefined) {
        this['risky_account_status'] = riskyAccountStatus;
    }
    public get riskyAccountStatus(): boolean | undefined {
        return this['risky_account_status'];
    }
    public withAbnormalLoginStatus(abnormalLoginStatus: boolean): IntrusionSubscriptionRes {
        this['abnormal_login_status'] = abnormalLoginStatus;
        return this;
    }
    public set abnormalLoginStatus(abnormalLoginStatus: boolean  | undefined) {
        this['abnormal_login_status'] = abnormalLoginStatus;
    }
    public get abnormalLoginStatus(): boolean | undefined {
        return this['abnormal_login_status'];
    }
    public withMaliciousProgramStatus(maliciousProgramStatus: boolean): IntrusionSubscriptionRes {
        this['malicious_program_status'] = maliciousProgramStatus;
        return this;
    }
    public set maliciousProgramStatus(maliciousProgramStatus: boolean  | undefined) {
        this['malicious_program_status'] = maliciousProgramStatus;
    }
    public get maliciousProgramStatus(): boolean | undefined {
        return this['malicious_program_status'];
    }
    public withWebshellStatus(webshellStatus: boolean): IntrusionSubscriptionRes {
        this['webshell_status'] = webshellStatus;
        return this;
    }
    public set webshellStatus(webshellStatus: boolean  | undefined) {
        this['webshell_status'] = webshellStatus;
    }
    public get webshellStatus(): boolean | undefined {
        return this['webshell_status'];
    }
    public withAccountCrackStatus(accountCrackStatus: boolean): IntrusionSubscriptionRes {
        this['account_crack_status'] = accountCrackStatus;
        return this;
    }
    public set accountCrackStatus(accountCrackStatus: boolean  | undefined) {
        this['account_crack_status'] = accountCrackStatus;
    }
    public get accountCrackStatus(): boolean | undefined {
        return this['account_crack_status'];
    }
    public withCriticalFileChangeStatus(criticalFileChangeStatus: boolean): IntrusionSubscriptionRes {
        this['critical_file_change_status'] = criticalFileChangeStatus;
        return this;
    }
    public set criticalFileChangeStatus(criticalFileChangeStatus: boolean  | undefined) {
        this['critical_file_change_status'] = criticalFileChangeStatus;
    }
    public get criticalFileChangeStatus(): boolean | undefined {
        return this['critical_file_change_status'];
    }
}