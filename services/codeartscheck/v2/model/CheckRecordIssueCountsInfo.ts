

export class CheckRecordIssueCountsInfo {
    public critical?: number;
    public serious?: number;
    public normal?: number;
    public prompt?: number;
    public constructor() { 
    }
    public withCritical(critical: number): CheckRecordIssueCountsInfo {
        this['critical'] = critical;
        return this;
    }
    public withSerious(serious: number): CheckRecordIssueCountsInfo {
        this['serious'] = serious;
        return this;
    }
    public withNormal(normal: number): CheckRecordIssueCountsInfo {
        this['normal'] = normal;
        return this;
    }
    public withPrompt(prompt: number): CheckRecordIssueCountsInfo {
        this['prompt'] = prompt;
        return this;
    }
}