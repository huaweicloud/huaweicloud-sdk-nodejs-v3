import { ClickHouseNodeInfoDatastore } from './ClickHouseNodeInfoDatastore';
import { ClickHouseNodeInfoVolume } from './ClickHouseNodeInfoVolume';


export class ClickHouseNodeInfo {
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    public period?: string;
    public volume?: ClickHouseNodeInfoVolume;
    public cpu?: string;
    public mem?: string;
    public datastore?: ClickHouseNodeInfoDatastore;
    public priority?: number;
    private 'frozen_flag'?: number;
    private 'db_port'?: number;
    private 'pay_model'?: string;
    private 'order_id'?: string;
    private 'traffic_ip'?: string;
    private 'traffic_ipv6'?: string;
    private 'traffic_vip'?: string;
    private 'traffic_vipv6'?: string;
    private 'az_code'?: string;
    private 'az_description'?: string;
    private 'az_type'?: string;
    public region?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'flavor_id'?: string;
    private 'flavor_ref'?: string;
    private 'iass_flavor_ref'?: string;
    private 'max_connections'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'need_restart'?: boolean;
    private 'sg_id'?: string;
    public constructor(id?: string, name?: string, type?: string, status?: string, volume?: ClickHouseNodeInfoVolume, cpu?: string, mem?: string, datastore?: ClickHouseNodeInfoDatastore, priority?: number, frozenFlag?: number, dbPort?: number, payModel?: string, trafficIp?: string, azCode?: string, azDescription?: string, azType?: string, region?: string, createAt?: number, updateAt?: number, flavorId?: string, flavorRef?: string, iassFlavorRef?: string, maxConnections?: string, vpcId?: string, subnetId?: string, needRestart?: boolean, sgId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['status'] = status;
        this['volume'] = volume;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['datastore'] = datastore;
        this['priority'] = priority;
        this['frozen_flag'] = frozenFlag;
        this['db_port'] = dbPort;
        this['pay_model'] = payModel;
        this['traffic_ip'] = trafficIp;
        this['az_code'] = azCode;
        this['az_description'] = azDescription;
        this['az_type'] = azType;
        this['region'] = region;
        this['create_at'] = createAt;
        this['update_at'] = updateAt;
        this['flavor_id'] = flavorId;
        this['flavor_ref'] = flavorRef;
        this['iass_flavor_ref'] = iassFlavorRef;
        this['max_connections'] = maxConnections;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['need_restart'] = needRestart;
        this['sg_id'] = sgId;
    }
    public withId(id: string): ClickHouseNodeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClickHouseNodeInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ClickHouseNodeInfo {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ClickHouseNodeInfo {
        this['status'] = status;
        return this;
    }
    public withPeriod(period: string): ClickHouseNodeInfo {
        this['period'] = period;
        return this;
    }
    public withVolume(volume: ClickHouseNodeInfoVolume): ClickHouseNodeInfo {
        this['volume'] = volume;
        return this;
    }
    public withCpu(cpu: string): ClickHouseNodeInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): ClickHouseNodeInfo {
        this['mem'] = mem;
        return this;
    }
    public withDatastore(datastore: ClickHouseNodeInfoDatastore): ClickHouseNodeInfo {
        this['datastore'] = datastore;
        return this;
    }
    public withPriority(priority: number): ClickHouseNodeInfo {
        this['priority'] = priority;
        return this;
    }
    public withFrozenFlag(frozenFlag: number): ClickHouseNodeInfo {
        this['frozen_flag'] = frozenFlag;
        return this;
    }
    public set frozenFlag(frozenFlag: number  | undefined) {
        this['frozen_flag'] = frozenFlag;
    }
    public get frozenFlag(): number | undefined {
        return this['frozen_flag'];
    }
    public withDbPort(dbPort: number): ClickHouseNodeInfo {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withPayModel(payModel: string): ClickHouseNodeInfo {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withOrderId(orderId: string): ClickHouseNodeInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTrafficIp(trafficIp: string): ClickHouseNodeInfo {
        this['traffic_ip'] = trafficIp;
        return this;
    }
    public set trafficIp(trafficIp: string  | undefined) {
        this['traffic_ip'] = trafficIp;
    }
    public get trafficIp(): string | undefined {
        return this['traffic_ip'];
    }
    public withTrafficIpv6(trafficIpv6: string): ClickHouseNodeInfo {
        this['traffic_ipv6'] = trafficIpv6;
        return this;
    }
    public set trafficIpv6(trafficIpv6: string  | undefined) {
        this['traffic_ipv6'] = trafficIpv6;
    }
    public get trafficIpv6(): string | undefined {
        return this['traffic_ipv6'];
    }
    public withTrafficVip(trafficVip: string): ClickHouseNodeInfo {
        this['traffic_vip'] = trafficVip;
        return this;
    }
    public set trafficVip(trafficVip: string  | undefined) {
        this['traffic_vip'] = trafficVip;
    }
    public get trafficVip(): string | undefined {
        return this['traffic_vip'];
    }
    public withTrafficVipv6(trafficVipv6: string): ClickHouseNodeInfo {
        this['traffic_vipv6'] = trafficVipv6;
        return this;
    }
    public set trafficVipv6(trafficVipv6: string  | undefined) {
        this['traffic_vipv6'] = trafficVipv6;
    }
    public get trafficVipv6(): string | undefined {
        return this['traffic_vipv6'];
    }
    public withAzCode(azCode: string): ClickHouseNodeInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withAzDescription(azDescription: string): ClickHouseNodeInfo {
        this['az_description'] = azDescription;
        return this;
    }
    public set azDescription(azDescription: string  | undefined) {
        this['az_description'] = azDescription;
    }
    public get azDescription(): string | undefined {
        return this['az_description'];
    }
    public withAzType(azType: string): ClickHouseNodeInfo {
        this['az_type'] = azType;
        return this;
    }
    public set azType(azType: string  | undefined) {
        this['az_type'] = azType;
    }
    public get azType(): string | undefined {
        return this['az_type'];
    }
    public withRegion(region: string): ClickHouseNodeInfo {
        this['region'] = region;
        return this;
    }
    public withCreateAt(createAt: number): ClickHouseNodeInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): ClickHouseNodeInfo {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withFlavorId(flavorId: string): ClickHouseNodeInfo {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorRef(flavorRef: string): ClickHouseNodeInfo {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withIassFlavorRef(iassFlavorRef: string): ClickHouseNodeInfo {
        this['iass_flavor_ref'] = iassFlavorRef;
        return this;
    }
    public set iassFlavorRef(iassFlavorRef: string  | undefined) {
        this['iass_flavor_ref'] = iassFlavorRef;
    }
    public get iassFlavorRef(): string | undefined {
        return this['iass_flavor_ref'];
    }
    public withMaxConnections(maxConnections: string): ClickHouseNodeInfo {
        this['max_connections'] = maxConnections;
        return this;
    }
    public set maxConnections(maxConnections: string  | undefined) {
        this['max_connections'] = maxConnections;
    }
    public get maxConnections(): string | undefined {
        return this['max_connections'];
    }
    public withVpcId(vpcId: string): ClickHouseNodeInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ClickHouseNodeInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withNeedRestart(needRestart: boolean): ClickHouseNodeInfo {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): boolean | undefined {
        return this['need_restart'];
    }
    public withSgId(sgId: string): ClickHouseNodeInfo {
        this['sg_id'] = sgId;
        return this;
    }
    public set sgId(sgId: string  | undefined) {
        this['sg_id'] = sgId;
    }
    public get sgId(): string | undefined {
        return this['sg_id'];
    }
}