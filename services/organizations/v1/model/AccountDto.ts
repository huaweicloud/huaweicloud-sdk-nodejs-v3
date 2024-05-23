

export class AccountDto {
    public id?: string;
    public urn?: string;
    private 'join_method'?: string;
    public status?: string;
    private 'joined_at'?: Date;
    public name?: string;
    public constructor(id?: string, urn?: string, joinMethod?: string, status?: string, joinedAt?: Date, name?: string) { 
        this['id'] = id;
        this['urn'] = urn;
        this['join_method'] = joinMethod;
        this['status'] = status;
        this['joined_at'] = joinedAt;
        this['name'] = name;
    }
    public withId(id: string): AccountDto {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): AccountDto {
        this['urn'] = urn;
        return this;
    }
    public withJoinMethod(joinMethod: string): AccountDto {
        this['join_method'] = joinMethod;
        return this;
    }
    public set joinMethod(joinMethod: string  | undefined) {
        this['join_method'] = joinMethod;
    }
    public get joinMethod(): string | undefined {
        return this['join_method'];
    }
    public withStatus(status: string): AccountDto {
        this['status'] = status;
        return this;
    }
    public withJoinedAt(joinedAt: Date): AccountDto {
        this['joined_at'] = joinedAt;
        return this;
    }
    public set joinedAt(joinedAt: Date  | undefined) {
        this['joined_at'] = joinedAt;
    }
    public get joinedAt(): Date | undefined {
        return this['joined_at'];
    }
    public withName(name: string): AccountDto {
        this['name'] = name;
        return this;
    }
}