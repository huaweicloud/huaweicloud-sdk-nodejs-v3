

export class QueryImageByTagsResourceDetail {
    public status: string;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): QueryImageByTagsResourceDetail {
        this['status'] = status;
        return this;
    }
}