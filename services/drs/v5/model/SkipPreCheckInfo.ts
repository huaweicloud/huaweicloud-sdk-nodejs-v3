

export class SkipPreCheckInfo {
    private 'skipped_precheck_list'?: Array<string>;
    private 'skip_reason'?: string;
    public constructor(skippedPrecheckList?: Array<string>, skipReason?: string) { 
        this['skipped_precheck_list'] = skippedPrecheckList;
        this['skip_reason'] = skipReason;
    }
    public withSkippedPrecheckList(skippedPrecheckList: Array<string>): SkipPreCheckInfo {
        this['skipped_precheck_list'] = skippedPrecheckList;
        return this;
    }
    public set skippedPrecheckList(skippedPrecheckList: Array<string>  | undefined) {
        this['skipped_precheck_list'] = skippedPrecheckList;
    }
    public get skippedPrecheckList(): Array<string> | undefined {
        return this['skipped_precheck_list'];
    }
    public withSkipReason(skipReason: string): SkipPreCheckInfo {
        this['skip_reason'] = skipReason;
        return this;
    }
    public set skipReason(skipReason: string  | undefined) {
        this['skip_reason'] = skipReason;
    }
    public get skipReason(): string | undefined {
        return this['skip_reason'];
    }
}