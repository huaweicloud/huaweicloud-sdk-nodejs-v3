

export class UpdatePermissionExpireTimeResultDTOResults {
    public id?: string;
    public message?: string;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): UpdatePermissionExpireTimeResultDTOResults {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): UpdatePermissionExpireTimeResultDTOResults {
        this['message'] = message;
        return this;
    }
    public withStatus(status: number): UpdatePermissionExpireTimeResultDTOResults {
        this['status'] = status;
        return this;
    }
}