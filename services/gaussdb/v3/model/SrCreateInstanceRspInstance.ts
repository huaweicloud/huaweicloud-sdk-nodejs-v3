import { SrCreateInstanceRspInstanceEngine } from './SrCreateInstanceRspInstanceEngine';
import { SrCreateInstanceRspInstancePayInfo } from './SrCreateInstanceRspInstancePayInfo';
import { SrCreateInstanceRspInstanceTagsInfo } from './SrCreateInstanceRspInstanceTagsInfo';


export class SrCreateInstanceRspInstance {
    public id?: string;
    private 'az_code'?: string;
    private 'az_mode'?: string;
    public name?: string;
    public engine?: SrCreateInstanceRspInstanceEngine;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'sub_net_id'?: string;
    private 'db_user'?: string;
    public port?: number;
    private 'ha_mode'?: string;
    private 'pay_info'?: SrCreateInstanceRspInstancePayInfo;
    private 'enable_ssl'?: boolean;
    public status?: string;
    public region?: string;
    private 'tags_info'?: SrCreateInstanceRspInstanceTagsInfo;
    public constructor() { 
    }
    public withId(id: string): SrCreateInstanceRspInstance {
        this['id'] = id;
        return this;
    }
    public withAzCode(azCode: string): SrCreateInstanceRspInstance {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withAzMode(azMode: string): SrCreateInstanceRspInstance {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): string | undefined {
        return this['az_mode'];
    }
    public withName(name: string): SrCreateInstanceRspInstance {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: SrCreateInstanceRspInstanceEngine): SrCreateInstanceRspInstance {
        this['engine'] = engine;
        return this;
    }
    public withVpcId(vpcId: string): SrCreateInstanceRspInstance {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): SrCreateInstanceRspInstance {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubNetId(subNetId: string): SrCreateInstanceRspInstance {
        this['sub_net_id'] = subNetId;
        return this;
    }
    public set subNetId(subNetId: string  | undefined) {
        this['sub_net_id'] = subNetId;
    }
    public get subNetId(): string | undefined {
        return this['sub_net_id'];
    }
    public withDbUser(dbUser: string): SrCreateInstanceRspInstance {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withPort(port: number): SrCreateInstanceRspInstance {
        this['port'] = port;
        return this;
    }
    public withHaMode(haMode: string): SrCreateInstanceRspInstance {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withPayInfo(payInfo: SrCreateInstanceRspInstancePayInfo): SrCreateInstanceRspInstance {
        this['pay_info'] = payInfo;
        return this;
    }
    public set payInfo(payInfo: SrCreateInstanceRspInstancePayInfo  | undefined) {
        this['pay_info'] = payInfo;
    }
    public get payInfo(): SrCreateInstanceRspInstancePayInfo | undefined {
        return this['pay_info'];
    }
    public withEnableSsl(enableSsl: boolean): SrCreateInstanceRspInstance {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withStatus(status: string): SrCreateInstanceRspInstance {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): SrCreateInstanceRspInstance {
        this['region'] = region;
        return this;
    }
    public withTagsInfo(tagsInfo: SrCreateInstanceRspInstanceTagsInfo): SrCreateInstanceRspInstance {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: SrCreateInstanceRspInstanceTagsInfo  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): SrCreateInstanceRspInstanceTagsInfo | undefined {
        return this['tags_info'];
    }
}