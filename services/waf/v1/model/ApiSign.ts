

export class ApiSign {
    public status?: number;
    public constructor() { 
    }
    public withStatus(status: number): ApiSign {
        this['status'] = status;
        return this;
    }
}