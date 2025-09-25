import { ClusterDetailDatastore } from './ClusterDetailDatastore';
import { ClusterDetailFailedReasons } from './ClusterDetailFailedReasons';
import { ClusterDetailInstances } from './ClusterDetailInstances';
import { ClusterDetailTags } from './ClusterDetailTags';
import { ElbWhiteListResp } from './ElbWhiteListResp';
import { PublicKibanaRespBody } from './PublicKibanaRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterDetailResponse extends SdkResponse {
    public datastore?: ClusterDetailDatastore;
    public instances?: Array<ClusterDetailInstances>;
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
    public vpcepIp?: string;
    public vpcepIpv6Address?: string;
    public bandwidthSize?: number;
    public httpsEnable?: boolean;
    public diskEncrypted?: boolean;
    public authorityEnable?: boolean;
    public backupAvailable?: boolean;
    public actionProgress?: object;
    public actions?: Array<string>;
    public enterpriseProjectId?: string;
    public tags?: Array<ClusterDetailTags>;
    public failedReason?: ClusterDetailFailedReasons;
    public period?: boolean;
    public bandwidthResourceId?: string;
    public ipv6Endpoint?: string;
    public supportVpcep?: boolean;
    public cmkId?: string;
    public orderId?: string;
    public currentSubnetIds?: string;
    public constructor() { 
        super();
    }
    public withDatastore(datastore: ClusterDetailDatastore): ShowClusterDetailResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withInstances(instances: Array<ClusterDetailInstances>): ShowClusterDetailResponse {
        this['instances'] = instances;
        return this;
    }
    public withPublicKibanaResp(publicKibanaResp: PublicKibanaRespBody): ShowClusterDetailResponse {
        this['publicKibanaResp'] = publicKibanaResp;
        return this;
    }
    public withElbWhiteList(elbWhiteList: ElbWhiteListResp): ShowClusterDetailResponse {
        this['elbWhiteList'] = elbWhiteList;
        return this;
    }
    public withUpdated(updated: string): ShowClusterDetailResponse {
        this['updated'] = updated;
        return this;
    }
    public withName(name: string): ShowClusterDetailResponse {
        this['name'] = name;
        return this;
    }
    public withPublicIp(publicIp: string): ShowClusterDetailResponse {
        this['publicIp'] = publicIp;
        return this;
    }
    public withCreated(created: string): ShowClusterDetailResponse {
        this['created'] = created;
        return this;
    }
    public withId(id: string): ShowClusterDetailResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ShowClusterDetailResponse {
        this['status'] = status;
        return this;
    }
    public withEndpoint(endpoint: string): ShowClusterDetailResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withVpcId(vpcId: string): ShowClusterDetailResponse {
        this['vpcId'] = vpcId;
        return this;
    }
    public withSubnetId(subnetId: string): ShowClusterDetailResponse {
        this['subnetId'] = subnetId;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ShowClusterDetailResponse {
        this['securityGroupId'] = securityGroupId;
        return this;
    }
    public withVpcepIp(vpcepIp: string): ShowClusterDetailResponse {
        this['vpcepIp'] = vpcepIp;
        return this;
    }
    public withVpcepIpv6Address(vpcepIpv6Address: string): ShowClusterDetailResponse {
        this['vpcepIpv6Address'] = vpcepIpv6Address;
        return this;
    }
    public withBandwidthSize(bandwidthSize: number): ShowClusterDetailResponse {
        this['bandwidthSize'] = bandwidthSize;
        return this;
    }
    public withHttpsEnable(httpsEnable: boolean): ShowClusterDetailResponse {
        this['httpsEnable'] = httpsEnable;
        return this;
    }
    public withDiskEncrypted(diskEncrypted: boolean): ShowClusterDetailResponse {
        this['diskEncrypted'] = diskEncrypted;
        return this;
    }
    public withAuthorityEnable(authorityEnable: boolean): ShowClusterDetailResponse {
        this['authorityEnable'] = authorityEnable;
        return this;
    }
    public withBackupAvailable(backupAvailable: boolean): ShowClusterDetailResponse {
        this['backupAvailable'] = backupAvailable;
        return this;
    }
    public withActionProgress(actionProgress: object): ShowClusterDetailResponse {
        this['actionProgress'] = actionProgress;
        return this;
    }
    public withActions(actions: Array<string>): ShowClusterDetailResponse {
        this['actions'] = actions;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowClusterDetailResponse {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withTags(tags: Array<ClusterDetailTags>): ShowClusterDetailResponse {
        this['tags'] = tags;
        return this;
    }
    public withFailedReason(failedReason: ClusterDetailFailedReasons): ShowClusterDetailResponse {
        this['failedReason'] = failedReason;
        return this;
    }
    public withPeriod(period: boolean): ShowClusterDetailResponse {
        this['period'] = period;
        return this;
    }
    public withBandwidthResourceId(bandwidthResourceId: string): ShowClusterDetailResponse {
        this['bandwidthResourceId'] = bandwidthResourceId;
        return this;
    }
    public withIpv6Endpoint(ipv6Endpoint: string): ShowClusterDetailResponse {
        this['ipv6Endpoint'] = ipv6Endpoint;
        return this;
    }
    public withSupportVpcep(supportVpcep: boolean): ShowClusterDetailResponse {
        this['supportVpcep'] = supportVpcep;
        return this;
    }
    public withCmkId(cmkId: string): ShowClusterDetailResponse {
        this['cmkId'] = cmkId;
        return this;
    }
    public withOrderId(orderId: string): ShowClusterDetailResponse {
        this['orderId'] = orderId;
        return this;
    }
    public withCurrentSubnetIds(currentSubnetIds: string): ShowClusterDetailResponse {
        this['currentSubnetIds'] = currentSubnetIds;
        return this;
    }
}