

export class DeleteNotificationRequestBody {
    public names?: Array<string>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withNames(names: Array<string>): DeleteNotificationRequestBody {
        this['names'] = names;
        return this;
    }
}