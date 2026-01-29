import { Nics } from './Nics';
import { PublicIp } from './PublicIp';
import { SgObject } from './SgObject';
import { TemplateDisk } from './TemplateDisk';
import { VpcObject } from './VpcObject';


export class TemplateRequest {
    public name?: string;
    private 'is_template'?: boolean;
    public region?: string;
    public projectid?: string;
    private 'target_server_name'?: string;
    private 'availability_zone'?: string;
    public volumetype?: string;
    public flavor?: string;
    public vpc?: VpcObject;
    public nics?: Array<Nics>;
    private 'security_groups'?: Array<SgObject>;
    public publicip?: PublicIp;
    public disk?: Array<TemplateDisk>;
    private 'data_volume_type'?: string;
    private 'target_password'?: string;
    private 'image_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): TemplateRequest {
        this['name'] = name;
        return this;
    }
    public withIsTemplate(isTemplate: boolean): TemplateRequest {
        this['is_template'] = isTemplate;
        return this;
    }
    public set isTemplate(isTemplate: boolean  | undefined) {
        this['is_template'] = isTemplate;
    }
    public get isTemplate(): boolean | undefined {
        return this['is_template'];
    }
    public withRegion(region: string): TemplateRequest {
        this['region'] = region;
        return this;
    }
    public withProjectid(projectid: string): TemplateRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withTargetServerName(targetServerName: string): TemplateRequest {
        this['target_server_name'] = targetServerName;
        return this;
    }
    public set targetServerName(targetServerName: string  | undefined) {
        this['target_server_name'] = targetServerName;
    }
    public get targetServerName(): string | undefined {
        return this['target_server_name'];
    }
    public withAvailabilityZone(availabilityZone: string): TemplateRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVolumetype(volumetype: string): TemplateRequest {
        this['volumetype'] = volumetype;
        return this;
    }
    public withFlavor(flavor: string): TemplateRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withVpc(vpc: VpcObject): TemplateRequest {
        this['vpc'] = vpc;
        return this;
    }
    public withNics(nics: Array<Nics>): TemplateRequest {
        this['nics'] = nics;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SgObject>): TemplateRequest {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SgObject>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SgObject> | undefined {
        return this['security_groups'];
    }
    public withPublicip(publicip: PublicIp): TemplateRequest {
        this['publicip'] = publicip;
        return this;
    }
    public withDisk(disk: Array<TemplateDisk>): TemplateRequest {
        this['disk'] = disk;
        return this;
    }
    public withDataVolumeType(dataVolumeType: string): TemplateRequest {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: string  | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType(): string | undefined {
        return this['data_volume_type'];
    }
    public withTargetPassword(targetPassword: string): TemplateRequest {
        this['target_password'] = targetPassword;
        return this;
    }
    public set targetPassword(targetPassword: string  | undefined) {
        this['target_password'] = targetPassword;
    }
    public get targetPassword(): string | undefined {
        return this['target_password'];
    }
    public withImageId(imageId: string): TemplateRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
}