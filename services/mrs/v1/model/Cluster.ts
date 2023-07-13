import { BootstrapScript } from './BootstrapScript';
import { ComponentAmb } from './ComponentAmb';
import { NodeGroupV10 } from './NodeGroupV10';


export class Cluster {
    public clusterId?: string;
    public clusterName?: string;
    public totalNodeNum?: string;
    public clusterState?: string;
    public stageDesc?: string;
    public createAt?: string;
    public updateAt?: string;
    public chargingStartTime?: string;
    public billingType?: string;
    public dataCenter?: string;
    public vpc?: string;
    public vpcId?: string;
    public duration?: string;
    public fee?: string;
    public hadoopVersion?: string;
    public componentList?: Array<ComponentAmb>;
    public externalIp?: string;
    public externalAlternateIp?: string;
    public internalIp?: string;
    public deploymentId?: string;
    public remark?: string;
    public orderId?: string;
    public azId?: string;
    public azName?: string;
    public azCode?: string;
    public availabilityZoneId?: string;
    public instanceId?: string;
    public vnc?: string;
    public tenantId?: string;
    public volumeSize?: number;
    public volumeType?: string;
    public subnetId?: string;
    public subnetName?: string;
    public securityGroupsId?: string;
    public slaveSecurityGroupsId?: string;
    public bootstrapScripts?: Array<BootstrapScript>;
    public safeMode?: number;
    public clusterVersion?: string;
    public nodePublicCertName?: string;
    public masterNodeIp?: string;
    public privateIpFirst?: string;
    public errorInfo?: string;
    public tags?: string;
    public masterNodeNum?: string;
    public coreNodeNum?: string;
    public masterNodeSize?: string;
    public coreNodeSize?: string;
    public masterNodeProductId?: string;
    public masterNodeSpecId?: string;
    public coreNodeProductId?: string;
    public coreNodeSpecId?: string;
    public masterDataVolumeType?: string;
    public masterDataVolumeSize?: number;
    public masterDataVolumeCount?: number;
    public coreDataVolumeType?: string;
    public coreDataVolumeSize?: number;
    public coreDataVolumeCount?: number;
    public enterpriseProjectId?: string;
    public isMrsManagerFinish?: boolean;
    public clusterType?: number;
    public logCollection?: number;
    public periodType?: number;
    public scale?: string;
    public nodeGroups?: Array<NodeGroupV10>;
    public taskNodeGroups?: Array<NodeGroupV10>;
    public eipId?: string;
    public eipAddress?: string;
    public eipv6Address?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): Cluster {
        this['clusterId'] = clusterId;
        return this;
    }
    public withClusterName(clusterName: string): Cluster {
        this['clusterName'] = clusterName;
        return this;
    }
    public withTotalNodeNum(totalNodeNum: string): Cluster {
        this['totalNodeNum'] = totalNodeNum;
        return this;
    }
    public withClusterState(clusterState: string): Cluster {
        this['clusterState'] = clusterState;
        return this;
    }
    public withStageDesc(stageDesc: string): Cluster {
        this['stageDesc'] = stageDesc;
        return this;
    }
    public withCreateAt(createAt: string): Cluster {
        this['createAt'] = createAt;
        return this;
    }
    public withUpdateAt(updateAt: string): Cluster {
        this['updateAt'] = updateAt;
        return this;
    }
    public withChargingStartTime(chargingStartTime: string): Cluster {
        this['chargingStartTime'] = chargingStartTime;
        return this;
    }
    public withBillingType(billingType: string): Cluster {
        this['billingType'] = billingType;
        return this;
    }
    public withDataCenter(dataCenter: string): Cluster {
        this['dataCenter'] = dataCenter;
        return this;
    }
    public withVpc(vpc: string): Cluster {
        this['vpc'] = vpc;
        return this;
    }
    public withVpcId(vpcId: string): Cluster {
        this['vpcId'] = vpcId;
        return this;
    }
    public withDuration(duration: string): Cluster {
        this['duration'] = duration;
        return this;
    }
    public withFee(fee: string): Cluster {
        this['fee'] = fee;
        return this;
    }
    public withHadoopVersion(hadoopVersion: string): Cluster {
        this['hadoopVersion'] = hadoopVersion;
        return this;
    }
    public withComponentList(componentList: Array<ComponentAmb>): Cluster {
        this['componentList'] = componentList;
        return this;
    }
    public withExternalIp(externalIp: string): Cluster {
        this['externalIp'] = externalIp;
        return this;
    }
    public withExternalAlternateIp(externalAlternateIp: string): Cluster {
        this['externalAlternateIp'] = externalAlternateIp;
        return this;
    }
    public withInternalIp(internalIp: string): Cluster {
        this['internalIp'] = internalIp;
        return this;
    }
    public withDeploymentId(deploymentId: string): Cluster {
        this['deploymentId'] = deploymentId;
        return this;
    }
    public withRemark(remark: string): Cluster {
        this['remark'] = remark;
        return this;
    }
    public withOrderId(orderId: string): Cluster {
        this['orderId'] = orderId;
        return this;
    }
    public withAzId(azId: string): Cluster {
        this['azId'] = azId;
        return this;
    }
    public withAzName(azName: string): Cluster {
        this['azName'] = azName;
        return this;
    }
    public withAzCode(azCode: string): Cluster {
        this['azCode'] = azCode;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): Cluster {
        this['availabilityZoneId'] = availabilityZoneId;
        return this;
    }
    public withInstanceId(instanceId: string): Cluster {
        this['instanceId'] = instanceId;
        return this;
    }
    public withVnc(vnc: string): Cluster {
        this['vnc'] = vnc;
        return this;
    }
    public withTenantId(tenantId: string): Cluster {
        this['tenantId'] = tenantId;
        return this;
    }
    public withVolumeSize(volumeSize: number): Cluster {
        this['volumeSize'] = volumeSize;
        return this;
    }
    public withVolumeType(volumeType: string): Cluster {
        this['volumeType'] = volumeType;
        return this;
    }
    public withSubnetId(subnetId: string): Cluster {
        this['subnetId'] = subnetId;
        return this;
    }
    public withSubnetName(subnetName: string): Cluster {
        this['subnetName'] = subnetName;
        return this;
    }
    public withSecurityGroupsId(securityGroupsId: string): Cluster {
        this['securityGroupsId'] = securityGroupsId;
        return this;
    }
    public withSlaveSecurityGroupsId(slaveSecurityGroupsId: string): Cluster {
        this['slaveSecurityGroupsId'] = slaveSecurityGroupsId;
        return this;
    }
    public withBootstrapScripts(bootstrapScripts: Array<BootstrapScript>): Cluster {
        this['bootstrapScripts'] = bootstrapScripts;
        return this;
    }
    public withSafeMode(safeMode: number): Cluster {
        this['safeMode'] = safeMode;
        return this;
    }
    public withClusterVersion(clusterVersion: string): Cluster {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    public withNodePublicCertName(nodePublicCertName: string): Cluster {
        this['nodePublicCertName'] = nodePublicCertName;
        return this;
    }
    public withMasterNodeIp(masterNodeIp: string): Cluster {
        this['masterNodeIp'] = masterNodeIp;
        return this;
    }
    public withPrivateIpFirst(privateIpFirst: string): Cluster {
        this['privateIpFirst'] = privateIpFirst;
        return this;
    }
    public withErrorInfo(errorInfo: string): Cluster {
        this['errorInfo'] = errorInfo;
        return this;
    }
    public withTags(tags: string): Cluster {
        this['tags'] = tags;
        return this;
    }
    public withMasterNodeNum(masterNodeNum: string): Cluster {
        this['masterNodeNum'] = masterNodeNum;
        return this;
    }
    public withCoreNodeNum(coreNodeNum: string): Cluster {
        this['coreNodeNum'] = coreNodeNum;
        return this;
    }
    public withMasterNodeSize(masterNodeSize: string): Cluster {
        this['masterNodeSize'] = masterNodeSize;
        return this;
    }
    public withCoreNodeSize(coreNodeSize: string): Cluster {
        this['coreNodeSize'] = coreNodeSize;
        return this;
    }
    public withMasterNodeProductId(masterNodeProductId: string): Cluster {
        this['masterNodeProductId'] = masterNodeProductId;
        return this;
    }
    public withMasterNodeSpecId(masterNodeSpecId: string): Cluster {
        this['masterNodeSpecId'] = masterNodeSpecId;
        return this;
    }
    public withCoreNodeProductId(coreNodeProductId: string): Cluster {
        this['coreNodeProductId'] = coreNodeProductId;
        return this;
    }
    public withCoreNodeSpecId(coreNodeSpecId: string): Cluster {
        this['coreNodeSpecId'] = coreNodeSpecId;
        return this;
    }
    public withMasterDataVolumeType(masterDataVolumeType: string): Cluster {
        this['masterDataVolumeType'] = masterDataVolumeType;
        return this;
    }
    public withMasterDataVolumeSize(masterDataVolumeSize: number): Cluster {
        this['masterDataVolumeSize'] = masterDataVolumeSize;
        return this;
    }
    public withMasterDataVolumeCount(masterDataVolumeCount: number): Cluster {
        this['masterDataVolumeCount'] = masterDataVolumeCount;
        return this;
    }
    public withCoreDataVolumeType(coreDataVolumeType: string): Cluster {
        this['coreDataVolumeType'] = coreDataVolumeType;
        return this;
    }
    public withCoreDataVolumeSize(coreDataVolumeSize: number): Cluster {
        this['coreDataVolumeSize'] = coreDataVolumeSize;
        return this;
    }
    public withCoreDataVolumeCount(coreDataVolumeCount: number): Cluster {
        this['coreDataVolumeCount'] = coreDataVolumeCount;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Cluster {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withIsMrsManagerFinish(isMrsManagerFinish: boolean): Cluster {
        this['isMrsManagerFinish'] = isMrsManagerFinish;
        return this;
    }
    public withClusterType(clusterType: number): Cluster {
        this['clusterType'] = clusterType;
        return this;
    }
    public withLogCollection(logCollection: number): Cluster {
        this['logCollection'] = logCollection;
        return this;
    }
    public withPeriodType(periodType: number): Cluster {
        this['periodType'] = periodType;
        return this;
    }
    public withScale(scale: string): Cluster {
        this['scale'] = scale;
        return this;
    }
    public withNodeGroups(nodeGroups: Array<NodeGroupV10>): Cluster {
        this['nodeGroups'] = nodeGroups;
        return this;
    }
    public withTaskNodeGroups(taskNodeGroups: Array<NodeGroupV10>): Cluster {
        this['taskNodeGroups'] = taskNodeGroups;
        return this;
    }
    public withEipId(eipId: string): Cluster {
        this['eipId'] = eipId;
        return this;
    }
    public withEipAddress(eipAddress: string): Cluster {
        this['eipAddress'] = eipAddress;
        return this;
    }
    public withEipv6Address(eipv6Address: string): Cluster {
        this['eipv6Address'] = eipv6Address;
        return this;
    }
}