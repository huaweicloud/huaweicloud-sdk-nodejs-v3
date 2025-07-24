import { NameAndValueVo } from './NameAndValueVo';


export class CaseAutomationDetailsVo {
    private 'case_automation_rate'?: string;
    private 'service_type_number_list'?: Array<NameAndValueVo>;
    public constructor() { 
    }
    public withCaseAutomationRate(caseAutomationRate: string): CaseAutomationDetailsVo {
        this['case_automation_rate'] = caseAutomationRate;
        return this;
    }
    public set caseAutomationRate(caseAutomationRate: string  | undefined) {
        this['case_automation_rate'] = caseAutomationRate;
    }
    public get caseAutomationRate(): string | undefined {
        return this['case_automation_rate'];
    }
    public withServiceTypeNumberList(serviceTypeNumberList: Array<NameAndValueVo>): CaseAutomationDetailsVo {
        this['service_type_number_list'] = serviceTypeNumberList;
        return this;
    }
    public set serviceTypeNumberList(serviceTypeNumberList: Array<NameAndValueVo>  | undefined) {
        this['service_type_number_list'] = serviceTypeNumberList;
    }
    public get serviceTypeNumberList(): Array<NameAndValueVo> | undefined {
        return this['service_type_number_list'];
    }
}