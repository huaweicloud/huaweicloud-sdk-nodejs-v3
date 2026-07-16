import { DataSource } from './DataSource';
import { LogDir } from './LogDir';


export class Summary {
    private 'log_type'?: string;
    private 'log_dir'?: LogDir;
    private 'data_sources'?: Array<DataSource>;
    public constructor() { 
    }
    public withLogType(logType: string): Summary {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogDir(logDir: LogDir): Summary {
        this['log_dir'] = logDir;
        return this;
    }
    public set logDir(logDir: LogDir  | undefined) {
        this['log_dir'] = logDir;
    }
    public get logDir(): LogDir | undefined {
        return this['log_dir'];
    }
    public withDataSources(dataSources: Array<DataSource>): Summary {
        this['data_sources'] = dataSources;
        return this;
    }
    public set dataSources(dataSources: Array<DataSource>  | undefined) {
        this['data_sources'] = dataSources;
    }
    public get dataSources(): Array<DataSource> | undefined {
        return this['data_sources'];
    }
}