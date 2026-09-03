import { AlertTemplate } from './AlertTemplate';
import { TestCaseBasicInfo } from './TestCaseBasicInfo';


export class PreTestCaseInfo {
    private 'alert_template'?: AlertTemplate;
    public enable?: string;
    public testCases?: Array<TestCaseBasicInfo>;
    public constructor() { 
    }
    public withAlertTemplate(alertTemplate: AlertTemplate): PreTestCaseInfo {
        this['alert_template'] = alertTemplate;
        return this;
    }
    public set alertTemplate(alertTemplate: AlertTemplate  | undefined) {
        this['alert_template'] = alertTemplate;
    }
    public get alertTemplate(): AlertTemplate | undefined {
        return this['alert_template'];
    }
    public withEnable(enable: string): PreTestCaseInfo {
        this['enable'] = enable;
        return this;
    }
    public withTestCases(testCases: Array<TestCaseBasicInfo>): PreTestCaseInfo {
        this['testCases'] = testCases;
        return this;
    }
}