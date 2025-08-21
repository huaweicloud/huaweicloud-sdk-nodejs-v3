import { CreateRepositoryMemberResponseDto } from './CreateRepositoryMemberResponseDto';


export class BatchCreateRepositoryMemberDto {
    public status?: string;
    public result?: Array<CreateRepositoryMemberResponseDto>;
    public constructor() { 
    }
    public withStatus(status: string): BatchCreateRepositoryMemberDto {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<CreateRepositoryMemberResponseDto>): BatchCreateRepositoryMemberDto {
        this['result'] = result;
        return this;
    }
}