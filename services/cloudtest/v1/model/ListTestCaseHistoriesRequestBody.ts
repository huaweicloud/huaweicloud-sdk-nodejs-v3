

export class ListTestCaseHistoriesRequestBody {
    public offset?: number;
    public limit?: number;
    private 'version_id'?: string;
    public constructor(offset?: number, limit?: number, versionId?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['version_id'] = versionId;
    }
    public withOffset(offset: number): ListTestCaseHistoriesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTestCaseHistoriesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withVersionId(versionId: string): ListTestCaseHistoriesRequestBody {
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