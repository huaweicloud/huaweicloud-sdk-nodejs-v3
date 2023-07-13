import { Nics } from './Nics';
import { PublicIp } from './PublicIp';
import { SgObject } from './SgObject';
import { TemplateDisk } from './TemplateDisk';
import { VpcObject } from './VpcObject';


export class TemplateResponseBody {
    public id?: string;
    public name: string;
    private 'is_template'?: string | undefined;
    public region: string;
    public projectid: string;
    private 'target_server_name': string | undefined;
    private 'availability_zone': string | undefined;
    public volumetype: TemplateResponseBodyVolumetypeEnum;
    public flavor: string;
    public vpc: VpcObject;
    public nics: Array<Nics>;
    private 'security_groups': Array<SgObject> | undefined;
    public publicip: PublicIp;
    public disk: Array<TemplateDisk>;
    private 'data_volume_type': TemplateResponseBodyDataVolumeTypeEnum | undefined;
    private 'target_password': string | undefined;
    private 'image_id'?: string | undefined;
    public constructor(name?: any, region?: any, projectid?: any, targetServerName?: any, availabilityZone?: any, volumetype?: any, flavor?: any, vpc?: any, nics?: any, securityGroups?: any, publicip?: any, disk?: any, dataVolumeType?: any, targetPassword?: any) { 
        this['name'] = name;
        this['region'] = region;
        this['projectid'] = projectid;
        this['target_server_name'] = targetServerName;
        this['availability_zone'] = availabilityZone;
        this['volumetype'] = volumetype;
        this['flavor'] = flavor;
        this['vpc'] = vpc;
        this['nics'] = nics;
        this['security_groups'] = securityGroups;
        this['publicip'] = publicip;
        this['disk'] = disk;
        this['data_volume_type'] = dataVolumeType;
        this['target_password'] = targetPassword;
    }
    public withId(id: string): TemplateResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TemplateResponseBody {
        this['name'] = name;
        return this;
    }
    public withIsTemplate(isTemplate: string): TemplateResponseBody {
        this['is_template'] = isTemplate;
        return this;
    }
    public set isTemplate(isTemplate: string | undefined) {
        this['is_template'] = isTemplate;
    }
    public get isTemplate() {
        return this['is_template'];
    }
    public withRegion(region: string): TemplateResponseBody {
        this['region'] = region;
        return this;
    }
    public withProjectid(projectid: string): TemplateResponseBody {
        this['projectid'] = projectid;
        return this;
    }
    public withTargetServerName(targetServerName: string): TemplateResponseBody {
        this['target_server_name'] = targetServerName;
        return this;
    }
    public set targetServerName(targetServerName: string | undefined) {
        this['target_server_name'] = targetServerName;
    }
    public get targetServerName() {
        return this['target_server_name'];
    }
    public withAvailabilityZone(availabilityZone: string): TemplateResponseBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withVolumetype(volumetype: TemplateResponseBodyVolumetypeEnum): TemplateResponseBody {
        this['volumetype'] = volumetype;
        return this;
    }
    public withFlavor(flavor: string): TemplateResponseBody {
        this['flavor'] = flavor;
        return this;
    }
    public withVpc(vpc: VpcObject): TemplateResponseBody {
        this['vpc'] = vpc;
        return this;
    }
    public withNics(nics: Array<Nics>): TemplateResponseBody {
        this['nics'] = nics;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SgObject>): TemplateResponseBody {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SgObject> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withPublicip(publicip: PublicIp): TemplateResponseBody {
        this['publicip'] = publicip;
        return this;
    }
    public withDisk(disk: Array<TemplateDisk>): TemplateResponseBody {
        this['disk'] = disk;
        return this;
    }
    public withDataVolumeType(dataVolumeType: TemplateResponseBodyDataVolumeTypeEnum): TemplateResponseBody {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: TemplateResponseBodyDataVolumeTypeEnum | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType() {
        return this['data_volume_type'];
    }
    public withTargetPassword(targetPassword: string): TemplateResponseBody {
        this['target_password'] = targetPassword;
        return this;
    }
    public set targetPassword(targetPassword: string | undefined) {
        this['target_password'] = targetPassword;
    }
    public get targetPassword() {
        return this['target_password'];
    }
    public withImageId(imageId: string): TemplateResponseBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateResponseBodyVolumetypeEnum {
    SAS = 'SAS',
    SSD = 'SSD',
    SATA = 'SATA'
}
/**
    * @export
    * @enum {string}
    */
export enum TemplateResponseBodyDataVolumeTypeEnum {
    SAS = 'SAS',
    SSD = 'SSD',
    SATA = 'SATA'
}
