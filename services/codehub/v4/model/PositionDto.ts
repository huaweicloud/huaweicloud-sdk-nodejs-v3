

export class PositionDto {
    private 'base_sha'?: string;
    private 'start_sha'?: string;
    private 'head_sha'?: string;
    private 'old_path'?: string;
    private 'new_path'?: string;
    private 'position_type'?: string;
    private 'old_line'?: number;
    private 'new_line'?: number;
    public constructor() { 
    }
    public withBaseSha(baseSha: string): PositionDto {
        this['base_sha'] = baseSha;
        return this;
    }
    public set baseSha(baseSha: string  | undefined) {
        this['base_sha'] = baseSha;
    }
    public get baseSha(): string | undefined {
        return this['base_sha'];
    }
    public withStartSha(startSha: string): PositionDto {
        this['start_sha'] = startSha;
        return this;
    }
    public set startSha(startSha: string  | undefined) {
        this['start_sha'] = startSha;
    }
    public get startSha(): string | undefined {
        return this['start_sha'];
    }
    public withHeadSha(headSha: string): PositionDto {
        this['head_sha'] = headSha;
        return this;
    }
    public set headSha(headSha: string  | undefined) {
        this['head_sha'] = headSha;
    }
    public get headSha(): string | undefined {
        return this['head_sha'];
    }
    public withOldPath(oldPath: string): PositionDto {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: string): PositionDto {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: string  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): string | undefined {
        return this['new_path'];
    }
    public withPositionType(positionType: string): PositionDto {
        this['position_type'] = positionType;
        return this;
    }
    public set positionType(positionType: string  | undefined) {
        this['position_type'] = positionType;
    }
    public get positionType(): string | undefined {
        return this['position_type'];
    }
    public withOldLine(oldLine: number): PositionDto {
        this['old_line'] = oldLine;
        return this;
    }
    public set oldLine(oldLine: number  | undefined) {
        this['old_line'] = oldLine;
    }
    public get oldLine(): number | undefined {
        return this['old_line'];
    }
    public withNewLine(newLine: number): PositionDto {
        this['new_line'] = newLine;
        return this;
    }
    public set newLine(newLine: number  | undefined) {
        this['new_line'] = newLine;
    }
    public get newLine(): number | undefined {
        return this['new_line'];
    }
}