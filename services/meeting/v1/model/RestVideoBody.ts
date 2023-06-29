

export class RestVideoBody {
    public status: number;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: number): RestVideoBody {
        this['status'] = status;
        return this;
    }
}