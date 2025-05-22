import { AssociatedTestCase } from './AssociatedTestCase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociatedTestCasesResponse extends SdkResponse {
    private 'test_cases'?: Array<AssociatedTestCase>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTestCases(testCases: Array<AssociatedTestCase>): ListAssociatedTestCasesResponse {
        this['test_cases'] = testCases;
        return this;
    }
    public set testCases(testCases: Array<AssociatedTestCase>  | undefined) {
        this['test_cases'] = testCases;
    }
    public get testCases(): Array<AssociatedTestCase> | undefined {
        return this['test_cases'];
    }
    public withTotal(total: number): ListAssociatedTestCasesResponse {
        this['total'] = total;
        return this;
    }
}