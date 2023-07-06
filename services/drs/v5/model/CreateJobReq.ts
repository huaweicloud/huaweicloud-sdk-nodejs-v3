import { JobBaseInfo } from './JobBaseInfo';
import { JobEndpointInfo } from './JobEndpointInfo';
import { JobNodeInfo } from './JobNodeInfo';
import { PeriodOrderInfo } from './PeriodOrderInfo';


export class CreateJobReq {
    private 'base_info': JobBaseInfo | undefined;
    private 'source_endpoint': Array<JobEndpointInfo> | undefined;
    private 'target_endpoint': Array<JobEndpointInfo> | undefined;
    private 'period_order'?: PeriodOrderInfo | undefined;
    private 'node_info': JobNodeInfo | undefined;
    public constructor(baseInfo?: any, sourceEndpoint?: any, targetEndpoint?: any, nodeInfo?: any) { 
        this['base_info'] = baseInfo;
        this['source_endpoint'] = sourceEndpoint;
        this['target_endpoint'] = targetEndpoint;
        this['node_info'] = nodeInfo;
    }
    public withBaseInfo(baseInfo: JobBaseInfo): CreateJobReq {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: JobBaseInfo | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo() {
        return this['base_info'];
    }
    public withSourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>): CreateJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Array<JobEndpointInfo> | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint() {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Array<JobEndpointInfo>): CreateJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Array<JobEndpointInfo> | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint() {
        return this['target_endpoint'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): CreateJobReq {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder() {
        return this['period_order'];
    }
    public withNodeInfo(nodeInfo: JobNodeInfo): CreateJobReq {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: JobNodeInfo | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo() {
        return this['node_info'];
    }
}