

export class ExportStatusVO {
    public id?: string;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): ExportStatusVO {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): ExportStatusVO {
        this['status'] = status;
        return this;
    }
}