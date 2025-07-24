

export class BatchDeleteTestCaseRequestBody {
    private 'service_id'?: number;
    private 'testcase_id_list'?: Array<string>;
    public constructor(serviceId?: number, testcaseIdList?: Array<string>) { 
        this['service_id'] = serviceId;
        this['testcase_id_list'] = testcaseIdList;
    }
    public withServiceId(serviceId: number): BatchDeleteTestCaseRequestBody {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withTestcaseIdList(testcaseIdList: Array<string>): BatchDeleteTestCaseRequestBody {
        this['testcase_id_list'] = testcaseIdList;
        return this;
    }
    public set testcaseIdList(testcaseIdList: Array<string>  | undefined) {
        this['testcase_id_list'] = testcaseIdList;
    }
    public get testcaseIdList(): Array<string> | undefined {
        return this['testcase_id_list'];
    }
}