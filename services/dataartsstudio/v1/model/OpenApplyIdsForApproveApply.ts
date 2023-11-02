

export class OpenApplyIdsForApproveApply {
    private 'apply_result'?: boolean;
    private 'apply_ids'?: Array<string>;
    public constructor() { 
    }
    public withApplyResult(applyResult: boolean): OpenApplyIdsForApproveApply {
        this['apply_result'] = applyResult;
        return this;
    }
    public set applyResult(applyResult: boolean  | undefined) {
        this['apply_result'] = applyResult;
    }
    public get applyResult(): boolean | undefined {
        return this['apply_result'];
    }
    public withApplyIds(applyIds: Array<string>): OpenApplyIdsForApproveApply {
        this['apply_ids'] = applyIds;
        return this;
    }
    public set applyIds(applyIds: Array<string>  | undefined) {
        this['apply_ids'] = applyIds;
    }
    public get applyIds(): Array<string> | undefined {
        return this['apply_ids'];
    }
}