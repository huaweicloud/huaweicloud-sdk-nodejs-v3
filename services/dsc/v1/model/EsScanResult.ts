import { EsScanResultInfo } from './EsScanResultInfo';


export class EsScanResult {
    public total?: number;
    private 'db_scan_results'?: Array<EsScanResultInfo>;
    public constructor() { 
    }
    public withTotal(total: number): EsScanResult {
        this['total'] = total;
        return this;
    }
    public withDbScanResults(dbScanResults: Array<EsScanResultInfo>): EsScanResult {
        this['db_scan_results'] = dbScanResults;
        return this;
    }
    public set dbScanResults(dbScanResults: Array<EsScanResultInfo>  | undefined) {
        this['db_scan_results'] = dbScanResults;
    }
    public get dbScanResults(): Array<EsScanResultInfo> | undefined {
        return this['db_scan_results'];
    }
}