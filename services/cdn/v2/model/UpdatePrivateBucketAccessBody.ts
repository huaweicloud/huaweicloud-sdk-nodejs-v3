

export class UpdatePrivateBucketAccessBody {
    public status?: boolean;
    public constructor() { 
    }
    public withStatus(status: boolean): UpdatePrivateBucketAccessBody {
        this['status'] = status;
        return this;
    }
}