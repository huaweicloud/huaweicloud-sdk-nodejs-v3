import { DbScanResultInfo } from './DbScanResultInfo';


export class DbScanResult {
    public total?: number;
    private 'db_scan_results'?: Array<DbScanResultInfo>;
    public constructor() { 
    }
    public withTotal(total: number): DbScanResult {
        this['total'] = total;
        return this;
    }
    public withDbScanResults(dbScanResults: Array<DbScanResultInfo>): DbScanResult {
        this['db_scan_results'] = dbScanResults;
        return this;
    }
    public set dbScanResults(dbScanResults: Array<DbScanResultInfo>  | undefined) {
        this['db_scan_results'] = dbScanResults;
    }
    public get dbScanResults(): Array<DbScanResultInfo> | undefined {
        return this['db_scan_results'];
    }
}