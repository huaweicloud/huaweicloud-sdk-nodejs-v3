import { JobBaseInfo } from './JobBaseInfo';
import { JobEndpointInfo } from './JobEndpointInfo';
import { JobNodeInfo } from './JobNodeInfo';
import { PeriodOrderInfo } from './PeriodOrderInfo';
import { PublicIpConfig } from './PublicIpConfig';


export class CreateJobReq {
    private 'base_info'?: JobBaseInfo;
    private 'source_endpoint'?: Array<JobEndpointInfo>;
    private 'target_endpoint'?: Array<JobEndpointInfo>;
    private 'period_order'?: PeriodOrderInfo;
    private 'node_info'?: JobNodeInfo;
    private 'public_ip_list'?: Array<PublicIpConfig>;
    public constructor(baseInfo?: JobBaseInfo, sourceEndpoint?: Array<JobEndpointInfo>, targetEndpoint?: Array<JobEndpointInfo>, nodeInfo?: JobNodeInfo) { 
        this['base_info'] = baseInfo;
        this['source_endpoint'] = sourceEndpoint;
        this['target_endpoint'] = targetEndpoint;
        this['node_info'] = nodeInfo;
    }
    public withBaseInfo(baseInfo: JobBaseInfo): CreateJobReq {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: JobBaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): JobBaseInfo | undefined {
        return this['base_info'];
    }
    public withSourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>): CreateJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>  | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint(): Array<JobEndpointInfo> | undefined {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Array<JobEndpointInfo>): CreateJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Array<JobEndpointInfo>  | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint(): Array<JobEndpointInfo> | undefined {
        return this['target_endpoint'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): CreateJobReq {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo  | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder(): PeriodOrderInfo | undefined {
        return this['period_order'];
    }
    public withNodeInfo(nodeInfo: JobNodeInfo): CreateJobReq {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: JobNodeInfo  | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo(): JobNodeInfo | undefined {
        return this['node_info'];
    }
    public withPublicIpList(publicIpList: Array<PublicIpConfig>): CreateJobReq {
        this['public_ip_list'] = publicIpList;
        return this;
    }
    public set publicIpList(publicIpList: Array<PublicIpConfig>  | undefined) {
        this['public_ip_list'] = publicIpList;
    }
    public get publicIpList(): Array<PublicIpConfig> | undefined {
        return this['public_ip_list'];
    }
}