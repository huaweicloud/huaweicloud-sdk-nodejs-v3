import { TemplateRepository } from './TemplateRepository';


export class TemplateRepositoryList {
    public projects?: Array<TemplateRepository>;
    public total?: number;
    public constructor() { 
    }
    public withProjects(projects: Array<TemplateRepository>): TemplateRepositoryList {
        this['projects'] = projects;
        return this;
    }
    public withTotal(total: number): TemplateRepositoryList {
        this['total'] = total;
        return this;
    }
}