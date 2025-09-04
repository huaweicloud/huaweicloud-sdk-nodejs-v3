import { UpgradeDatabasesSingleInstance } from './UpgradeDatabasesSingleInstance';


export class BatchUpgradeDatabasesRequestBody {
    private 'databases_instance_infos'?: Array<UpgradeDatabasesSingleInstance>;
    public delay?: string;
    private 'is_skip_validate'?: boolean;
    public constructor(databasesInstanceInfos?: Array<UpgradeDatabasesSingleInstance>, delay?: string) { 
        this['databases_instance_infos'] = databasesInstanceInfos;
        this['delay'] = delay;
    }
    public withDatabasesInstanceInfos(databasesInstanceInfos: Array<UpgradeDatabasesSingleInstance>): BatchUpgradeDatabasesRequestBody {
        this['databases_instance_infos'] = databasesInstanceInfos;
        return this;
    }
    public set databasesInstanceInfos(databasesInstanceInfos: Array<UpgradeDatabasesSingleInstance>  | undefined) {
        this['databases_instance_infos'] = databasesInstanceInfos;
    }
    public get databasesInstanceInfos(): Array<UpgradeDatabasesSingleInstance> | undefined {
        return this['databases_instance_infos'];
    }
    public withDelay(delay: string): BatchUpgradeDatabasesRequestBody {
        this['delay'] = delay;
        return this;
    }
    public withIsSkipValidate(isSkipValidate: boolean): BatchUpgradeDatabasesRequestBody {
        this['is_skip_validate'] = isSkipValidate;
        return this;
    }
    public set isSkipValidate(isSkipValidate: boolean  | undefined) {
        this['is_skip_validate'] = isSkipValidate;
    }
    public get isSkipValidate(): boolean | undefined {
        return this['is_skip_validate'];
    }
}