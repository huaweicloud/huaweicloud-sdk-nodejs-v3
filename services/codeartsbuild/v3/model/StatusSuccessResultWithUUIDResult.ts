

export class StatusSuccessResultWithUUIDResult {
    public uuid?: string;
    public constructor() { 
    }
    public withUuid(uuid: string): StatusSuccessResultWithUUIDResult {
        this['uuid'] = uuid;
        return this;
    }
}