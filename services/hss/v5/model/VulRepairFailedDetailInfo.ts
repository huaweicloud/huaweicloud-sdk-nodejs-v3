

export class VulRepairFailedDetailInfo {
    public software?: string;
    public reason?: string;
    private 'reason_describtion'?: string;
    private 'reason_solution'?: string;
    public constructor() { 
    }
    public withSoftware(software: string): VulRepairFailedDetailInfo {
        this['software'] = software;
        return this;
    }
    public withReason(reason: string): VulRepairFailedDetailInfo {
        this['reason'] = reason;
        return this;
    }
    public withReasonDescribtion(reasonDescribtion: string): VulRepairFailedDetailInfo {
        this['reason_describtion'] = reasonDescribtion;
        return this;
    }
    public set reasonDescribtion(reasonDescribtion: string  | undefined) {
        this['reason_describtion'] = reasonDescribtion;
    }
    public get reasonDescribtion(): string | undefined {
        return this['reason_describtion'];
    }
    public withReasonSolution(reasonSolution: string): VulRepairFailedDetailInfo {
        this['reason_solution'] = reasonSolution;
        return this;
    }
    public set reasonSolution(reasonSolution: string  | undefined) {
        this['reason_solution'] = reasonSolution;
    }
    public get reasonSolution(): string | undefined {
        return this['reason_solution'];
    }
}