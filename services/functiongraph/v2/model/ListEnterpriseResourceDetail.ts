

export class ListEnterpriseResourceDetail {
    public detailId?: string;
    public constructor() { 
    }
    public withDetailId(detailId: string): ListEnterpriseResourceDetail {
        this['detailId'] = detailId;
        return this;
    }
}