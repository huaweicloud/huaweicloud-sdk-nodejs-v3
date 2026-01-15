import { TagKeyValue } from './TagKeyValue';


export class DesktopToImageReq {
    private 'image_name'?: string;
    private 'image_description'?: string;
    private 'desktop_id'?: string;
    private 'execute_sysprep'?: boolean;
    private 'image_tags'?: Array<TagKeyValue>;
    private 'enterprise_project_id'?: string;
    private 'is_clear_data'?: boolean;
    private 'max_ram'?: string;
    private 'min_ram'?: string;
    public constructor(imageName?: string, desktopId?: string) { 
        this['image_name'] = imageName;
        this['desktop_id'] = desktopId;
    }
    public withImageName(imageName: string): DesktopToImageReq {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageDescription(imageDescription: string): DesktopToImageReq {
        this['image_description'] = imageDescription;
        return this;
    }
    public set imageDescription(imageDescription: string  | undefined) {
        this['image_description'] = imageDescription;
    }
    public get imageDescription(): string | undefined {
        return this['image_description'];
    }
    public withDesktopId(desktopId: string): DesktopToImageReq {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withExecuteSysprep(executeSysprep: boolean): DesktopToImageReq {
        this['execute_sysprep'] = executeSysprep;
        return this;
    }
    public set executeSysprep(executeSysprep: boolean  | undefined) {
        this['execute_sysprep'] = executeSysprep;
    }
    public get executeSysprep(): boolean | undefined {
        return this['execute_sysprep'];
    }
    public withImageTags(imageTags: Array<TagKeyValue>): DesktopToImageReq {
        this['image_tags'] = imageTags;
        return this;
    }
    public set imageTags(imageTags: Array<TagKeyValue>  | undefined) {
        this['image_tags'] = imageTags;
    }
    public get imageTags(): Array<TagKeyValue> | undefined {
        return this['image_tags'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DesktopToImageReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIsClearData(isClearData: boolean): DesktopToImageReq {
        this['is_clear_data'] = isClearData;
        return this;
    }
    public set isClearData(isClearData: boolean  | undefined) {
        this['is_clear_data'] = isClearData;
    }
    public get isClearData(): boolean | undefined {
        return this['is_clear_data'];
    }
    public withMaxRam(maxRam: string): DesktopToImageReq {
        this['max_ram'] = maxRam;
        return this;
    }
    public set maxRam(maxRam: string  | undefined) {
        this['max_ram'] = maxRam;
    }
    public get maxRam(): string | undefined {
        return this['max_ram'];
    }
    public withMinRam(minRam: string): DesktopToImageReq {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: string  | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam(): string | undefined {
        return this['min_ram'];
    }
}