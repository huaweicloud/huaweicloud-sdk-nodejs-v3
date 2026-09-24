

export class UpdateExpirationTimeReq {
    private 'expect_expiration_date'?: string;
    private 'time_zone'?: string;
    public constructor(expectExpirationDate?: string, timeZone?: string) { 
        this['expect_expiration_date'] = expectExpirationDate;
        this['time_zone'] = timeZone;
    }
    public withExpectExpirationDate(expectExpirationDate: string): UpdateExpirationTimeReq {
        this['expect_expiration_date'] = expectExpirationDate;
        return this;
    }
    public set expectExpirationDate(expectExpirationDate: string  | undefined) {
        this['expect_expiration_date'] = expectExpirationDate;
    }
    public get expectExpirationDate(): string | undefined {
        return this['expect_expiration_date'];
    }
    public withTimeZone(timeZone: string): UpdateExpirationTimeReq {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}