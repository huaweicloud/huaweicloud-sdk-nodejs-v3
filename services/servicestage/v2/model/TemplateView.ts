import { RuntimeType } from './RuntimeType';
import { Template } from './Template';


export class TemplateView {
    private 'template_name'?: Template;
    private 'template_desc'?: string;
    private 'source_type'?: string;
    private 'source_repo_url'?: string;
    public runtime?: RuntimeType;
    public constructor() { 
    }
    public withTemplateName(templateName: Template): TemplateView {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: Template  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): Template | undefined {
        return this['template_name'];
    }
    public withTemplateDesc(templateDesc: string): TemplateView {
        this['template_desc'] = templateDesc;
        return this;
    }
    public set templateDesc(templateDesc: string  | undefined) {
        this['template_desc'] = templateDesc;
    }
    public get templateDesc(): string | undefined {
        return this['template_desc'];
    }
    public withSourceType(sourceType: string): TemplateView {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceRepoUrl(sourceRepoUrl: string): TemplateView {
        this['source_repo_url'] = sourceRepoUrl;
        return this;
    }
    public set sourceRepoUrl(sourceRepoUrl: string  | undefined) {
        this['source_repo_url'] = sourceRepoUrl;
    }
    public get sourceRepoUrl(): string | undefined {
        return this['source_repo_url'];
    }
    public withRuntime(runtime: RuntimeType): TemplateView {
        this['runtime'] = runtime;
        return this;
    }
}