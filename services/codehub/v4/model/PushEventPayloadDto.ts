

export class PushEventPayloadDto {
    private 'commit_count'?: number;
    public action?: string;
    private 'ref_type'?: string;
    private 'commit_from'?: string;
    private 'commit_to'?: string;
    public ref?: string;
    private 'commit_title'?: string;
    public constructor() { 
    }
    public withCommitCount(commitCount: number): PushEventPayloadDto {
        this['commit_count'] = commitCount;
        return this;
    }
    public set commitCount(commitCount: number  | undefined) {
        this['commit_count'] = commitCount;
    }
    public get commitCount(): number | undefined {
        return this['commit_count'];
    }
    public withAction(action: string): PushEventPayloadDto {
        this['action'] = action;
        return this;
    }
    public withRefType(refType: string): PushEventPayloadDto {
        this['ref_type'] = refType;
        return this;
    }
    public set refType(refType: string  | undefined) {
        this['ref_type'] = refType;
    }
    public get refType(): string | undefined {
        return this['ref_type'];
    }
    public withCommitFrom(commitFrom: string): PushEventPayloadDto {
        this['commit_from'] = commitFrom;
        return this;
    }
    public set commitFrom(commitFrom: string  | undefined) {
        this['commit_from'] = commitFrom;
    }
    public get commitFrom(): string | undefined {
        return this['commit_from'];
    }
    public withCommitTo(commitTo: string): PushEventPayloadDto {
        this['commit_to'] = commitTo;
        return this;
    }
    public set commitTo(commitTo: string  | undefined) {
        this['commit_to'] = commitTo;
    }
    public get commitTo(): string | undefined {
        return this['commit_to'];
    }
    public withRef(ref: string): PushEventPayloadDto {
        this['ref'] = ref;
        return this;
    }
    public withCommitTitle(commitTitle: string): PushEventPayloadDto {
        this['commit_title'] = commitTitle;
        return this;
    }
    public set commitTitle(commitTitle: string  | undefined) {
        this['commit_title'] = commitTitle;
    }
    public get commitTitle(): string | undefined {
        return this['commit_title'];
    }
}