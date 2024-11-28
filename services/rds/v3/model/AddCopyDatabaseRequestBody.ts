

export class AddCopyDatabaseRequestBody {
    private 'procedure_name'?: string;
    public params?: object;
    public constructor() { 
    }
    public withProcedureName(procedureName: string): AddCopyDatabaseRequestBody {
        this['procedure_name'] = procedureName;
        return this;
    }
    public set procedureName(procedureName: string  | undefined) {
        this['procedure_name'] = procedureName;
    }
    public get procedureName(): string | undefined {
        return this['procedure_name'];
    }
    public withParams(params: object): AddCopyDatabaseRequestBody {
        this['params'] = params;
        return this;
    }
}