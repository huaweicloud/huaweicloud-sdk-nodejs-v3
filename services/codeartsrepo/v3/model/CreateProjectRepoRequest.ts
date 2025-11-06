import { ExternalKeyMessage } from './ExternalKeyMessage';


export class CreateProjectRepoRequest {
    private 'import_members'?: number;
    private 'project_name'?: string;
    private 'repo_name'?: string;
    public type?: string;
    private 'visibility_level'?: number;
    private 'external_project_info'?: ExternalKeyMessage;
    public constructor(projectName?: string, repoName?: string) { 
        this['project_name'] = projectName;
        this['repo_name'] = repoName;
    }
    public withImportMembers(importMembers: number): CreateProjectRepoRequest {
        this['import_members'] = importMembers;
        return this;
    }
    public set importMembers(importMembers: number  | undefined) {
        this['import_members'] = importMembers;
    }
    public get importMembers(): number | undefined {
        return this['import_members'];
    }
    public withProjectName(projectName: string): CreateProjectRepoRequest {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRepoName(repoName: string): CreateProjectRepoRequest {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withType(type: string): CreateProjectRepoRequest {
        this['type'] = type;
        return this;
    }
    public withVisibilityLevel(visibilityLevel: number): CreateProjectRepoRequest {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withExternalProjectInfo(externalProjectInfo: ExternalKeyMessage): CreateProjectRepoRequest {
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