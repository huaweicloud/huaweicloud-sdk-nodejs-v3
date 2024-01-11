import { CustomizedDns } from './CustomizedDns';
import { KafkaSecurity } from './KafkaSecurity';


export class TestEndPoint {
    public id?: string;
    private 'net_type'?: TestEndPointNetTypeEnum | string;
    private 'db_type'?: TestEndPointDbTypeEnum | string;
    public ip?: string;
    private 'db_port'?: number;
    private 'inst_id'?: string;
    private 'db_user'?: string;
    private 'db_password'?: string;
    private 'ssl_link'?: boolean;
    private 'ssl_cert_key'?: string;
    private 'ssl_cert_name'?: string;
    private 'ssl_cert_check_sum'?: string;
    private 'ssl_cert_password'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'end_point_type'?: TestEndPointEndPointTypeEnum | string;
    public region?: string;
    private 'project_id'?: string;
    private 'db_name'?: string;
    private 'kafka_security_config'?: KafkaSecurity;
    private 'customized_dns'?: CustomizedDns;
    public constructor(id?: string, netType?: string, dbType?: string, ip?: string, dbUser?: string, dbPassword?: string, endPointType?: string) { 
        this['id'] = id;
        this['net_type'] = netType;
        this['db_type'] = dbType;
        this['ip'] = ip;
        this['db_user'] = dbUser;
        this['db_password'] = dbPassword;
        this['end_point_type'] = endPointType;
    }
    public withId(id: string): TestEndPoint {
        this['id'] = id;
        return this;
    }
    public withNetType(netType: TestEndPointNetTypeEnum | string): TestEndPoint {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: TestEndPointNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): TestEndPointNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withDbType(dbType: TestEndPointDbTypeEnum | string): TestEndPoint {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: TestEndPointDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): TestEndPointDbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withIp(ip: string): TestEndPoint {
        this['ip'] = ip;
        return this;
    }
    public withDbPort(dbPort: number): TestEndPoint {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withInstId(instId: string): TestEndPoint {
        this['inst_id'] = instId;
        return this;
    }
    public set instId(instId: string  | undefined) {
        this['inst_id'] = instId;
    }
    public get instId(): string | undefined {
        return this['inst_id'];
    }
    public withDbUser(dbUser: string): TestEndPoint {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withDbPassword(dbPassword: string): TestEndPoint {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withSslLink(sslLink: boolean): TestEndPoint {
        this['ssl_link'] = sslLink;
        return this;
    }
    public set sslLink(sslLink: boolean  | undefined) {
        this['ssl_link'] = sslLink;
    }
    public get sslLink(): boolean | undefined {
        return this['ssl_link'];
    }
    public withSslCertKey(sslCertKey: string): TestEndPoint {
        this['ssl_cert_key'] = sslCertKey;
        return this;
    }
    public set sslCertKey(sslCertKey: string  | undefined) {
        this['ssl_cert_key'] = sslCertKey;
    }
    public get sslCertKey(): string | undefined {
        return this['ssl_cert_key'];
    }
    public withSslCertName(sslCertName: string): TestEndPoint {
        this['ssl_cert_name'] = sslCertName;
        return this;
    }
    public set sslCertName(sslCertName: string  | undefined) {
        this['ssl_cert_name'] = sslCertName;
    }
    public get sslCertName(): string | undefined {
        return this['ssl_cert_name'];
    }
    public withSslCertCheckSum(sslCertCheckSum: string): TestEndPoint {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
        return this;
    }
    public set sslCertCheckSum(sslCertCheckSum: string  | undefined) {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
    }
    public get sslCertCheckSum(): string | undefined {
        return this['ssl_cert_check_sum'];
    }
    public withSslCertPassword(sslCertPassword: string): TestEndPoint {
        this['ssl_cert_password'] = sslCertPassword;
        return this;
    }
    public set sslCertPassword(sslCertPassword: string  | undefined) {
        this['ssl_cert_password'] = sslCertPassword;
    }
    public get sslCertPassword(): string | undefined {
        return this['ssl_cert_password'];
    }
    public withVpcId(vpcId: string): TestEndPoint {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): TestEndPoint {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withEndPointType(endPointType: TestEndPointEndPointTypeEnum | string): TestEndPoint {
        this['end_point_type'] = endPointType;
        return this;
    }
    public set endPointType(endPointType: TestEndPointEndPointTypeEnum | string  | undefined) {
        this['end_point_type'] = endPointType;
    }
    public get endPointType(): TestEndPointEndPointTypeEnum | string | undefined {
        return this['end_point_type'];
    }
    public withRegion(region: string): TestEndPoint {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): TestEndPoint {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDbName(dbName: string): TestEndPoint {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withKafkaSecurityConfig(kafkaSecurityConfig: KafkaSecurity): TestEndPoint {
        this['kafka_security_config'] = kafkaSecurityConfig;
        return this;
    }
    public set kafkaSecurityConfig(kafkaSecurityConfig: KafkaSecurity  | undefined) {
        this['kafka_security_config'] = kafkaSecurityConfig;
    }
    public get kafkaSecurityConfig(): KafkaSecurity | undefined {
        return this['kafka_security_config'];
    }
    public withCustomizedDns(customizedDns: CustomizedDns): TestEndPoint {
        this['customized_dns'] = customizedDns;
        return this;
    }
    public set customizedDns(customizedDns: CustomizedDns  | undefined) {
        this['customized_dns'] = customizedDns;
    }
    public get customizedDns(): CustomizedDns | undefined {
        return this['customized_dns'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TestEndPointNetTypeEnum {
    VPN = 'vpn',
    VPC = 'vpc',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum TestEndPointDbTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    GAUSSDBV5 = 'gaussdbv5',
    POSTGRESQL = 'postgresql',
    KAFKA = 'kafka',
    GAUSSDBV5HA = 'gaussdbv5ha',
    TAURUS = 'taurus'
}
/**
    * @export
    * @enum {string}
    */
export enum TestEndPointEndPointTypeEnum {
    SO = 'so',
    TA = 'ta'
}
