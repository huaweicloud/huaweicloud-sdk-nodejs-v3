

export class ShowImportStatusId {
    public id?: string;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): ShowImportStatusId {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): ShowImportStatusId {
        this['status'] = status;
        return this;
    }
}