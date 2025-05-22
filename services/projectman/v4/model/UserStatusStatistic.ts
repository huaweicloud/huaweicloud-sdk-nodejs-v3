import { IssueUser } from './IssueUser';


export class UserStatusStatistic {
    public user?: IssueUser;
    private 'item_count'?: number;
    public data?: { [key: string]: number; };
    public constructor() { 
    }
    public withUser(user: IssueUser): UserStatusStatistic {
        this['user'] = user;
        return this;
    }
    public withItemCount(itemCount: number): UserStatusStatistic {
        this['item_count'] = itemCount;
        return this;
    }
    public set itemCount(itemCount: number  | undefined) {
        this['item_count'] = itemCount;
    }
    public get itemCount(): number | undefined {
        return this['item_count'];
    }
    public withData(data: { [key: string]: number; }): UserStatusStatistic {
        this['data'] = data;
        return this;
    }
}