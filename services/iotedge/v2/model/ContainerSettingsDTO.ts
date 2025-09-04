import { ContainerConfigsDTO } from './ContainerConfigsDTO';
import { ExtDevice } from './ExtDevice';
import { ResourceDTO } from './ResourceDTO';
import { VolumeDTO } from './VolumeDTO';


export class ContainerSettingsDTO {
    public configs?: ContainerConfigsDTO;
    private 'image_url'?: string;
    public envs?: object;
    public volumes?: Array<VolumeDTO>;
    private 'npu_type'?: ContainerSettingsDTONpuTypeEnum | string;
    private 'vnpu_template'?: ContainerSettingsDTOVnpuTemplateEnum | string;
    public resources?: ResourceDTO;
    private 'ext_devices'?: Array<ExtDevice>;
    public constructor(imageUrl?: string) { 
        this['image_url'] = imageUrl;
    }
    public withConfigs(configs: ContainerConfigsDTO): ContainerSettingsDTO {
        this['configs'] = configs;
        return this;
    }
    public withImageUrl(imageUrl: string): ContainerSettingsDTO {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withEnvs(envs: object): ContainerSettingsDTO {
        this['envs'] = envs;
        return this;
    }
    public withVolumes(volumes: Array<VolumeDTO>): ContainerSettingsDTO {
        this['volumes'] = volumes;
        return this;
    }
    public withNpuType(npuType: ContainerSettingsDTONpuTypeEnum | string): ContainerSettingsDTO {
        this['npu_type'] = npuType;
        return this;
    }
    public set npuType(npuType: ContainerSettingsDTONpuTypeEnum | string  | undefined) {
        this['npu_type'] = npuType;
    }
    public get npuType(): ContainerSettingsDTONpuTypeEnum | string | undefined {
        return this['npu_type'];
    }
    public withVnpuTemplate(vnpuTemplate: ContainerSettingsDTOVnpuTemplateEnum | string): ContainerSettingsDTO {
        this['vnpu_template'] = vnpuTemplate;
        return this;
    }
    public set vnpuTemplate(vnpuTemplate: ContainerSettingsDTOVnpuTemplateEnum | string  | undefined) {
        this['vnpu_template'] = vnpuTemplate;
    }
    public get vnpuTemplate(): ContainerSettingsDTOVnpuTemplateEnum | string | undefined {
        return this['vnpu_template'];
    }
    public withResources(resources: ResourceDTO): ContainerSettingsDTO {
        this['resources'] = resources;
        return this;
    }
    public withExtDevices(extDevices: Array<ExtDevice>): ContainerSettingsDTO {
        this['ext_devices'] = extDevices;
        return this;
    }
    public set extDevices(extDevices: Array<ExtDevice>  | undefined) {
        this['ext_devices'] = extDevices;
    }
    public get extDevices(): Array<ExtDevice> | undefined {
        return this['ext_devices'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ContainerSettingsDTONpuTypeEnum {
    D310 = 'D310',
    D910 = 'D910',
    D310P = 'D310P'
}
/**
    * @export
    * @enum {string}
    */
export enum ContainerSettingsDTOVnpuTemplateEnum {
    VIR01 = 'vir01',
    VIR02 = 'vir02',
    VIR04 = 'vir04',
    VIR08 = 'vir08',
    VIR02_1C = 'vir02_1c',
    VIR04_3C = 'vir04_3c',
    VIR04_3C_NDVPP = 'vir04_3c_ndvpp',
    VIR04_4C_DVPP = 'vir04_4c_dvpp'
}
