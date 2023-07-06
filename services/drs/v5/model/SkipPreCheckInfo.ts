

export class SkipPreCheckInfo {
    private 'skipped_precheck_list': Array<string> | undefined;
    private 'skip_reason': string | undefined;
    public constructor(skippedPrecheckList?: any, skipReason?: any) { 
        this['skipped_precheck_list'] = skippedPrecheckList;
        this['skip_reason'] = skipReason;
    }
    public withSkippedPrecheckList(skippedPrecheckList: Array<string>): SkipPreCheckInfo {
        this['skipped_precheck_list'] = skippedPrecheckList;
        return this;
    }
    public set skippedPrecheckList(skippedPrecheckList: Array<string> | undefined) {
        this['skipped_precheck_list'] = skippedPrecheckList;
    }
    public get skippedPrecheckList() {
        return this['skipped_precheck_list'];
    }
    public withSkipReason(skipReason: string): SkipPreCheckInfo {
        this['skip_reason'] = skipReason;
        return this;
    }
    public set skipReason(skipReason: string | undefined) {
        this['skip_reason'] = skipReason;
    }
    public get skipReason() {
        return this['skip_reason'];
    }
}