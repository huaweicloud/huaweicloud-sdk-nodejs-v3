import { ObsScanResultInfo } from './ObsScanResultInfo';


export class ObsScanResult {
    public total?: number;
    private 'db_scan_results'?: Array<ObsScanResultInfo>;
    public constructor() { 
    }
    public withTotal(total: number): ObsScanResult {
        this['total'] = total;
        return this;
    }
    public withDbScanResults(dbScanResults: Array<ObsScanResultInfo>): ObsScanResult {
        this['db_scan_results'] = dbScanResults;
        return this;
    }
    public set dbScanResults(dbScanResults: Array<ObsScanResultInfo>  | undefined) {
        this['db_scan_results'] = dbScanResults;
    }
    public get dbScanResults(): Array<ObsScanResultInfo> | undefined {
        return this['db_scan_results'];
    }
}