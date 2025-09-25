

export class UpdateWebTamperRaspPathRequestInfo {
    private 'rasp_path'?: string;
    public constructor(raspPath?: string) { 
        this['rasp_path'] = raspPath;
    }
    public withRaspPath(raspPath: string): UpdateWebTamperRaspPathRequestInfo {
        this['rasp_path'] = raspPath;
        return this;
    }
    public set raspPath(raspPath: string  | undefined) {
        this['rasp_path'] = raspPath;
    }
    public get raspPath(): string | undefined {
        return this['rasp_path'];
    }
}