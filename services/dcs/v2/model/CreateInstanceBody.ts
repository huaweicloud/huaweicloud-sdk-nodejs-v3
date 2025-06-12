import { BackupPolicy } from './BackupPolicy';
import { BssParam } from './BssParam';
import { ResourceTag } from './ResourceTag';
import { SpecParam } from './SpecParam';


export class CreateInstanceBody {
    public name?: string;
    public engine?: string;
    private 'engine_version'?: string;
    public capacity?: number;
    private 'spec_code'?: string;
    private 'az_codes'?: Array<string>;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'publicip_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    public description?: string;
    private 'enable_ssl'?: boolean;
    private 'private_ip'?: string;
    private 'instance_num'?: number;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    public password?: string;
    private 'no_password_access'?: boolean;
    private 'bss_param'?: BssParam;
    private 'instance_backup_policy'?: BackupPolicy;
    public tags?: Array<ResourceTag>;
    private 'access_user'?: string;
    private 'enable_publicip'?: boolean;
    public port?: number;
    private 'rename_commands'?: object;
    private 'template_id'?: string;
    private 'spec_param'?: SpecParam;
    public constructor(name?: string, engine?: string, capacity?: number, specCode?: string, azCodes?: Array<string>, vpcId?: string, subnetId?: string) { 
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
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
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
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAzCodes(azCodes: Array<string>): CreateInstanceBody {
        this['az_codes'] = azCodes;
        return this;
    }
    public set azCodes(azCodes: Array<string>  | undefined) {
        this['az_codes'] = azCodes;
    }
    public get azCodes(): Array<string> | undefined {
        return this['az_codes'];
    }
    public withVpcId(vpcId: string): CreateInstanceBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withPublicipId(publicipId: string): CreateInstanceBody {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): CreateInstanceBody {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
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
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withPrivateIp(privateIp: string): CreateInstanceBody {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withInstanceNum(instanceNum: number): CreateInstanceBody {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withMaintainBegin(maintainBegin: string): CreateInstanceBody {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): CreateInstanceBody {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
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
    public set noPasswordAccess(noPasswordAccess: boolean  | undefined) {
        this['no_password_access'] = noPasswordAccess;
    }
    public get noPasswordAccess(): boolean | undefined {
        return this['no_password_access'];
    }
    public withBssParam(bssParam: BssParam): CreateInstanceBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParam  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssParam | undefined {
        return this['bss_param'];
    }
    public withInstanceBackupPolicy(instanceBackupPolicy: BackupPolicy): CreateInstanceBody {
        this['instance_backup_policy'] = instanceBackupPolicy;
        return this;
    }
    public set instanceBackupPolicy(instanceBackupPolicy: BackupPolicy  | undefined) {
        this['instance_backup_policy'] = instanceBackupPolicy;
    }
    public get instanceBackupPolicy(): BackupPolicy | undefined {
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
    public set accessUser(accessUser: string  | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser(): string | undefined {
        return this['access_user'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreateInstanceBody {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
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
    public set renameCommands(renameCommands: object  | undefined) {
        this['rename_commands'] = renameCommands;
    }
    public get renameCommands(): object | undefined {
        return this['rename_commands'];
    }
    public withTemplateId(templateId: string): CreateInstanceBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withSpecParam(specParam: SpecParam): CreateInstanceBody {
        this['spec_param'] = specParam;
        return this;
    }
    public set specParam(specParam: SpecParam  | undefined) {
        this['spec_param'] = specParam;
    }
    public get specParam(): SpecParam | undefined {
        return this['spec_param'];
    }
}