import { AlertTemplate } from './AlertTemplate';


export class TestCaseBasicInfo {
    private 'alert_template'?: AlertTemplate;
    public caseType?: number;
    private 'executor_type'?: string;
    public id?: string;
    private 'is_forbidden'?: boolean;
    public name?: string;
    private 'number'?: string;
    private 'project_update_time'?: number;
    public scriptProjectName?: string;
    public state?: number;
    private 'svn_script_path'?: string;
    public tmssVersionUri?: string;
    public constructor() { 
    }
    public withAlertTemplate(alertTemplate: AlertTemplate): TestCaseBasicInfo {
        this['alert_template'] = alertTemplate;
        return this;
    }
    public set alertTemplate(alertTemplate: AlertTemplate  | undefined) {
        this['alert_template'] = alertTemplate;
    }
    public get alertTemplate(): AlertTemplate | undefined {
        return this['alert_template'];
    }
    public withCaseType(caseType: number): TestCaseBasicInfo {
        this['caseType'] = caseType;
        return this;
    }
    public withExecutorType(executorType: string): TestCaseBasicInfo {
        this['executor_type'] = executorType;
        return this;
    }
    public set executorType(executorType: string  | undefined) {
        this['executor_type'] = executorType;
    }
    public get executorType(): string | undefined {
        return this['executor_type'];
    }
    public withId(id: string): TestCaseBasicInfo {
        this['id'] = id;
        return this;
    }
    public withIsForbidden(isForbidden: boolean): TestCaseBasicInfo {
        this['is_forbidden'] = isForbidden;
        return this;
    }
    public set isForbidden(isForbidden: boolean  | undefined) {
        this['is_forbidden'] = isForbidden;
    }
    public get isForbidden(): boolean | undefined {
        return this['is_forbidden'];
    }
    public withName(name: string): TestCaseBasicInfo {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: string): TestCaseBasicInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withProjectUpdateTime(projectUpdateTime: number): TestCaseBasicInfo {
        this['project_update_time'] = projectUpdateTime;
        return this;
    }
    public set projectUpdateTime(projectUpdateTime: number  | undefined) {
        this['project_update_time'] = projectUpdateTime;
    }
    public get projectUpdateTime(): number | undefined {
        return this['project_update_time'];
    }
    public withScriptProjectName(scriptProjectName: string): TestCaseBasicInfo {
        this['scriptProjectName'] = scriptProjectName;
        return this;
    }
    public withState(state: number): TestCaseBasicInfo {
        this['state'] = state;
        return this;
    }
    public withSvnScriptPath(svnScriptPath: string): TestCaseBasicInfo {
        this['svn_script_path'] = svnScriptPath;
        return this;
    }
    public set svnScriptPath(svnScriptPath: string  | undefined) {
        this['svn_script_path'] = svnScriptPath;
    }
    public get svnScriptPath(): string | undefined {
        return this['svn_script_path'];
    }
    public withTmssVersionUri(tmssVersionUri: string): TestCaseBasicInfo {
        this['tmssVersionUri'] = tmssVersionUri;
        return this;
    }
}