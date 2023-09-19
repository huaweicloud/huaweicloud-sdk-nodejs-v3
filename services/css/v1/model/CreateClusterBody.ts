import { CreateClusterBackupStrategyBody } from './CreateClusterBackupStrategyBody';
import { CreateClusterDatastoreBody } from './CreateClusterDatastoreBody';
import { CreateClusterInstanceBody } from './CreateClusterInstanceBody';
import { CreateClusterTagsBody } from './CreateClusterTagsBody';
import { PayInfoBody } from './PayInfoBody';


export class CreateClusterBody {
    public instance?: CreateClusterInstanceBody;
    public datastore?: CreateClusterDatastoreBody;
    public name?: string;
    public instanceNum?: number;
    public backupStrategy?: CreateClusterBackupStrategyBody;
    public httpsEnable?: boolean;
    public authorityEnable?: boolean;
    public adminPwd?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<CreateClusterTagsBody>;
    public payInfo?: PayInfoBody;
    public constructor(instance?: CreateClusterInstanceBody, datastore?: CreateClusterDatastoreBody, name?: string, instanceNum?: number) { 
        this['instance'] = instance;
        this['datastore'] = datastore;
        this['name'] = name;
        this['instanceNum'] = instanceNum;
    }
    public withInstance(instance: CreateClusterInstanceBody): CreateClusterBody {
        this['instance'] = instance;
        return this;
    }
    public withDatastore(datastore: CreateClusterDatastoreBody): CreateClusterBody {
        this['datastore'] = datastore;
        return this;
    }
    public withName(name: string): CreateClusterBody {
        this['name'] = name;
        return this;
    }
    public withInstanceNum(instanceNum: number): CreateClusterBody {
        this['instanceNum'] = instanceNum;
        return this;
    }
    public withBackupStrategy(backupStrategy: CreateClusterBackupStrategyBody): CreateClusterBody {
        this['backupStrategy'] = backupStrategy;
        return this;
    }
    public withHttpsEnable(httpsEnable: boolean): CreateClusterBody {
        this['httpsEnable'] = httpsEnable;
        return this;
    }
    public withAuthorityEnable(authorityEnable: boolean): CreateClusterBody {
        this['authorityEnable'] = authorityEnable;
        return this;
    }
    public withAdminPwd(adminPwd: string): CreateClusterBody {
        this['adminPwd'] = adminPwd;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<CreateClusterTagsBody>): CreateClusterBody {
        this['tags'] = tags;
        return this;
    }
    public withPayInfo(payInfo: PayInfoBody): CreateClusterBody {
        this['payInfo'] = payInfo;
        return this;
    }
}