

export class ExtendedKeyUsage {
    private 'server_auth'?: boolean;
    private 'client_auth'?: boolean;
    private 'code_signing'?: boolean;
    private 'email_protection'?: boolean;
    private 'time_stamping'?: boolean;
    private 'smart_card_logon'?: boolean;
    public constructor() { 
    }
    public withServerAuth(serverAuth: boolean): ExtendedKeyUsage {
        this['server_auth'] = serverAuth;
        return this;
    }
    public set serverAuth(serverAuth: boolean  | undefined) {
        this['server_auth'] = serverAuth;
    }
    public get serverAuth(): boolean | undefined {
        return this['server_auth'];
    }
    public withClientAuth(clientAuth: boolean): ExtendedKeyUsage {
        this['client_auth'] = clientAuth;
        return this;
    }
    public set clientAuth(clientAuth: boolean  | undefined) {
        this['client_auth'] = clientAuth;
    }
    public get clientAuth(): boolean | undefined {
        return this['client_auth'];
    }
    public withCodeSigning(codeSigning: boolean): ExtendedKeyUsage {
        this['code_signing'] = codeSigning;
        return this;
    }
    public set codeSigning(codeSigning: boolean  | undefined) {
        this['code_signing'] = codeSigning;
    }
    public get codeSigning(): boolean | undefined {
        return this['code_signing'];
    }
    public withEmailProtection(emailProtection: boolean): ExtendedKeyUsage {
        this['email_protection'] = emailProtection;
        return this;
    }
    public set emailProtection(emailProtection: boolean  | undefined) {
        this['email_protection'] = emailProtection;
    }
    public get emailProtection(): boolean | undefined {
        return this['email_protection'];
    }
    public withTimeStamping(timeStamping: boolean): ExtendedKeyUsage {
        this['time_stamping'] = timeStamping;
        return this;
    }
    public set timeStamping(timeStamping: boolean  | undefined) {
        this['time_stamping'] = timeStamping;
    }
    public get timeStamping(): boolean | undefined {
        return this['time_stamping'];
    }
    public withSmartCardLogon(smartCardLogon: boolean): ExtendedKeyUsage {
        this['smart_card_logon'] = smartCardLogon;
        return this;
    }
    public set smartCardLogon(smartCardLogon: boolean  | undefined) {
        this['smart_card_logon'] = smartCardLogon;
    }
    public get smartCardLogon(): boolean | undefined {
        return this['smart_card_logon'];
    }
}