import { StatusVoIpd } from './StatusVoIpd';
import { UserVO } from './UserVO';


export class WorkItemVO {
    public id?: string;
    public title?: string;
    private 'number'?: string;
    public category?: string;
    public status?: StatusVoIpd;
    public assignee?: UserVO;
    public baseline?: string;
    private 'change_status'?: string;
    public constructor() { 
    }
    public withId(id: string): WorkItemVO {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): WorkItemVO {
        this['title'] = title;
        return this;
    }
    public withModelNumber(modelNumber: string): WorkItemVO {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withCategory(category: string): WorkItemVO {
        this['category'] = category;
        return this;
    }
    public withStatus(status: StatusVoIpd): WorkItemVO {
        this['status'] = status;
        return this;
    }
    public withAssignee(assignee: UserVO): WorkItemVO {
        this['assignee'] = assignee;
        return this;
    }
    public withBaseline(baseline: string): WorkItemVO {
        this['baseline'] = baseline;
        return this;
    }
    public withChangeStatus(changeStatus: string): WorkItemVO {
        this['change_status'] = changeStatus;
        return this;
    }
    public set changeStatus(changeStatus: string  | undefined) {
        this['change_status'] = changeStatus;
    }
    public get changeStatus(): string | undefined {
        return this['change_status'];
    }
}