import { ResolveConflictFileDto } from './ResolveConflictFileDto';


export class ResolveConflictDto {
    private 'commit_message'?: string;
    public files?: Array<ResolveConflictFileDto>;
    public constructor(commitMessage?: string, files?: Array<ResolveConflictFileDto>) { 
        this['commit_message'] = commitMessage;
        this['files'] = files;
    }
    public withCommitMessage(commitMessage: string): ResolveConflictDto {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withFiles(files: Array<ResolveConflictFileDto>): ResolveConflictDto {
        this['files'] = files;
        return this;
    }
}