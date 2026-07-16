

export class EventCategoriesResp {
    public id?: string;
    public name?: string;
    public description?: string;
    public notification?: boolean;
    public constructor() { 
    }
    public withId(id: string): EventCategoriesResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EventCategoriesResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EventCategoriesResp {
        this['description'] = description;
        return this;
    }
    public withNotification(notification: boolean): EventCategoriesResp {
        this['notification'] = notification;
        return this;
    }
}