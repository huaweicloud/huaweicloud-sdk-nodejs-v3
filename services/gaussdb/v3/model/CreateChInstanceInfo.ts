import { ClickHouseEngineInfo } from './ClickHouseEngineInfo';
import { CreateChInstanceInfoPayInfo } from './CreateChInstanceInfoPayInfo';
import { CreateChInstanceInfoTagsInfo } from './CreateChInstanceInfoTagsInfo';


export class CreateChInstanceInfo {
    public id?: string;
    private 'az_code'?: string;
    private 'az_mode'?: string;
    public name?: string;
    public engine?: ClickHouseEngineInfo;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'db_user'?: string;
    public port?: number;
    private 'ha_mode'?: string;
    private 'pay_info'?: CreateChInstanceInfoPayInfo;
    private 'ssl_option'?: boolean;
    public status?: string;
    public region?: string;
    private 'tags_info'?: CreateChInstanceInfoTagsInfo;
    public constructor(id?: string, azCode?: string, azMode?: string, name?: string, engine?: ClickHouseEngineInfo, vpcId?: string, securityGroupId?: string, subnetId?: string, dbUser?: string, port?: number, haMode?: string, payInfo?: CreateChInstanceInfoPayInfo, sslOption?: boolean, status?: string, region?: string, tagsInfo?: CreateChInstanceInfoTagsInfo) { 
        this['id'] = id;
        this['az_code'] = azCode;
        this['az_mode'] = azMode;
        this['name'] = name;
        this['engine'] = engine;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
        this['db_user'] = dbUser;
        this['port'] = port;
        this['ha_mode'] = haMode;
        this['pay_info'] = payInfo;
        this['ssl_option'] = sslOption;
        this['status'] = status;
        this['region'] = region;
        this['tags_info'] = tagsInfo;
    }
    public withId(id: string): CreateChInstanceInfo {
        this['id'] = id;
        return this;
    }
    public withAzCode(azCode: string): CreateChInstanceInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withAzMode(azMode: string): CreateChInstanceInfo {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): string | undefined {
        return this['az_mode'];
    }
    public withName(name: string): CreateChInstanceInfo {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: ClickHouseEngineInfo): CreateChInstanceInfo {
        this['engine'] = engine;
        return this;
    }
    public withVpcId(vpcId: string): CreateChInstanceInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateChInstanceInfo {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CreateChInstanceInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDbUser(dbUser: string): CreateChInstanceInfo {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withPort(port: number): CreateChInstanceInfo {
        this['port'] = port;
        return this;
    }
    public withHaMode(haMode: string): CreateChInstanceInfo {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withPayInfo(payInfo: CreateChInstanceInfoPayInfo): CreateChInstanceInfo {
        this['pay_info'] = payInfo;
        return this;
    }
    public set payInfo(payInfo: CreateChInstanceInfoPayInfo  | undefined) {
        this['pay_info'] = payInfo;
    }
    public get payInfo(): CreateChInstanceInfoPayInfo | undefined {
        return this['pay_info'];
    }
    public withSslOption(sslOption: boolean): CreateChInstanceInfo {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: boolean  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): boolean | undefined {
        return this['ssl_option'];
    }
    public withStatus(status: string): CreateChInstanceInfo {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): CreateChInstanceInfo {
        this['region'] = region;
        return this;
    }
    public withTagsInfo(tagsInfo: CreateChInstanceInfoTagsInfo): CreateChInstanceInfo {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: CreateChInstanceInfoTagsInfo  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): CreateChInstanceInfoTagsInfo | undefined {
        return this['tags_info'];
    }
}