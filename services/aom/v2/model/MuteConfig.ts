

export class MuteConfig {
    private 'ends_at'?: number;
    public scope?: Array<string>;
    private 'starts_at'?: number;
    public type?: MuteConfigTypeEnum | string;
    public constructor(startsAt?: number, type?: string) { 
        this['starts_at'] = startsAt;
        this['type'] = type;
    }
    public withEndsAt(endsAt: number): MuteConfig {
        this['ends_at'] = endsAt;
        return this;
    }
    public set endsAt(endsAt: number  | undefined) {
        this['ends_at'] = endsAt;
    }
    public get endsAt(): number | undefined {
        return this['ends_at'];
    }
    public withScope(scope: Array<string>): MuteConfig {
        this['scope'] = scope;
        return this;
    }
    public withStartsAt(startsAt: number): MuteConfig {
        this['starts_at'] = startsAt;
        return this;
    }
    public set startsAt(startsAt: number  | undefined) {
        this['starts_at'] = startsAt;
    }
    public get startsAt(): number | undefined {
        return this['starts_at'];
    }
    public withType(type: MuteConfigTypeEnum | string): MuteConfig {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MuteConfigTypeEnum {
    FIXED = 'FIXED',
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY'
}
