import { HtapInstanceListAvailableZones } from './HtapInstanceListAvailableZones';
import { HtapInstanceListInstanceState } from './HtapInstanceListInstanceState';
import { HtapInstanceListNetwork } from './HtapInstanceListNetwork';
import { QueryAction } from './QueryAction';
import { ReadableNodeInfos } from './ReadableNodeInfos';


export class HtapInstanceListInstances {
    public id?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'project_id'?: string;
    private 'instance_state'?: HtapInstanceListInstanceState;
    private 'create_at'?: number;
    private 'is_frozen'?: boolean;
    private 'ha_mode'?: string;
    private 'pay_model'?: string;
    private 'order_id'?: string;
    private 'alter_order_id'?: string;
    private 'data_vip'?: string;
    private 'readable_node_infos'?: Array<ReadableNodeInfos>;
    private 'proxy_ips'?: Array<string>;
    private 'data_vip_v6'?: string;
    public port?: number;
    private 'available_zones'?: Array<HtapInstanceListAvailableZones>;
    private 'current_actions'?: Array<QueryAction>;
    private 'volume_type'?: string;
    private 'server_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'dedicated_resource_id'?: string;
    public network?: HtapInstanceListNetwork;
    private 'ch_master_node_id'?: string;
    private 'node_num'?: number;
    public constructor() { 
    }
    public withId(id: string): HtapInstanceListInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HtapInstanceListInstances {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): HtapInstanceListInstances {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): HtapInstanceListInstances {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withProjectId(projectId: string): HtapInstanceListInstances {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceState(instanceState: HtapInstanceListInstanceState): HtapInstanceListInstances {
        this['instance_state'] = instanceState;
        return this;
    }
    public set instanceState(instanceState: HtapInstanceListInstanceState  | undefined) {
        this['instance_state'] = instanceState;
    }
    public get instanceState(): HtapInstanceListInstanceState | undefined {
        return this['instance_state'];
    }
    public withCreateAt(createAt: number): HtapInstanceListInstances {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withIsFrozen(isFrozen: boolean): HtapInstanceListInstances {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: boolean  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): boolean | undefined {
        return this['is_frozen'];
    }
    public withHaMode(haMode: string): HtapInstanceListInstances {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withPayModel(payModel: string): HtapInstanceListInstances {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withOrderId(orderId: string): HtapInstanceListInstances {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withAlterOrderId(alterOrderId: string): HtapInstanceListInstances {
        this['alter_order_id'] = alterOrderId;
        return this;
    }
    public set alterOrderId(alterOrderId: string  | undefined) {
        this['alter_order_id'] = alterOrderId;
    }
    public get alterOrderId(): string | undefined {
        return this['alter_order_id'];
    }
    public withDataVip(dataVip: string): HtapInstanceListInstances {
        this['data_vip'] = dataVip;
        return this;
    }
    public set dataVip(dataVip: string  | undefined) {
        this['data_vip'] = dataVip;
    }
    public get dataVip(): string | undefined {
        return this['data_vip'];
    }
    public withReadableNodeInfos(readableNodeInfos: Array<ReadableNodeInfos>): HtapInstanceListInstances {
        this['readable_node_infos'] = readableNodeInfos;
        return this;
    }
    public set readableNodeInfos(readableNodeInfos: Array<ReadableNodeInfos>  | undefined) {
        this['readable_node_infos'] = readableNodeInfos;
    }
    public get readableNodeInfos(): Array<ReadableNodeInfos> | undefined {
        return this['readable_node_infos'];
    }
    public withProxyIps(proxyIps: Array<string>): HtapInstanceListInstances {
        this['proxy_ips'] = proxyIps;
        return this;
    }
    public set proxyIps(proxyIps: Array<string>  | undefined) {
        this['proxy_ips'] = proxyIps;
    }
    public get proxyIps(): Array<string> | undefined {
        return this['proxy_ips'];
    }
    public withDataVipV6(dataVipV6: string): HtapInstanceListInstances {
        this['data_vip_v6'] = dataVipV6;
        return this;
    }
    public set dataVipV6(dataVipV6: string  | undefined) {
        this['data_vip_v6'] = dataVipV6;
    }
    public get dataVipV6(): string | undefined {
        return this['data_vip_v6'];
    }
    public withPort(port: number): HtapInstanceListInstances {
        this['port'] = port;
        return this;
    }
    public withAvailableZones(availableZones: Array<HtapInstanceListAvailableZones>): HtapInstanceListInstances {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<HtapInstanceListAvailableZones>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<HtapInstanceListAvailableZones> | undefined {
        return this['available_zones'];
    }
    public withCurrentActions(currentActions: Array<QueryAction>): HtapInstanceListInstances {
        this['current_actions'] = currentActions;
        return this;
    }
    public set currentActions(currentActions: Array<QueryAction>  | undefined) {
        this['current_actions'] = currentActions;
    }
    public get currentActions(): Array<QueryAction> | undefined {
        return this['current_actions'];
    }
    public withVolumeType(volumeType: string): HtapInstanceListInstances {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withServerType(serverType: string): HtapInstanceListInstances {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HtapInstanceListInstances {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDedicatedResourceId(dedicatedResourceId: string): HtapInstanceListInstances {
        this['dedicated_resource_id'] = dedicatedResourceId;
        return this;
    }
    public set dedicatedResourceId(dedicatedResourceId: string  | undefined) {
        this['dedicated_resource_id'] = dedicatedResourceId;
    }
    public get dedicatedResourceId(): string | undefined {
        return this['dedicated_resource_id'];
    }
    public withNetwork(network: HtapInstanceListNetwork): HtapInstanceListInstances {
        this['network'] = network;
        return this;
    }
    public withChMasterNodeId(chMasterNodeId: string): HtapInstanceListInstances {
        this['ch_master_node_id'] = chMasterNodeId;
        return this;
    }
    public set chMasterNodeId(chMasterNodeId: string  | undefined) {
        this['ch_master_node_id'] = chMasterNodeId;
    }
    public get chMasterNodeId(): string | undefined {
        return this['ch_master_node_id'];
    }
    public withNodeNum(nodeNum: number): HtapInstanceListInstances {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
}