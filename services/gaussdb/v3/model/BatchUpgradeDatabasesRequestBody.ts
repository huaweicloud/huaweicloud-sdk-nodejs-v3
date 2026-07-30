import { UpgradeDatabasesSingleInstance } from './UpgradeDatabasesSingleInstance';


export class BatchUpgradeDatabasesRequestBody {
    private 'databases_instance_infos'?: Array<UpgradeDatabasesSingleInstance>;
    public delay?: boolean;
    public constructor(databasesInstanceInfos?: Array<UpgradeDatabasesSingleInstance>, delay?: boolean) { 
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
    public withDelay(delay: boolean): BatchUpgradeDatabasesRequestBody {
        this['delay'] = delay;
        return this;
    }
}