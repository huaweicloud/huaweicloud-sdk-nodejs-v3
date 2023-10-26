import { ActionProgress } from './ActionProgress';
import { CdmQueryClusterDetailsRepsonseMaintainWindow } from './CdmQueryClusterDetailsRepsonseMaintainWindow';
import { CdmQueryClusterDetailsRepsonsePublicEndpointStatus } from './CdmQueryClusterDetailsRepsonsePublicEndpointStatus';
import { ClusterDetailInstance } from './ClusterDetailInstance';
import { ClusterLinks } from './ClusterLinks';
import { ClusterTask } from './ClusterTask';
import { CustomerConfig } from './CustomerConfig';
import { Datastore } from './Datastore';
import { FailedReasons } from './FailedReasons';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterDetailResponse extends SdkResponse {
    public publicEndpoint?: string;
    public instances?: Array<ClusterDetailInstance>;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    public customerConfig?: CustomerConfig;
    public datastore?: Datastore;
    public isAutoOff?: boolean;
    public publicEndpointDomainName?: string;
    public bakExpectedStartTime?: string;
    public bakKeepDay?: number;
    public maintainWindow?: CdmQueryClusterDetailsRepsonseMaintainWindow;
    public recentEvent?: number;
    public flavorName?: string;
    public azName?: string;
    public endpointDomainName?: string;
    public publicEndpointStatus?: CdmQueryClusterDetailsRepsonsePublicEndpointStatus;
    public isScheduleBootOff?: boolean;
    public namespace?: string;
    public eipId?: string;
    public failedReasons?: FailedReasons;
    public dbuser?: string;
    public links?: Array<ClusterLinks>;
    public clusterMode?: string;
    public task?: ClusterTask;
    public created?: string;
    public statusDetail?: string;
    private 'config_status'?: string;
    public actionProgress?: ActionProgress;
    public name?: string;
    public id?: string;
    public isFrozen?: string;
    public actions?: Array<string>;
    public updated?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withPublicEndpoint(publicEndpoint: string): ShowClusterDetailResponse {
        this['publicEndpoint'] = publicEndpoint;
        return this;
    }
    public withInstances(instances: Array<ClusterDetailInstance>): ShowClusterDetailResponse {
        this['instances'] = instances;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ShowClusterDetailResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): ShowClusterDetailResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): ShowClusterDetailResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCustomerConfig(customerConfig: CustomerConfig): ShowClusterDetailResponse {
        this['customerConfig'] = customerConfig;
        return this;
    }
    public withDatastore(datastore: Datastore): ShowClusterDetailResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withIsAutoOff(isAutoOff: boolean): ShowClusterDetailResponse {
        this['isAutoOff'] = isAutoOff;
        return this;
    }
    public withPublicEndpointDomainName(publicEndpointDomainName: string): ShowClusterDetailResponse {
        this['publicEndpointDomainName'] = publicEndpointDomainName;
        return this;
    }
    public withBakExpectedStartTime(bakExpectedStartTime: string): ShowClusterDetailResponse {
        this['bakExpectedStartTime'] = bakExpectedStartTime;
        return this;
    }
    public withBakKeepDay(bakKeepDay: number): ShowClusterDetailResponse {
        this['bakKeepDay'] = bakKeepDay;
        return this;
    }
    public withMaintainWindow(maintainWindow: CdmQueryClusterDetailsRepsonseMaintainWindow): ShowClusterDetailResponse {
        this['maintainWindow'] = maintainWindow;
        return this;
    }
    public withRecentEvent(recentEvent: number): ShowClusterDetailResponse {
        this['recentEvent'] = recentEvent;
        return this;
    }
    public withFlavorName(flavorName: string): ShowClusterDetailResponse {
        this['flavorName'] = flavorName;
        return this;
    }
    public withAzName(azName: string): ShowClusterDetailResponse {
        this['azName'] = azName;
        return this;
    }
    public withEndpointDomainName(endpointDomainName: string): ShowClusterDetailResponse {
        this['endpointDomainName'] = endpointDomainName;
        return this;
    }
    public withPublicEndpointStatus(publicEndpointStatus: CdmQueryClusterDetailsRepsonsePublicEndpointStatus): ShowClusterDetailResponse {
        this['publicEndpointStatus'] = publicEndpointStatus;
        return this;
    }
    public withIsScheduleBootOff(isScheduleBootOff: boolean): ShowClusterDetailResponse {
        this['isScheduleBootOff'] = isScheduleBootOff;
        return this;
    }
    public withNamespace(namespace: string): ShowClusterDetailResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withEipId(eipId: string): ShowClusterDetailResponse {
        this['eipId'] = eipId;
        return this;
    }
    public withFailedReasons(failedReasons: FailedReasons): ShowClusterDetailResponse {
        this['failedReasons'] = failedReasons;
        return this;
    }
    public withDbuser(dbuser: string): ShowClusterDetailResponse {
        this['dbuser'] = dbuser;
        return this;
    }
    public withLinks(links: Array<ClusterLinks>): ShowClusterDetailResponse {
        this['links'] = links;
        return this;
    }
    public withClusterMode(clusterMode: string): ShowClusterDetailResponse {
        this['clusterMode'] = clusterMode;
        return this;
    }
    public withTask(task: ClusterTask): ShowClusterDetailResponse {
        this['task'] = task;
        return this;
    }
    public withCreated(created: string): ShowClusterDetailResponse {
        this['created'] = created;
        return this;
    }
    public withStatusDetail(statusDetail: string): ShowClusterDetailResponse {
        this['statusDetail'] = statusDetail;
        return this;
    }
    public withConfigStatus(configStatus: string): ShowClusterDetailResponse {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
    public withActionProgress(actionProgress: ActionProgress): ShowClusterDetailResponse {
        this['actionProgress'] = actionProgress;
        return this;
    }
    public withName(name: string): ShowClusterDetailResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ShowClusterDetailResponse {
        this['id'] = id;
        return this;
    }
    public withIsFrozen(isFrozen: string): ShowClusterDetailResponse {
        this['isFrozen'] = isFrozen;
        return this;
    }
    public withActions(actions: Array<string>): ShowClusterDetailResponse {
        this['actions'] = actions;
        return this;
    }
    public withUpdated(updated: string): ShowClusterDetailResponse {
        this['updated'] = updated;
        return this;
    }
    public withStatus(status: string): ShowClusterDetailResponse {
        this['status'] = status;
        return this;
    }
}