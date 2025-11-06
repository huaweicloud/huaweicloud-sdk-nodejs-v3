

export class DiffRefDto {
    private 'base_sha'?: string;
    private 'head_sha'?: string;
    private 'start_sha'?: string;
    public constructor() { 
    }
    public withBaseSha(baseSha: string): DiffRefDto {
        this['base_sha'] = baseSha;
        return this;
    }
    public set baseSha(baseSha: string  | undefined) {
        this['base_sha'] = baseSha;
    }
    public get baseSha(): string | undefined {
        return this['base_sha'];
    }
    public withHeadSha(headSha: string): DiffRefDto {
        this['head_sha'] = headSha;
        return this;
    }
    public set headSha(headSha: string  | undefined) {
        this['head_sha'] = headSha;
    }
    public get headSha(): string | undefined {
        return this['head_sha'];
    }
    public withStartSha(startSha: string): DiffRefDto {
        this['start_sha'] = startSha;
        return this;
    }
    public set startSha(startSha: string  | undefined) {
        this['start_sha'] = startSha;
    }
    public get startSha(): string | undefined {
        return this['start_sha'];
    }
}