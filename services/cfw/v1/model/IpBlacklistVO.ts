

export class IpBlacklistVO {
    public name?: string;
    private 'effect_scope'?: Array<number>;
    private 'import_status'?: number;
    private 'import_time'?: number;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withName(name: string): IpBlacklistVO {
        this['name'] = name;
        return this;
    }
    public withEffectScope(effectScope: Array<number>): IpBlacklistVO {
        this['effect_scope'] = effectScope;
        return this;
    }
    public set effectScope(effectScope: Array<number>  | undefined) {
        this['effect_scope'] = effectScope;
    }
    public get effectScope(): Array<number> | undefined {
        return this['effect_scope'];
    }
    public withImportStatus(importStatus: number): IpBlacklistVO {
        this['import_status'] = importStatus;
        return this;
    }
    public set importStatus(importStatus: number  | undefined) {
        this['import_status'] = importStatus;
    }
    public get importStatus(): number | undefined {
        return this['import_status'];
    }
    public withImportTime(importTime: number): IpBlacklistVO {
        this['import_time'] = importTime;
        return this;
    }
    public set importTime(importTime: number  | undefined) {
        this['import_time'] = importTime;
    }
    public get importTime(): number | undefined {
        return this['import_time'];
    }
    public withErrorMessage(errorMessage: string): IpBlacklistVO {
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