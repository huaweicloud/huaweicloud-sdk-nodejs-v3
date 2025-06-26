import { DiagnosisTask } from './DiagnosisTask';
import { Page } from './Page';


export class DiagnosisTaskPage {
    public total?: number;
    public data?: Array<DiagnosisTask>;
    public constructor() { 
    }
    public withTotal(total: number): DiagnosisTaskPage {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<DiagnosisTask>): DiagnosisTaskPage {
        this['data'] = data;
        return this;
    }
}