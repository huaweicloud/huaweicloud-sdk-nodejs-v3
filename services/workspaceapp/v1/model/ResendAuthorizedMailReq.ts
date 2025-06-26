

export class ResendAuthorizedMailReq {
    public records?: Array<string>;
    public constructor(records?: Array<string>) { 
        this['records'] = records;
    }
    public withRecords(records: Array<string>): ResendAuthorizedMailReq {
        this['records'] = records;
        return this;
    }
}