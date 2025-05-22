import { IssueRecordV4Details } from './IssueRecordV4Details';
import { IssueRecordV4User } from './IssueRecordV4User';


export class IssueRecordV4 {
    public id?: number;
    private 'created_time'?: number;
    public user?: IssueRecordV4User;
    public details?: Array<IssueRecordV4Details>;
    public constructor() { 
    }
    public withId(id: number): IssueRecordV4 {
        this['id'] = id;
        return this;
    }
    public withCreatedTime(createdTime: number): IssueRecordV4 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withUser(user: IssueRecordV4User): IssueRecordV4 {
        this['user'] = user;
        return this;
    }
    public withDetails(details: Array<IssueRecordV4Details>): IssueRecordV4 {
        this['details'] = details;
        return this;
    }
}