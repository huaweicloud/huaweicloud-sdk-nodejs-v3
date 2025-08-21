

export class MergeMergeRequestBodyDto {
    private 'squash_commit_message'?: string;
    public squash?: boolean;
    private 'force_merge'?: boolean;
    public constructor() { 
    }
    public withSquashCommitMessage(squashCommitMessage: string): MergeMergeRequestBodyDto {
        this['squash_commit_message'] = squashCommitMessage;
        return this;
    }
    public set squashCommitMessage(squashCommitMessage: string  | undefined) {
        this['squash_commit_message'] = squashCommitMessage;
    }
    public get squashCommitMessage(): string | undefined {
        return this['squash_commit_message'];
    }
    public withSquash(squash: boolean): MergeMergeRequestBodyDto {
        this['squash'] = squash;
        return this;
    }
    public withForceMerge(forceMerge: boolean): MergeMergeRequestBodyDto {
        this['force_merge'] = forceMerge;
        return this;
    }
    public set forceMerge(forceMerge: boolean  | undefined) {
        this['force_merge'] = forceMerge;
    }
    public get forceMerge(): boolean | undefined {
        return this['force_merge'];
    }
}