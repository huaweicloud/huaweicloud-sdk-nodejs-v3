

export class ActionProgress {
    private 'CREATING'?: string;
    private 'GROWING'?: string;
    private 'RESTORING'?: string;
    private 'SNAPSHOTTING'?: string;
    private 'REPAIRING'?: string;
    public constructor() { 
    }
    public withCreating(creating: string): ActionProgress {
        this['CREATING'] = creating;
        return this;
    }
    public set creating(creating: string  | undefined) {
        this['CREATING'] = creating;
    }
    public get creating(): string | undefined {
        return this['CREATING'];
    }
    public withGrowing(growing: string): ActionProgress {
        this['GROWING'] = growing;
        return this;
    }
    public set growing(growing: string  | undefined) {
        this['GROWING'] = growing;
    }
    public get growing(): string | undefined {
        return this['GROWING'];
    }
    public withRestoring(restoring: string): ActionProgress {
        this['RESTORING'] = restoring;
        return this;
    }
    public set restoring(restoring: string  | undefined) {
        this['RESTORING'] = restoring;
    }
    public get restoring(): string | undefined {
        return this['RESTORING'];
    }
    public withSnapshotting(snapshotting: string): ActionProgress {
        this['SNAPSHOTTING'] = snapshotting;
        return this;
    }
    public set snapshotting(snapshotting: string  | undefined) {
        this['SNAPSHOTTING'] = snapshotting;
    }
    public get snapshotting(): string | undefined {
        return this['SNAPSHOTTING'];
    }
    public withRepairing(repairing: string): ActionProgress {
        this['REPAIRING'] = repairing;
        return this;
    }
    public set repairing(repairing: string  | undefined) {
        this['REPAIRING'] = repairing;
    }
    public get repairing(): string | undefined {
        return this['REPAIRING'];
    }
}