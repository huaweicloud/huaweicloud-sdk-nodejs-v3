import { Duration } from './Duration';


export class GeneralRequest {
    private 'db_id'?: string;
    public regenerate?: number;
    public time?: Duration;
    public constructor(regenerate?: number, time?: Duration) { 
        this['regenerate'] = regenerate;
        this['time'] = time;
    }
    public withDbId(dbId: string): GeneralRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withRegenerate(regenerate: number): GeneralRequest {
        this['regenerate'] = regenerate;
        return this;
    }
    public withTime(time: Duration): GeneralRequest {
        this['time'] = time;
        return this;
    }
}