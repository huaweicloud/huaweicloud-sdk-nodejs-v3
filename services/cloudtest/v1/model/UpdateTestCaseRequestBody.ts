import { ExternalServiceBizCase } from './ExternalServiceBizCase';


export class UpdateTestCaseRequestBody {
    public name?: string;
    private 'service_id'?: number;
    private 'rank_id'?: string;
    private 'testcase_number'?: string;
    private 'extend_info'?: ExternalServiceBizCase;
    public constructor(name?: string, serviceId?: number) { 
        this['name'] = name;
        this['service_id'] = serviceId;
    }
    public withName(name: string): UpdateTestCaseRequestBody {
        this['name'] = name;
        return this;
    }
    public withServiceId(serviceId: number): UpdateTestCaseRequestBody {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withRankId(rankId: string): UpdateTestCaseRequestBody {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: string  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): string | undefined {
        return this['rank_id'];
    }
    public withTestcaseNumber(testcaseNumber: string): UpdateTestCaseRequestBody {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
    public withExtendInfo(extendInfo: ExternalServiceBizCase): UpdateTestCaseRequestBody {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: ExternalServiceBizCase  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): ExternalServiceBizCase | undefined {
        return this['extend_info'];
    }
}