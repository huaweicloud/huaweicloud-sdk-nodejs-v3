

export class AddSubscriptionFromSubscriptionUserRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): AddSubscriptionFromSubscriptionUserRequestBody {
        this['ids'] = ids;
        return this;
    }
}