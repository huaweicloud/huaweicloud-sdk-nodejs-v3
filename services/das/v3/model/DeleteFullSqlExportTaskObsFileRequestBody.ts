

export class DeleteFullSqlExportTaskObsFileRequestBody {
    public id?: number;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): DeleteFullSqlExportTaskObsFileRequestBody {
        this['id'] = id;
        return this;
    }
}