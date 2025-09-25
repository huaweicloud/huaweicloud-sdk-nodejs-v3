import { CreateClusterBackupStrategyBody } from './CreateClusterBackupStrategyBody';
import { CreateClusterDatastoreBody } from './CreateClusterDatastoreBody';
import { CreateClusterInstanceNicsBody } from './CreateClusterInstanceNicsBody';
import { CreateClusterLoadBalance } from './CreateClusterLoadBalance';
import { CreateClusterPublicIpReq } from './CreateClusterPublicIpReq';
import { CreateClusterPublicKibanaReq } from './CreateClusterPublicKibanaReq';
import { CreateClusterRolesBody } from './CreateClusterRolesBody';
import { CreateClusterTagsBody } from './CreateClusterTagsBody';
import { DiskEncryptionInfo } from './DiskEncryptionInfo';
import { PayInfoBody } from './PayInfoBody';


export class CreateClusterBody {
    public name?: string;
    public desc?: string;
    public backupStrategy?: CreateClusterBackupStrategyBody;
    public roles?: Array<CreateClusterRolesBody>;
    public nics?: CreateClusterInstanceNicsBody;
    private 'enterprise_project_id'?: string;
    public tags?: Array<CreateClusterTagsBody>;
    private 'availability_zone'?: string;
    public datastore?: CreateClusterDatastoreBody;
    public authorityEnable?: boolean;
    public httpsEnable?: boolean;
    public adminPwd?: string;
    public publicIPReq?: CreateClusterPublicIpReq;
    public loadBalance?: CreateClusterLoadBalance;
    public publicKibanaReq?: CreateClusterPublicKibanaReq;
    public payInfo?: PayInfoBody;
    private 'ipv6_enable'?: boolean;
    public diskEncryption?: DiskEncryptionInfo;
    public constructor(name?: string, roles?: Array<CreateClusterRolesBody>, nics?: CreateClusterInstanceNicsBody, availabilityZone?: string, datastore?: CreateClusterDatastoreBody) { 
        this['name'] = name;
        this['roles'] = roles;
        this['nics'] = nics;
        this['availability_zone'] = availabilityZone;
        this['datastore'] = datastore;
    }
    public withName(name: string): CreateClusterBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): CreateClusterBody {
        this['desc'] = desc;
        return this;
    }
    public withBackupStrategy(backupStrategy: CreateClusterBackupStrategyBody): CreateClusterBody {
        this['backupStrategy'] = backupStrategy;
        return this;
    }
    public withRoles(roles: Array<CreateClusterRolesBody>): CreateClusterBody {
        this['roles'] = roles;
        return this;
    }
    public withNics(nics: CreateClusterInstanceNicsBody): CreateClusterBody {
        this['nics'] = nics;
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
    public withAvailabilityZone(availabilityZone: string): CreateClusterBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDatastore(datastore: CreateClusterDatastoreBody): CreateClusterBody {
        this['datastore'] = datastore;
        return this;
    }
    public withAuthorityEnable(authorityEnable: boolean): CreateClusterBody {
        this['authorityEnable'] = authorityEnable;
        return this;
    }
    public withHttpsEnable(httpsEnable: boolean): CreateClusterBody {
        this['httpsEnable'] = httpsEnable;
        return this;
    }
    public withAdminPwd(adminPwd: string): CreateClusterBody {
        this['adminPwd'] = adminPwd;
        return this;
    }
    public withPublicIPReq(publicIPReq: CreateClusterPublicIpReq): CreateClusterBody {
        this['publicIPReq'] = publicIPReq;
        return this;
    }
    public withLoadBalance(loadBalance: CreateClusterLoadBalance): CreateClusterBody {
        this['loadBalance'] = loadBalance;
        return this;
    }
    public withPublicKibanaReq(publicKibanaReq: CreateClusterPublicKibanaReq): CreateClusterBody {
        this['publicKibanaReq'] = publicKibanaReq;
        return this;
    }
    public withPayInfo(payInfo: PayInfoBody): CreateClusterBody {
        this['payInfo'] = payInfo;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): CreateClusterBody {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withDiskEncryption(diskEncryption: DiskEncryptionInfo): CreateClusterBody {
        this['diskEncryption'] = diskEncryption;
        return this;
    }
}