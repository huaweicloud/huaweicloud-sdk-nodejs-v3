import { DevstarRepoInfo } from './DevstarRepoInfo';


export class TemplateListInfo {
    public repos?: Array<DevstarRepoInfo>;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withRepos(repos: Array<DevstarRepoInfo>): TemplateListInfo {
        this['repos'] = repos;
        return this;
    }
    public withTotalCount(totalCount: number): TemplateListInfo {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}