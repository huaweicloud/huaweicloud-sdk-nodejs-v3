

export class RestartClusterRequestBody {
    public restart: object;
    public constructor(restart?: any) { 
        this['restart'] = restart;
    }
    public withRestart(restart: object): RestartClusterRequestBody {
        this['restart'] = restart;
        return this;
    }
}