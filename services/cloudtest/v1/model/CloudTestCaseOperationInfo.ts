import { CloudTestCaseInfo } from './CloudTestCaseInfo';


export class CloudTestCaseOperationInfo {
    public setUpCasesInfo?: Array<CloudTestCaseInfo>;
    public tearDownCasesInfo?: Array<CloudTestCaseInfo>;
    public testCasesInfo?: Array<CloudTestCaseInfo>;
    public constructor() { 
    }
    public withSetUpCasesInfo(setUpCasesInfo: Array<CloudTestCaseInfo>): CloudTestCaseOperationInfo {
        this['setUpCasesInfo'] = setUpCasesInfo;
        return this;
    }
    public withTearDownCasesInfo(tearDownCasesInfo: Array<CloudTestCaseInfo>): CloudTestCaseOperationInfo {
        this['tearDownCasesInfo'] = tearDownCasesInfo;
        return this;
    }
    public withTestCasesInfo(testCasesInfo: Array<CloudTestCaseInfo>): CloudTestCaseOperationInfo {
        this['testCasesInfo'] = testCasesInfo;
        return this;
    }
}