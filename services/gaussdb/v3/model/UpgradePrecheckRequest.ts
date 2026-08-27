import { PreCheckForUpgradeDatabasesSingleInstance } from './PreCheckForUpgradeDatabasesSingleInstance';


export class UpgradePrecheckRequest {
    private 'databases_instance_infos'?: Array<PreCheckForUpgradeDatabasesSingleInstance>;
    public constructor(databasesInstanceInfos?: Array<PreCheckForUpgradeDatabasesSingleInstance>) { 
        this['databases_instance_infos'] = databasesInstanceInfos;
    }
    public withDatabasesInstanceInfos(databasesInstanceInfos: Array<PreCheckForUpgradeDatabasesSingleInstance>): UpgradePrecheckRequest {
        this['databases_instance_infos'] = databasesInstanceInfos;
        return this;
    }
    public set databasesInstanceInfos(databasesInstanceInfos: Array<PreCheckForUpgradeDatabasesSingleInstance>  | undefined) {
        this['databases_instance_infos'] = databasesInstanceInfos;
    }
    public get databasesInstanceInfos(): Array<PreCheckForUpgradeDatabasesSingleInstance> | undefined {
        return this['databases_instance_infos'];
    }
}