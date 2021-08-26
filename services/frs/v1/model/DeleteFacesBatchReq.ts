

export class DeleteFacesBatchReq {
    public filter: string;
    public constructor(filter?: any) { 
        this['filter'] = filter;
    }
    public withFilter(filter: string): DeleteFacesBatchReq {
        this['filter'] = filter;
        return this;
    }
}