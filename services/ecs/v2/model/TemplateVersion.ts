import { TemplateData } from './TemplateData';


export class TemplateVersion {
    private 'template_data'?: TemplateData;
    private 'version_number'?: number;
    private 'version_id'?: string;
    private 'version_description'?: string;
    private 'created_at'?: string;
    private 'launch_template_id'?: string;
    public constructor() { 
    }
    public withTemplateData(templateData: TemplateData): TemplateVersion {
        this['template_data'] = templateData;
        return this;
    }
    public set templateData(templateData: TemplateData  | undefined) {
        this['template_data'] = templateData;
    }
    public get templateData(): TemplateData | undefined {
        return this['template_data'];
    }
    public withVersionNumber(versionNumber: number): TemplateVersion {
        this['version_number'] = versionNumber;
        return this;
    }
    public set versionNumber(versionNumber: number  | undefined) {
        this['version_number'] = versionNumber;
    }
    public get versionNumber(): number | undefined {
        return this['version_number'];
    }
    public withVersionId(versionId: string): TemplateVersion {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withVersionDescription(versionDescription: string): TemplateVersion {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withCreatedAt(createdAt: string): TemplateVersion {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withLaunchTemplateId(launchTemplateId: string): TemplateVersion {
        this['launch_template_id'] = launchTemplateId;
        return this;
    }
    public set launchTemplateId(launchTemplateId: string  | undefined) {
        this['launch_template_id'] = launchTemplateId;
    }
    public get launchTemplateId(): string | undefined {
        return this['launch_template_id'];
    }
}