import { ChapterConfigReq } from './ChapterConfigReq';


export class CreateHealthReportTemplateReq {
    private 'template_name'?: string;
    public description?: string;
    private 'chapters_config'?: { [key: string]: ChapterConfigReq; };
    public constructor(templateName?: string, chaptersConfig?: { [key: string]: ChapterConfigReq; }) { 
        this['template_name'] = templateName;
        this['chapters_config'] = chaptersConfig;
    }
    public withTemplateName(templateName: string): CreateHealthReportTemplateReq {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): CreateHealthReportTemplateReq {
        this['description'] = description;
        return this;
    }
    public withChaptersConfig(chaptersConfig: { [key: string]: ChapterConfigReq; }): CreateHealthReportTemplateReq {
        this['chapters_config'] = chaptersConfig;
        return this;
    }
    public set chaptersConfig(chaptersConfig: { [key: string]: ChapterConfigReq; }  | undefined) {
        this['chapters_config'] = chaptersConfig;
    }
    public get chaptersConfig(): { [key: string]: ChapterConfigReq; } | undefined {
        return this['chapters_config'];
    }
}