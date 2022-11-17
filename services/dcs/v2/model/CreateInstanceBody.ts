import { BackupPolicy } from './BackupPolicy';
import { BssParam } from './BssParam';
import { ResourceTag } from './ResourceTag';


export class CreateInstanceBody {
    public name: string;
    public engine: string;
    private 'engine_version'?: string | undefined;
    public capacity: number;
    private 'spec_code': string | undefined;
    private 'az_codes': Array<string> | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'publicip_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'enterprise_project_name'?: string | undefined;
    public description?: string;
    private 'enable_ssl'?: boolean | undefined;
    private 'private_ip'?: string | undefined;
    private 'instance_num'?: number | undefined;
    private 'maintain_begin'?: string | undefined;
    private 'maintain_end'?: string | undefined;
    public password?: string;
    private 'no_password_access'?: boolean | undefined;
    private 'bss_param'?: BssParam | undefined;
    private 'instance_backup_policy'?: BackupPolicy | undefined;
    public tags?: Array<ResourceTag>;
    private 'access_user'?: string | undefined;
    private 'enable_publicip'?: boolean | undefined;
    public port?: number;
    private 'rename_commands'?: object | undefined;
    public constructor(name?: any, engine?: any, capacity?: any, specCode?: any, azCodes?: any, vpcId?: any, subnetId?: any) { 
        this['name'] = name;
        this['engine'] = engine;
        this['capacity'] = capacity;
        this['spec_code'] = specCode;
        this['az_codes'] = azCodes;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withName(name: string): CreateInstanceBody {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: string): CreateInstanceBody {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): CreateInstanceBody {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withCapacity(capacity: number): CreateInstanceBody {
        this['capacity'] = capacity;
        return this;
    }
    public withSpecCode(specCode: string): CreateInstanceBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withAzCodes(azCodes: Array<string>): CreateInstanceBody {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: Array<string> | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes() {
        return this['az_codes'];
    }
    public withVpcId(vpcId: string): CreateInstanceBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withPublicipId(publicipId: string): CreateInstanceBody {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): CreateInstanceBody {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName() {
        return this['enterprise_project_name'];
    }
    public withDescription(description: string): CreateInstanceBody {
        this['description'] = description;
        return this;
    }
    public withEnableSsl(enableSsl: boolean): CreateInstanceBody {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl() {
        return this['enable_ssl'];
    }
    public withPrivateIp(privateIp: string): CreateInstanceBody {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp() {
        return this['private_ip'];
    }
    public withInstanceNum(instanceNum: number): CreateInstanceBody {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum() {
        return this['instance_num'];
    }
    public withMaintainBegin(maintainBegin: string): CreateInstanceBody {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): CreateInstanceBody {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withPassword(password: string): CreateInstanceBody {
        this['password'] = password;
        return this;
    }
    public withNoPasswordAccess(noPasswordAccess: boolean): CreateInstanceBody {
        this['no_password_access'] = noPasswordAccess;
        return this;
    }
    public set noPasswordAccess(noPasswordAccess: boolean | undefined) {
        this['no_password_access'] = noPasswordAccess;
    }
    public get noPasswordAccess() {
        return this['no_password_access'];
    }
    public withBssParam(bssParam: BssParam): CreateInstanceBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParam | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam() {
        return this['bss_param'];
    }
    public withInstanceBackupPolicy(instanceBackupPolicy: BackupPolicy): CreateInstanceBody {
        this['instance_backup_policy'] = instanceBackupPolicy;
        return this;
    }
    public set instanceBackupPolicy(instanceBackupPolicy: BackupPolicy | undefined) {
        this['instance_backup_policy'] = instanceBackupPolicy;
    }
    public get instanceBackupPolicy() {
        return this['instance_backup_policy'];
    }
    public withTags(tags: Array<ResourceTag>): CreateInstanceBody {
        this['tags'] = tags;
        return this;
    }
    public withAccessUser(accessUser: string): CreateInstanceBody {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreateInstanceBody {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPort(port: number): CreateInstanceBody {
        this['port'] = port;
        return this;
    }
    public withRenameCommands(renameCommands: object): CreateInstanceBody {
        this['rename_commands'] = renameCommands;
        return this;
    }
    public set renameCommands(renameCommands: object | undefined) {
        this['rename_commands'] = renameCommands;
    }
    public get renameCommands() {
        return this['rename_commands'];
    }
}