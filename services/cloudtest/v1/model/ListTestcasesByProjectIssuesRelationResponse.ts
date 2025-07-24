import { IssuesRelationTestCaseVo } from './IssuesRelationTestCaseVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestcasesByProjectIssuesRelationResponse extends SdkResponse {
    public testcases?: Array<IssuesRelationTestCaseVo>;
    private 'total_count'?: number;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor() { 
        super();
    }
    public withTestcases(testcases: Array<IssuesRelationTestCaseVo>): ListTestcasesByProjectIssuesRelationResponse {
        this['testcases'] = testcases;
        return this;
    }
    public withTotalCount(totalCount: number): ListTestcasesByProjectIssuesRelationResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageNo(pageNo: number): ListTestcasesByProjectIssuesRelationResponse {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListTestcasesByProjectIssuesRelationResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}