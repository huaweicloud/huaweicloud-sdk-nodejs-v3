

export class PostgresqlUserForList {
    public name?: string;
    public attributes?: object;
    public memberof?: Array<string>;
    public comment?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PostgresqlUserForList {
        this['name'] = name;
        return this;
    }
    public withAttributes(attributes: object): PostgresqlUserForList {
        this['attributes'] = attributes;
        return this;
    }
    public withMemberof(memberof: Array<string>): PostgresqlUserForList {
        this['memberof'] = memberof;
        return this;
    }
    public withComment(comment: string): PostgresqlUserForList {
        this['comment'] = comment;
        return this;
    }
}