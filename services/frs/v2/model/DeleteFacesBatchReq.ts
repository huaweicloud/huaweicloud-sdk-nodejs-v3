

export class DeleteFacesBatchReq {
    public filter?: string;
    public constructor(filter?: string) { 
        this['filter'] = filter;
    }
    public withFilter(filter: string): DeleteFacesBatchReq {
        this['filter'] = filter;
        return this;
    }
}