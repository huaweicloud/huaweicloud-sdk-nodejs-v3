

export class PiInfo {
    public sprints?: Array<string>;
    private 'pi_id'?: string;
    public constructor() { 
    }
    public withSprints(sprints: Array<string>): PiInfo {
        this['sprints'] = sprints;
        return this;
    }
    public withPiId(piId: string): PiInfo {
        this['pi_id'] = piId;
        return this;
    }
    public set piId(piId: string  | undefined) {
        this['pi_id'] = piId;
    }
    public get piId(): string | undefined {
        return this['pi_id'];
    }
}