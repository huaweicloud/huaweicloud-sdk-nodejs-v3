

export class InstanceRestartRequsetBody {
    public restart?: object;
    public constructor(restart?: object) { 
        this['restart'] = restart;
    }
    public withRestart(restart: object): InstanceRestartRequsetBody {
        this['restart'] = restart;
        return this;
    }
}