import { TemplateData } from './TemplateData';


export class LaunchTemplateOption {
    private 'template_data'?: TemplateData;
    public name?: string;
    public description?: string;
    private 'version_description'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withTemplateData(templateData: TemplateData): LaunchTemplateOption {
        this['template_data'] = templateData;
        return this;
    }
    public set templateData(templateData: TemplateData  | undefined) {
        this['template_data'] = templateData;
    }
    public get templateData(): TemplateData | undefined {
        return this['template_data'];
    }
    public withName(name: string): LaunchTemplateOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): LaunchTemplateOption {
        this['description'] = description;
        return this;
    }
    public withVersionDescription(versionDescription: string): LaunchTemplateOption {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
}