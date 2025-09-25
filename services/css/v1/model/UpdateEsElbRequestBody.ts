

export class UpdateEsElbRequestBody {
    public enable?: boolean;
    public agency?: string;
    private 'elb_id'?: string;
    public type?: string;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): UpdateEsElbRequestBody {
        this['enable'] = enable;
        return this;
    }
    public withAgency(agency: string): UpdateEsElbRequestBody {
        this['agency'] = agency;
        return this;
    }
    public withElbId(elbId: string): UpdateEsElbRequestBody {
        this['elb_id'] = elbId;
        return this;
    }
    public set elbId(elbId: string  | undefined) {
        this['elb_id'] = elbId;
    }
    public get elbId(): string | undefined {
        return this['elb_id'];
    }
    public withType(type: string): UpdateEsElbRequestBody {
        this['type'] = type;
        return this;
    }
}