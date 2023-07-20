

export class UpdateDbPortRequest {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): UpdateDbPortRequest {
        this['port'] = port;
        return this;
    }
}