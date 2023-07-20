

export class RestVideoBody {
    public status?: number;
    public constructor(status?: number) { 
        this['status'] = status;
    }
    public withStatus(status: number): RestVideoBody {
        this['status'] = status;
        return this;
    }
}