

export class Result {
    public address?: string;
    public port?: number;
    public status?: number;
    public constructor() { 
    }
    public withAddress(address: string): Result {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): Result {
        this['port'] = port;
        return this;
    }
    public withStatus(status: number): Result {
        this['status'] = status;
        return this;
    }
}