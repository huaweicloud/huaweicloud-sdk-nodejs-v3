import { ProjectTestCaseFieldVo } from './ProjectTestCaseFieldVo';


export class ResultValueListProjectTestCaseFieldVo {
    public value?: Array<ProjectTestCaseFieldVo>;
    public constructor() { 
    }
    public withValue(value: Array<ProjectTestCaseFieldVo>): ResultValueListProjectTestCaseFieldVo {
        this['value'] = value;
        return this;
    }
}