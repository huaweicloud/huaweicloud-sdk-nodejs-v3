import { ValidateRepoNameDto } from './ValidateRepoNameDto';


export class ValidateRepoNameResultDto {
    public name?: string;
    private 'project_id'?: string;
    private 'group_id'?: number;
    public result?: boolean;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withName(name: string): ValidateRepoNameResultDto {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ValidateRepoNameResultDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGroupId(groupId: number): ValidateRepoNameResultDto {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withResult(result: boolean): ValidateRepoNameResultDto {
        this['result'] = result;
        return this;
    }
    public withErrorMessage(errorMessage: string): ValidateRepoNameResultDto {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}