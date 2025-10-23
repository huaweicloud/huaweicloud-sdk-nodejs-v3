import { StatisticsParamsDto } from './StatisticsParamsDto';


export class ExecuteRepositoryStatisticsRequest {
    private 'repository_id'?: number;
    public body?: StatisticsParamsDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ExecuteRepositoryStatisticsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: StatisticsParamsDto): ExecuteRepositoryStatisticsRequest {
        this['body'] = body;
        return this;
    }
}