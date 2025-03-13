import { DiagnoseResult } from './DiagnoseResult';


export class DataMaskingResult {
    public result?: DiagnoseResult;
    public count?: number;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): DataMaskingResult {
        this['result'] = result;
        return this;
    }
    public withCount(count: number): DataMaskingResult {
        this['count'] = count;
        return this;
    }
}