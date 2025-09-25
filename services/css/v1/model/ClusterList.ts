import { ClusterListDatastore } from './ClusterListDatastore';
import { ClusterListFailedReasons } from './ClusterListFailedReasons';
import { ClusterListInstances } from './ClusterListInstances';
import { ClusterListTags } from './ClusterListTags';
import { ElbWhiteListResp } from './ElbWhiteListResp';
import { PublicKibanaRespBody } from './PublicKibanaRespBody';


export class ClusterList {
    public datastore?: ClusterListDatastore;
    public snapshotPolicy?: object;
    public instances?: Array<ClusterListInstances>;
    public publicKibanaResp?: PublicKibanaRespBody;
    public elbWhiteList?: ElbWhiteListResp;
    public updated?: string;
    public name?: string;
    public publicIp?: string;
    public created?: string;
    public id?: string;
    public status?: string;
    public endpoint?: string;
    public vpcId?: string;
    public subnetId?: string;
    public securityGroupId?: string;
    public bandwidthSize?: number;
    public httpsEnable?: boolean;
    public authorityEnable?: boolean;
    public diskEncrypted?: boolean;
    public backupAvailable?: boolean;
    public actionProgress?: object;
    public actions?: Array<string>;
    public enterpriseProjectId?: string;
    public tags?: Array<ClusterListTags>;
    public failedReason?: ClusterListFailedReasons;
    public period?: boolean;
    public bandwidthResourceId?: string;
    public ipv6Endpoint?: string;
    public cmkId?: string;
    public currentSubnetIds?: string;
    public constructor() { 
    }
    public withDatastore(datastore: ClusterListDatastore): ClusterList {
        this['datastore'] = datastore;
        return this;
    }
    public withSnapshotPolicy(snapshotPolicy: object): ClusterList {
        this['snapshotPolicy'] = snapshotPolicy;
        return this;
    }
    public withInstances(instances: Array<ClusterListInstances>): ClusterList {
        this['instances'] = instances;
        return this;
    }
    public withPublicKibanaResp(publicKibanaResp: PublicKibanaRespBody): ClusterList {
        this['publicKibanaResp'] = publicKibanaResp;
        return this;
    }
    public withElbWhiteList(elbWhiteList: ElbWhiteListResp): ClusterList {
        this['elbWhiteList'] = elbWhiteList;
        return this;
    }
    public withUpdated(updated: string): ClusterList {
        this['updated'] = updated;
        return this;
    }
    public withName(name: string): ClusterList {
        this['name'] = name;
        return this;
    }
    public withPublicIp(publicIp: string): ClusterList {
        this['publicIp'] = publicIp;
        return this;
    }
    public withCreated(created: string): ClusterList {
        this['created'] = created;
        return this;
    }
    public withId(id: string): ClusterList {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ClusterList {
        this['status'] = status;
        return this;
    }
    public withEndpoint(endpoint: string): ClusterList {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVpcId(vpcId: string): ClusterList {
        this['vpcId'] = vpcId;
        return this;
    }
    public withSubnetId(subnetId: string): ClusterList {
        this['subnetId'] = subnetId;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ClusterList {
        this['securityGroupId'] = securityGroupId;
        return this;
    }
    public withBandwidthSize(bandwidthSize: number): ClusterList {
        this['bandwidthSize'] = bandwidthSize;
        return this;
    }
    public withHttpsEnable(httpsEnable: boolean): ClusterList {
        this['httpsEnable'] = httpsEnable;
        return this;
    }
    public withAuthorityEnable(authorityEnable: boolean): ClusterList {
        this['authorityEnable'] = authorityEnable;
        return this;
    }
    public withDiskEncrypted(diskEncrypted: boolean): ClusterList {
        this['diskEncrypted'] = diskEncrypted;
        return this;
    }
    public withBackupAvailable(backupAvailable: boolean): ClusterList {
        this['backupAvailable'] = backupAvailable;
        return this;
    }
    public withActionProgress(actionProgress: object): ClusterList {
        this['actionProgress'] = actionProgress;
        return this;
    }
    public withActions(actions: Array<string>): ClusterList {
        this['actions'] = actions;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClusterList {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withTags(tags: Array<ClusterListTags>): ClusterList {
        this['tags'] = tags;
        return this;
    }
    public withFailedReason(failedReason: ClusterListFailedReasons): ClusterList {
        this['failedReason'] = failedReason;
        return this;
    }
    public withPeriod(period: boolean): ClusterList {
        this['period'] = period;
        return this;
    }
    public withBandwidthResourceId(bandwidthResourceId: string): ClusterList {
        this['bandwidthResourceId'] = bandwidthResourceId;
        return this;
    }
    public withIpv6Endpoint(ipv6Endpoint: string): ClusterList {
        this['ipv6Endpoint'] = ipv6Endpoint;
        return this;
    }
    public withCmkId(cmkId: string): ClusterList {
        this['cmkId'] = cmkId;
        return this;
    }
    public withCurrentSubnetIds(currentSubnetIds: string): ClusterList {
        this['currentSubnetIds'] = currentSubnetIds;
        return this;
    }
}