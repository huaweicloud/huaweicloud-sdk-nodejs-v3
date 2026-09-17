

export class PutGlobalPrivacyNewRequest {
    private 'agree_status'?: number;
    public constructor(agreeStatus?: number) { 
        this['agree_status'] = agreeStatus;
    }
    public withAgreeStatus(agreeStatus: number): PutGlobalPrivacyNewRequest {
        this['agree_status'] = agreeStatus;
        return this;
    }
    public set agreeStatus(agreeStatus: number  | undefined) {
        this['agree_status'] = agreeStatus;
    }
    public get agreeStatus(): number | undefined {
        return this['agree_status'];
    }
}