

export class UpdateImageMemberRequestBody {
    public status?: UpdateImageMemberRequestBodyStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: UpdateImageMemberRequestBodyStatusEnum | string): UpdateImageMemberRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateImageMemberRequestBodyStatusEnum {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}
