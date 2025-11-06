import { ValidateRepoNameDto } from './ValidateRepoNameDto';


export class BatchValidateRepoNamesRequest {
    public body?: ValidateRepoNameDto;
    public constructor() { 
    }
    public withBody(body: ValidateRepoNameDto): BatchValidateRepoNamesRequest {
        this['body'] = body;
        return this;
    }
}