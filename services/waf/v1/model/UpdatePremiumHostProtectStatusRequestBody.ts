

export class UpdatePremiumHostProtectStatusRequestBody {
    private 'protect_status'?: number;
    public constructor(protectStatus?: number) { 
        this['protect_status'] = protectStatus;
    }
    public withProtectStatus(protectStatus: number): UpdatePremiumHostProtectStatusRequestBody {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
}