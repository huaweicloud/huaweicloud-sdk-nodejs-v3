import { ExternalServiceCaseInfo } from './ExternalServiceCaseInfo';


export class CreateTestCaseRequestBody {
    public name?: string;
    private 'service_id'?: number;
    private 'rank_id'?: string;
    private 'testcase_number'?: string;
    private 'extend_info'?: ExternalServiceCaseInfo;
    public constructor(name?: string, serviceId?: number) { 
        this['name'] = name;
        this['service_id'] = serviceId;
    }
    public withName(name: string): CreateTestCaseRequestBody {
        this['name'] = name;
        return this;
    }
    public withServiceId(serviceId: number): CreateTestCaseRequestBody {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withRankId(rankId: string): CreateTestCaseRequestBody {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: string  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): string | undefined {
        return this['rank_id'];
    }
    public withTestcaseNumber(testcaseNumber: string): CreateTestCaseRequestBody {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
    public withExtendInfo(extendInfo: ExternalServiceCaseInfo): CreateTestCaseRequestBody {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: ExternalServiceCaseInfo  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): ExternalServiceCaseInfo | undefined {
        return this['extend_info'];
    }
}