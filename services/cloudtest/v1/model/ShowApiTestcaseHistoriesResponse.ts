import { TestcaseResult } from './TestcaseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiTestcaseHistoriesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'project_id'?: string;
    private 'testcase_id'?: string;
    private 'testcase_name'?: string;
    private 'testcase_results'?: Array<TestcaseResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowApiTestcaseHistoriesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withProjectId(projectId: string): ShowApiTestcaseHistoriesResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseId(testcaseId: string): ShowApiTestcaseHistoriesResponse {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withTestcaseName(testcaseName: string): ShowApiTestcaseHistoriesResponse {
        this['testcase_name'] = testcaseName;
        return this;
    }
    public set testcaseName(testcaseName: string  | undefined) {
        this['testcase_name'] = testcaseName;
    }
    public get testcaseName(): string | undefined {
        return this['testcase_name'];
    }
    public withTestcaseResults(testcaseResults: Array<TestcaseResult>): ShowApiTestcaseHistoriesResponse {
        this['testcase_results'] = testcaseResults;
        return this;
    }
    public set testcaseResults(testcaseResults: Array<TestcaseResult>  | undefined) {
        this['testcase_results'] = testcaseResults;
    }
    public get testcaseResults(): Array<TestcaseResult> | undefined {
        return this['testcase_results'];
    }
}