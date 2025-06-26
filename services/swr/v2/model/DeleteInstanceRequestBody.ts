

export class DeleteInstanceRequestBody {
    private 'delete_obs'?: boolean;
    private 'delete_dns'?: boolean;
    public constructor() { 
    }
    public withDeleteObs(deleteObs: boolean): DeleteInstanceRequestBody {
        this['delete_obs'] = deleteObs;
        return this;
    }
    public set deleteObs(deleteObs: boolean  | undefined) {
        this['delete_obs'] = deleteObs;
    }
    public get deleteObs(): boolean | undefined {
        return this['delete_obs'];
    }
    public withDeleteDns(deleteDns: boolean): DeleteInstanceRequestBody {
        this['delete_dns'] = deleteDns;
        return this;
    }
    public set deleteDns(deleteDns: boolean  | undefined) {
        this['delete_dns'] = deleteDns;
    }
    public get deleteDns(): boolean | undefined {
        return this['delete_dns'];
    }
}