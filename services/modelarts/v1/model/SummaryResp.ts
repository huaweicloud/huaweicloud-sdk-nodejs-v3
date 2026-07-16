import { DataSourceResp } from './DataSourceResp';
import { LogDirResp } from './LogDirResp';


export class SummaryResp {
    private 'log_type'?: string;
    private 'log_dir'?: LogDirResp;
    private 'data_sources'?: Array<DataSourceResp>;
    public constructor() { 
    }
    public withLogType(logType: string): SummaryResp {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogDir(logDir: LogDirResp): SummaryResp {
        this['log_dir'] = logDir;
        return this;
    }
    public set logDir(logDir: LogDirResp  | undefined) {
        this['log_dir'] = logDir;
    }
    public get logDir(): LogDirResp | undefined {
        return this['log_dir'];
    }
    public withDataSources(dataSources: Array<DataSourceResp>): SummaryResp {
        this['data_sources'] = dataSources;
        return this;
    }
    public set dataSources(dataSources: Array<DataSourceResp>  | undefined) {
        this['data_sources'] = dataSources;
    }
    public get dataSources(): Array<DataSourceResp> | undefined {
        return this['data_sources'];
    }
}