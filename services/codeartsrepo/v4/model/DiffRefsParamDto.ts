

export class DiffRefsParamDto {
    private 'base_sha'?: string;
    private 'start_sha'?: string;
    private 'head_sha'?: string;
    public constructor(baseSha?: string, startSha?: string, headSha?: string) { 
        this['base_sha'] = baseSha;
        this['start_sha'] = startSha;
        this['head_sha'] = headSha;
    }
    public withBaseSha(baseSha: string): DiffRefsParamDto {
        this['base_sha'] = baseSha;
        return this;
    }
    public set baseSha(baseSha: string  | undefined) {
        this['base_sha'] = baseSha;
    }
    public get baseSha(): string | undefined {
        return this['base_sha'];
    }
    public withStartSha(startSha: string): DiffRefsParamDto {
        this['start_sha'] = startSha;
        return this;
    }
    public set startSha(startSha: string  | undefined) {
        this['start_sha'] = startSha;
    }
    public get startSha(): string | undefined {
        return this['start_sha'];
    }
    public withHeadSha(headSha: string): DiffRefsParamDto {
        this['head_sha'] = headSha;
        return this;
    }
    public set headSha(headSha: string  | undefined) {
        this['head_sha'] = headSha;
    }
    public get headSha(): string | undefined {
        return this['head_sha'];
    }
}