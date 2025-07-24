

export class ListTestCasesRequestBody {
    public offset?: number;
    public limit?: number;
    private 'execution_type_id'?: number;
    private 'version_id'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOffset(offset: number): ListTestCasesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTestCasesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withExecutionTypeId(executionTypeId: number): ListTestCasesRequestBody {
        this['execution_type_id'] = executionTypeId;
        return this;
    }
    public set executionTypeId(executionTypeId: number  | undefined) {
        this['execution_type_id'] = executionTypeId;
    }
    public get executionTypeId(): number | undefined {
        return this['execution_type_id'];
    }
    public withVersionId(versionId: string): ListTestCasesRequestBody {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}