

export class ShowStarRocksDatabaseUsersUserDetails {
    private 'user_name'?: string;
    private 'data_bases'?: Array<string>;
    public dml?: number;
    public ddl?: number;
    public constructor(userName?: string, dataBases?: Array<string>, dml?: number, ddl?: number) { 
        this['user_name'] = userName;
        this['data_bases'] = dataBases;
        this['dml'] = dml;
        this['ddl'] = ddl;
    }
    public withUserName(userName: string): ShowStarRocksDatabaseUsersUserDetails {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDataBases(dataBases: Array<string>): ShowStarRocksDatabaseUsersUserDetails {
        this['data_bases'] = dataBases;
        return this;
    }
    public set dataBases(dataBases: Array<string>  | undefined) {
        this['data_bases'] = dataBases;
    }
    public get dataBases(): Array<string> | undefined {
        return this['data_bases'];
    }
    public withDml(dml: number): ShowStarRocksDatabaseUsersUserDetails {
        this['dml'] = dml;
        return this;
    }
    public withDdl(ddl: number): ShowStarRocksDatabaseUsersUserDetails {
        this['ddl'] = ddl;
        return this;
    }
}