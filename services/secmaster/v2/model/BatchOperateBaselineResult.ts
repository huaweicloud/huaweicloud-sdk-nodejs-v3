

export class BatchOperateBaselineResult {
    private 'error_ids'?: Array<string>;
    private 'success_ids'?: Array<string>;
    public constructor(errorIds?: Array<string>, successIds?: Array<string>) { 
        this['error_ids'] = errorIds;
        this['success_ids'] = successIds;
    }
    public withErrorIds(errorIds: Array<string>): BatchOperateBaselineResult {
        this['error_ids'] = errorIds;
        return this;
    }
    public set errorIds(errorIds: Array<string>  | undefined) {
        this['error_ids'] = errorIds;
    }
    public get errorIds(): Array<string> | undefined {
        return this['error_ids'];
    }
    public withSuccessIds(successIds: Array<string>): BatchOperateBaselineResult {
        this['success_ids'] = successIds;
        return this;
    }
    public set successIds(successIds: Array<string>  | undefined) {
        this['success_ids'] = successIds;
    }
    public get successIds(): Array<string> | undefined {
        return this['success_ids'];
    }
}