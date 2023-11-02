

export class CatalogMoveParaDTO {
    private 'target_pid'?: string;
    public constructor() { 
    }
    public withTargetPid(targetPid: string): CatalogMoveParaDTO {
        this['target_pid'] = targetPid;
        return this;
    }
    public set targetPid(targetPid: string  | undefined) {
        this['target_pid'] = targetPid;
    }
    public get targetPid(): string | undefined {
        return this['target_pid'];
    }
}