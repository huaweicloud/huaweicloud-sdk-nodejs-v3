

export class Mesher {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): Mesher {
        this['port'] = port;
        return this;
    }
}