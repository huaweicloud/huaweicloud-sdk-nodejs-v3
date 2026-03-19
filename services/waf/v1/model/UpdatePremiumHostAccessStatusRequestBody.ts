

export class UpdatePremiumHostAccessStatusRequestBody {
    private 'access_status'?: number;
    public constructor(accessStatus?: number) { 
        this['access_status'] = accessStatus;
    }
    public withAccessStatus(accessStatus: number): UpdatePremiumHostAccessStatusRequestBody {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
}