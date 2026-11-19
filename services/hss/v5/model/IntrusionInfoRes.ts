

export class IntrusionInfoRes {
    private 'risky_account_info_list'?: Array<object>;
    private 'abnormal_login_info_list'?: Array<object>;
    private 'malicious_program_info_list'?: Array<object>;
    private 'webshell_info_list'?: Array<object>;
    private 'account_crack_info_list'?: Array<object>;
    private 'critical_file_change_info_list'?: Array<object>;
    public constructor() { 
    }
    public withRiskyAccountInfoList(riskyAccountInfoList: Array<object>): IntrusionInfoRes {
        this['risky_account_info_list'] = riskyAccountInfoList;
        return this;
    }
    public set riskyAccountInfoList(riskyAccountInfoList: Array<object>  | undefined) {
        this['risky_account_info_list'] = riskyAccountInfoList;
    }
    public get riskyAccountInfoList(): Array<object> | undefined {
        return this['risky_account_info_list'];
    }
    public withAbnormalLoginInfoList(abnormalLoginInfoList: Array<object>): IntrusionInfoRes {
        this['abnormal_login_info_list'] = abnormalLoginInfoList;
        return this;
    }
    public set abnormalLoginInfoList(abnormalLoginInfoList: Array<object>  | undefined) {
        this['abnormal_login_info_list'] = abnormalLoginInfoList;
    }
    public get abnormalLoginInfoList(): Array<object> | undefined {
        return this['abnormal_login_info_list'];
    }
    public withMaliciousProgramInfoList(maliciousProgramInfoList: Array<object>): IntrusionInfoRes {
        this['malicious_program_info_list'] = maliciousProgramInfoList;
        return this;
    }
    public set maliciousProgramInfoList(maliciousProgramInfoList: Array<object>  | undefined) {
        this['malicious_program_info_list'] = maliciousProgramInfoList;
    }
    public get maliciousProgramInfoList(): Array<object> | undefined {
        return this['malicious_program_info_list'];
    }
    public withWebshellInfoList(webshellInfoList: Array<object>): IntrusionInfoRes {
        this['webshell_info_list'] = webshellInfoList;
        return this;
    }
    public set webshellInfoList(webshellInfoList: Array<object>  | undefined) {
        this['webshell_info_list'] = webshellInfoList;
    }
    public get webshellInfoList(): Array<object> | undefined {
        return this['webshell_info_list'];
    }
    public withAccountCrackInfoList(accountCrackInfoList: Array<object>): IntrusionInfoRes {
        this['account_crack_info_list'] = accountCrackInfoList;
        return this;
    }
    public set accountCrackInfoList(accountCrackInfoList: Array<object>  | undefined) {
        this['account_crack_info_list'] = accountCrackInfoList;
    }
    public get accountCrackInfoList(): Array<object> | undefined {
        return this['account_crack_info_list'];
    }
    public withCriticalFileChangeInfoList(criticalFileChangeInfoList: Array<object>): IntrusionInfoRes {
        this['critical_file_change_info_list'] = criticalFileChangeInfoList;
        return this;
    }
    public set criticalFileChangeInfoList(criticalFileChangeInfoList: Array<object>  | undefined) {
        this['critical_file_change_info_list'] = criticalFileChangeInfoList;
    }
    public get criticalFileChangeInfoList(): Array<object> | undefined {
        return this['critical_file_change_info_list'];
    }
}