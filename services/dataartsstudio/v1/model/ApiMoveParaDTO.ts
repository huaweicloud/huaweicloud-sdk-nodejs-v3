

export class ApiMoveParaDTO {
    private 'target_pid'?: string;
    public apis?: Array<string>;
    public constructor() { 
    }
    public withTargetPid(targetPid: string): ApiMoveParaDTO {
        this['target_pid'] = targetPid;
        return this;
    }
    public set targetPid(targetPid: string  | undefined) {
        this['target_pid'] = targetPid;
    }
    public get targetPid(): string | undefined {
        return this['target_pid'];
    }
    public withApis(apis: Array<string>): ApiMoveParaDTO {
        this['apis'] = apis;
        return this;
    }
}