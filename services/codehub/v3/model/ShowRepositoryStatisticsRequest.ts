import { ShowRepositoryStatisticsRequestBody } from './ShowRepositoryStatisticsRequestBody';


export class ShowRepositoryStatisticsRequest {
    private 'repository_id'?: number;
    public body?: ShowRepositoryStatisticsRequestBody;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ShowRepositoryStatisticsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: ShowRepositoryStatisticsRequestBody): ShowRepositoryStatisticsRequest {
        this['body'] = body;
        return this;
    }
}