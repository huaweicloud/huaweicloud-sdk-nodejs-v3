

export class DisasterRecoveryClusterVo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): DisasterRecoveryClusterVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DisasterRecoveryClusterVo {
        this['name'] = name;
        return this;
    }
}