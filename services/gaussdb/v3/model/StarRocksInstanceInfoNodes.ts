import { ParamGroup } from './ParamGroup';
import { QueryAction } from './QueryAction';
import { StarRocksInstanceInfoDatastore } from './StarRocksInstanceInfoDatastore';
import { StarRocksInstanceInfoVolume } from './StarRocksInstanceInfoVolume';


export class StarRocksInstanceInfoNodes {
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    public period?: string;
    public volume?: StarRocksInstanceInfoVolume;
    public cpu?: string;
    public mem?: string;
    public datastore?: StarRocksInstanceInfoDatastore;
    public actions?: Array<QueryAction>;
    public priority?: number;
    private 'frozen_flag'?: number;
    private 'db_port'?: number;
    private 'pay_model'?: string;
    private 'order_id'?: string;
    private 'traffic_ip'?: string;
    private 'traffic_ipv6'?: string;
    private 'az_code'?: string;
    private 'az_description'?: string;
    private 'az_type'?: string;
    private 'region_code'?: string;
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
    private 'param_group'?: { [key: string]: ParamGroup; };
    public constructor() { 
    }
    public withId(id: string): StarRocksInstanceInfoNodes {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StarRocksInstanceInfoNodes {
        this['name'] = name;
        return this;
    }
    public withType(type: string): StarRocksInstanceInfoNodes {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): StarRocksInstanceInfoNodes {
        this['status'] = status;
        return this;
    }
    public withPeriod(period: string): StarRocksInstanceInfoNodes {
        this['period'] = period;
        return this;
    }
    public withVolume(volume: StarRocksInstanceInfoVolume): StarRocksInstanceInfoNodes {
        this['volume'] = volume;
        return this;
    }
    public withCpu(cpu: string): StarRocksInstanceInfoNodes {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): StarRocksInstanceInfoNodes {
        this['mem'] = mem;
        return this;
    }
    public withDatastore(datastore: StarRocksInstanceInfoDatastore): StarRocksInstanceInfoNodes {
        this['datastore'] = datastore;
        return this;
    }
    public withActions(actions: Array<QueryAction>): StarRocksInstanceInfoNodes {
        this['actions'] = actions;
        return this;
    }
    public withPriority(priority: number): StarRocksInstanceInfoNodes {
        this['priority'] = priority;
        return this;
    }
    public withFrozenFlag(frozenFlag: number): StarRocksInstanceInfoNodes {
        this['frozen_flag'] = frozenFlag;
        return this;
    }
    public set frozenFlag(frozenFlag: number  | undefined) {
        this['frozen_flag'] = frozenFlag;
    }
    public get frozenFlag(): number | undefined {
        return this['frozen_flag'];
    }
    public withDbPort(dbPort: number): StarRocksInstanceInfoNodes {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withPayModel(payModel: string): StarRocksInstanceInfoNodes {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: string  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): string | undefined {
        return this['pay_model'];
    }
    public withOrderId(orderId: string): StarRocksInstanceInfoNodes {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTrafficIp(trafficIp: string): StarRocksInstanceInfoNodes {
        this['traffic_ip'] = trafficIp;
        return this;
    }
    public set trafficIp(trafficIp: string  | undefined) {
        this['traffic_ip'] = trafficIp;
    }
    public get trafficIp(): string | undefined {
        return this['traffic_ip'];
    }
    public withTrafficIpv6(trafficIpv6: string): StarRocksInstanceInfoNodes {
        this['traffic_ipv6'] = trafficIpv6;
        return this;
    }
    public set trafficIpv6(trafficIpv6: string  | undefined) {
        this['traffic_ipv6'] = trafficIpv6;
    }
    public get trafficIpv6(): string | undefined {
        return this['traffic_ipv6'];
    }
    public withAzCode(azCode: string): StarRocksInstanceInfoNodes {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withAzDescription(azDescription: string): StarRocksInstanceInfoNodes {
        this['az_description'] = azDescription;
        return this;
    }
    public set azDescription(azDescription: string  | undefined) {
        this['az_description'] = azDescription;
    }
    public get azDescription(): string | undefined {
        return this['az_description'];
    }
    public withAzType(azType: string): StarRocksInstanceInfoNodes {
        this['az_type'] = azType;
        return this;
    }
    public set azType(azType: string  | undefined) {
        this['az_type'] = azType;
    }
    public get azType(): string | undefined {
        return this['az_type'];
    }
    public withRegionCode(regionCode: string): StarRocksInstanceInfoNodes {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string  | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode(): string | undefined {
        return this['region_code'];
    }
    public withCreateAt(createAt: number): StarRocksInstanceInfoNodes {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): StarRocksInstanceInfoNodes {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withFlavorId(flavorId: string): StarRocksInstanceInfoNodes {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorRef(flavorRef: string): StarRocksInstanceInfoNodes {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withIassFlavorRef(iassFlavorRef: string): StarRocksInstanceInfoNodes {
        this['iass_flavor_ref'] = iassFlavorRef;
        return this;
    }
    public set iassFlavorRef(iassFlavorRef: string  | undefined) {
        this['iass_flavor_ref'] = iassFlavorRef;
    }
    public get iassFlavorRef(): string | undefined {
        return this['iass_flavor_ref'];
    }
    public withMaxConnections(maxConnections: string): StarRocksInstanceInfoNodes {
        this['max_connections'] = maxConnections;
        return this;
    }
    public set maxConnections(maxConnections: string  | undefined) {
        this['max_connections'] = maxConnections;
    }
    public get maxConnections(): string | undefined {
        return this['max_connections'];
    }
    public withVpcId(vpcId: string): StarRocksInstanceInfoNodes {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): StarRocksInstanceInfoNodes {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withNeedRestart(needRestart: boolean): StarRocksInstanceInfoNodes {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): boolean | undefined {
        return this['need_restart'];
    }
    public withSgId(sgId: string): StarRocksInstanceInfoNodes {
        this['sg_id'] = sgId;
        return this;
    }
    public set sgId(sgId: string  | undefined) {
        this['sg_id'] = sgId;
    }
    public get sgId(): string | undefined {
        return this['sg_id'];
    }
    public withParamGroup(paramGroup: { [key: string]: ParamGroup; }): StarRocksInstanceInfoNodes {
        this['param_group'] = paramGroup;
        return this;
    }
    public set paramGroup(paramGroup: { [key: string]: ParamGroup; }  | undefined) {
        this['param_group'] = paramGroup;
    }
    public get paramGroup(): { [key: string]: ParamGroup; } | undefined {
        return this['param_group'];
    }
}