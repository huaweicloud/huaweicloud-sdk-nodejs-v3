

export class Agency {
    private 'agency_name'?: string;
    private 'agency_id'?: string;
    private 'error_msg'?: string;
    public constructor(agencyName?: string) { 
        this['agency_name'] = agencyName;
    }
    public withAgencyName(agencyName: string): Agency {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withAgencyId(agencyId: string): Agency {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withErrorMsg(errorMsg: string): Agency {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}