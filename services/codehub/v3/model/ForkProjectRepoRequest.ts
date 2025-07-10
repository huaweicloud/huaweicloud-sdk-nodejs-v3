import { ExternalKeyMessage } from './ExternalKeyMessage';


export class ForkProjectRepoRequest {
    private 'import_members'?: number;
    private 'project_name'?: string;
    private 'repo_name'?: string;
    private 'template_id'?: string;
    public type?: string;
    private 'visibility_level'?: number;
    private 'external_project_info'?: ExternalKeyMessage;
    public constructor(projectName?: string, repoName?: string, templateId?: string) { 
        this['project_name'] = projectName;
        this['repo_name'] = repoName;
        this['template_id'] = templateId;
    }
    public withImportMembers(importMembers: number): ForkProjectRepoRequest {
        this['import_members'] = importMembers;
        return this;
    }
    public set importMembers(importMembers: number  | undefined) {
        this['import_members'] = importMembers;
    }
    public get importMembers(): number | undefined {
        return this['import_members'];
    }
    public withProjectName(projectName: string): ForkProjectRepoRequest {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRepoName(repoName: string): ForkProjectRepoRequest {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withTemplateId(templateId: string): ForkProjectRepoRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withType(type: string): ForkProjectRepoRequest {
        this['type'] = type;
        return this;
    }
    public withVisibilityLevel(visibilityLevel: number): ForkProjectRepoRequest {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withExternalProjectInfo(externalProjectInfo: ExternalKeyMessage): ForkProjectRepoRequest {
        this['external_project_info'] = externalProjectInfo;
        return this;
    }
    public set externalProjectInfo(externalProjectInfo: ExternalKeyMessage  | undefined) {
        this['external_project_info'] = externalProjectInfo;
    }
    public get externalProjectInfo(): ExternalKeyMessage | undefined {
        return this['external_project_info'];
    }
}