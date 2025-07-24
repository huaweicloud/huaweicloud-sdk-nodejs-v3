import { CaseCompletionRateVo } from './CaseCompletionRateVo';
import { CasePassRateVo } from './CasePassRateVo';
import { DefectVo } from './DefectVo';
import { IssueCoverRateVo } from './IssueCoverRateVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectDataDashboardResponse extends SdkResponse {
    public defect?: DefectVo;
    private 'case_pass_rate'?: CasePassRateVo;
    private 'case_completion_rate'?: CaseCompletionRateVo;
    private 'project_type'?: string;
    private 'issue_cover_rate'?: IssueCoverRateVo;
    public constructor() { 
        super();
    }
    public withDefect(defect: DefectVo): ShowProjectDataDashboardResponse {
        this['defect'] = defect;
        return this;
    }
    public withCasePassRate(casePassRate: CasePassRateVo): ShowProjectDataDashboardResponse {
        this['case_pass_rate'] = casePassRate;
        return this;
    }
    public set casePassRate(casePassRate: CasePassRateVo  | undefined) {
        this['case_pass_rate'] = casePassRate;
    }
    public get casePassRate(): CasePassRateVo | undefined {
        return this['case_pass_rate'];
    }
    public withCaseCompletionRate(caseCompletionRate: CaseCompletionRateVo): ShowProjectDataDashboardResponse {
        this['case_completion_rate'] = caseCompletionRate;
        return this;
    }
    public set caseCompletionRate(caseCompletionRate: CaseCompletionRateVo  | undefined) {
        this['case_completion_rate'] = caseCompletionRate;
    }
    public get caseCompletionRate(): CaseCompletionRateVo | undefined {
        return this['case_completion_rate'];
    }
    public withProjectType(projectType: string): ShowProjectDataDashboardResponse {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withIssueCoverRate(issueCoverRate: IssueCoverRateVo): ShowProjectDataDashboardResponse {
        this['issue_cover_rate'] = issueCoverRate;
        return this;
    }
    public set issueCoverRate(issueCoverRate: IssueCoverRateVo  | undefined) {
        this['issue_cover_rate'] = issueCoverRate;
    }
    public get issueCoverRate(): IssueCoverRateVo | undefined {
        return this['issue_cover_rate'];
    }
}