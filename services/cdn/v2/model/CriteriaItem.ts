

export class CriteriaItem {
    private 'match_target_type'?: string;
    private 'match_target_name'?: string;
    private 'match_type'?: string;
    private 'match_pattern'?: Array<string>;
    public negate?: boolean;
    private 'case_sensitive'?: boolean;
    public logic?: string;
    public criteria?: Array<CriteriaItem>;
    public constructor() { 
    }
    public withMatchTargetType(matchTargetType: string): CriteriaItem {
        this['match_target_type'] = matchTargetType;
        return this;
    }
    public set matchTargetType(matchTargetType: string  | undefined) {
        this['match_target_type'] = matchTargetType;
    }
    public get matchTargetType(): string | undefined {
        return this['match_target_type'];
    }
    public withMatchTargetName(matchTargetName: string): CriteriaItem {
        this['match_target_name'] = matchTargetName;
        return this;
    }
    public set matchTargetName(matchTargetName: string  | undefined) {
        this['match_target_name'] = matchTargetName;
    }
    public get matchTargetName(): string | undefined {
        return this['match_target_name'];
    }
    public withMatchType(matchType: string): CriteriaItem {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withMatchPattern(matchPattern: Array<string>): CriteriaItem {
        this['match_pattern'] = matchPattern;
        return this;
    }
    public set matchPattern(matchPattern: Array<string>  | undefined) {
        this['match_pattern'] = matchPattern;
    }
    public get matchPattern(): Array<string> | undefined {
        return this['match_pattern'];
    }
    public withNegate(negate: boolean): CriteriaItem {
        this['negate'] = negate;
        return this;
    }
    public withCaseSensitive(caseSensitive: boolean): CriteriaItem {
        this['case_sensitive'] = caseSensitive;
        return this;
    }
    public set caseSensitive(caseSensitive: boolean  | undefined) {
        this['case_sensitive'] = caseSensitive;
    }
    public get caseSensitive(): boolean | undefined {
        return this['case_sensitive'];
    }
    public withLogic(logic: string): CriteriaItem {
        this['logic'] = logic;
        return this;
    }
    public withCriteria(criteria: Array<CriteriaItem>): CriteriaItem {
        this['criteria'] = criteria;
        return this;
    }
}