

export class JobResultInfo {
    private 'CRITICAL'?: number;
    private 'DELAYSTATUS_COUNT'?: number;
    private 'FATAL'?: number;
    private 'GENERAL'?: number;
    private 'INFO'?: number;
    private 'PROMPT'?: number;
    public codeLine?: number;
    public defectCount?: number;
    public dismissed?: number;
    public fileTotal?: number;
    public fixed?: number;
    public id?: string;
    public jobId?: string;
    public newUnsolvedDefectCount?: number;
    public nonSecurityDefectCount?: number;
    public reviewResult?: string;
    public securityDefectCount?: number;
    public solvedDefectCount?: number;
    public unsolvedDefectCount?: number;
    public constructor() { 
    }
    public withCritical(critical: number): JobResultInfo {
        this['CRITICAL'] = critical;
        return this;
    }
    public set critical(critical: number  | undefined) {
        this['CRITICAL'] = critical;
    }
    public get critical(): number | undefined {
        return this['CRITICAL'];
    }
    public withDelaystatusCount(delaystatusCount: number): JobResultInfo {
        this['DELAYSTATUS_COUNT'] = delaystatusCount;
        return this;
    }
    public set delaystatusCount(delaystatusCount: number  | undefined) {
        this['DELAYSTATUS_COUNT'] = delaystatusCount;
    }
    public get delaystatusCount(): number | undefined {
        return this['DELAYSTATUS_COUNT'];
    }
    public withFatal(fatal: number): JobResultInfo {
        this['FATAL'] = fatal;
        return this;
    }
    public set fatal(fatal: number  | undefined) {
        this['FATAL'] = fatal;
    }
    public get fatal(): number | undefined {
        return this['FATAL'];
    }
    public withGeneral(general: number): JobResultInfo {
        this['GENERAL'] = general;
        return this;
    }
    public set general(general: number  | undefined) {
        this['GENERAL'] = general;
    }
    public get general(): number | undefined {
        return this['GENERAL'];
    }
    public withInfo(info: number): JobResultInfo {
        this['INFO'] = info;
        return this;
    }
    public set info(info: number  | undefined) {
        this['INFO'] = info;
    }
    public get info(): number | undefined {
        return this['INFO'];
    }
    public withPrompt(prompt: number): JobResultInfo {
        this['PROMPT'] = prompt;
        return this;
    }
    public set prompt(prompt: number  | undefined) {
        this['PROMPT'] = prompt;
    }
    public get prompt(): number | undefined {
        return this['PROMPT'];
    }
    public withCodeLine(codeLine: number): JobResultInfo {
        this['codeLine'] = codeLine;
        return this;
    }
    public withDefectCount(defectCount: number): JobResultInfo {
        this['defectCount'] = defectCount;
        return this;
    }
    public withDismissed(dismissed: number): JobResultInfo {
        this['dismissed'] = dismissed;
        return this;
    }
    public withFileTotal(fileTotal: number): JobResultInfo {
        this['fileTotal'] = fileTotal;
        return this;
    }
    public withFixed(fixed: number): JobResultInfo {
        this['fixed'] = fixed;
        return this;
    }
    public withId(id: string): JobResultInfo {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): JobResultInfo {
        this['jobId'] = jobId;
        return this;
    }
    public withNewUnsolvedDefectCount(newUnsolvedDefectCount: number): JobResultInfo {
        this['newUnsolvedDefectCount'] = newUnsolvedDefectCount;
        return this;
    }
    public withNonSecurityDefectCount(nonSecurityDefectCount: number): JobResultInfo {
        this['nonSecurityDefectCount'] = nonSecurityDefectCount;
        return this;
    }
    public withReviewResult(reviewResult: string): JobResultInfo {
        this['reviewResult'] = reviewResult;
        return this;
    }
    public withSecurityDefectCount(securityDefectCount: number): JobResultInfo {
        this['securityDefectCount'] = securityDefectCount;
        return this;
    }
    public withSolvedDefectCount(solvedDefectCount: number): JobResultInfo {
        this['solvedDefectCount'] = solvedDefectCount;
        return this;
    }
    public withUnsolvedDefectCount(unsolvedDefectCount: number): JobResultInfo {
        this['unsolvedDefectCount'] = unsolvedDefectCount;
        return this;
    }
}