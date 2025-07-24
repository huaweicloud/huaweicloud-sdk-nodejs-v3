
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApiTestSuiteByRepoFileResponse extends SdkResponse {
    private 'testsuite_id'?: string;
    private 'testcase_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTestsuiteId(testsuiteId: string): CreateApiTestSuiteByRepoFileResponse {
        this['testsuite_id'] = testsuiteId;
        return this;
    }
    public set testsuiteId(testsuiteId: string  | undefined) {
        this['testsuite_id'] = testsuiteId;
    }
    public get testsuiteId(): string | undefined {
        return this['testsuite_id'];
    }
    public withTestcaseIds(testcaseIds: Array<string>): CreateApiTestSuiteByRepoFileResponse {
        this['testcase_ids'] = testcaseIds;
        return this;
    }
    public set testcaseIds(testcaseIds: Array<string>  | undefined) {
        this['testcase_ids'] = testcaseIds;
    }
    public get testcaseIds(): Array<string> | undefined {
        return this['testcase_ids'];
    }
}