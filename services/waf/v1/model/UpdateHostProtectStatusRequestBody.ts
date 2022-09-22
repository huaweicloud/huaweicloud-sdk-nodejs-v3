

export class UpdateHostProtectStatusRequestBody {
    private 'protect_status': number | undefined;
    public constructor(protectStatus?: any) { 
        this['protect_status'] = protectStatus;
    }
    public withProtectStatus(protectStatus: number): UpdateHostProtectStatusRequestBody {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
}