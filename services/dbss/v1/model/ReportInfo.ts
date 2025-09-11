import { ReportBean } from './ReportBean';


export class ReportInfo {
    public report?: ReportBean;
    public constructor() { 
    }
    public withReport(report: ReportBean): ReportInfo {
        this['report'] = report;
        return this;
    }
}