

export class DeleteAlertNoticeConfigBody {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): DeleteAlertNoticeConfigBody {
        this['id'] = id;
        return this;
    }
}